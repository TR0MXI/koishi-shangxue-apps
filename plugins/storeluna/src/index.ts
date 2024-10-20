import { Context } from 'koishi'
import {} from '@koishijs/plugin-server'
import { SearchResult } from '@koishijs/registry'
import { Config } from './config'
import { FilterRule, SearchFilter, readFilterRule } from './filter'

export const name = 'storeluna'
export * from './config'
export const inject = {
        required: ['server'],
}

export async function apply(ctx: Context, config: Config) {
        const upstream = config.upstream
        const serverPath = config.path
        const time = config.time
        const reportTime = config.reportTime
        const logger = ctx.logger('storeluna')
        const filterRule = await readFilterRule(ctx.baseDir)

        if (!ctx.server) {
                logger.error('server加载失败插件')
                return
        }

        let visitCountBuffer = new SharedArrayBuffer(4)
        let visitCount = new Int32Array(visitCountBuffer)
        let syncCount = 0
        let successCount = 0
        let data: SearchResult = await updateFromUpstream(ctx, upstream, config, filterRule)

        syncCount++
        if (data) {
                logger.info(`同步上游: ${upstream}`)
                successCount++
        }

        ctx.setInterval(async () => {
                const response = await updateFromUpstream(ctx, upstream, config, filterRule)
                syncCount++

                if (response) {
                        data = response
                        successCount++
                }
        }, time * 1000)

        ctx.setInterval(() => {
                const reportContent = config.reportContent
                        .replace('{visitCount}', `${Atomics.load(visitCount, 0)}`)
                        .replace('{syncCount}', `${syncCount}`)
                        .replace('{successCount}', `${successCount}`)
                logger.info(reportContent)
        }, reportTime * 1000)

        try {
                ctx.server['get'](serverPath, (ctx) => {
                        ctx.status = 200
                        ctx.body = data
                        Atomics.add(visitCount, 0, 1)
                })
                logger.info(`监听路径: ${serverPath}`)
        } catch (error) {
                logger.error(error)
        }
}

async function updateFromUpstream(
        ctx: Context, 
        upstream: string, 
        config: Config, 
        filterRule: FilterRule
) : Promise<SearchResult> {
        try {
                const response: SearchResult = await ctx.http.get<SearchResult>(upstream)
                const data: SearchResult = SearchFilter(response, config, filterRule)
                if (!config.updateNotice) return data
                
                data.objects.forEach(item => {
                        if (item.shortname !== 'storeluna') return

                        const Notice = config.Notice.replace('{date}', new Date().toLocaleString())
                        item.manifest.description = Notice
                        item.rating = 6667
                })
                return data
        } catch (error) {
                ctx.logger('storeluna').error(error)
        }
}
