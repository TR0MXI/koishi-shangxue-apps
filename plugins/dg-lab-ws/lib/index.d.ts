import { Context } from 'koishi';
import { Config } from './config';
export declare const name = "dg-lab-ws";
export * from './config';
export declare const usage = "\n<div style=\"text-align: center;\">\n<img src=\"https://dungeon-lab.cn/img/icons/u95.png\" width=\"200\" height=\"66\" alt=\"DG-LAB Logo\">\n</div>\n\n<p>\u901A\u8FC7\u5B89\u88C5\u548C\u914D\u7F6E\u672C\u63D2\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5B9E\u73B0\u516C\u7F51\u547D\u4EE4\u8F6C\u53D1\u548C\u8FDE\u63A5\u7BA1\u7406\uFF0C\u8BA9\u591A\u4E2A\u7528\u6237\u5171\u4EAB\u4E00\u4E2A WebSocket \u670D\u52A1\u5668\u5B9E\u4F8B\u3002</p>\n\n<ul>\n<li><code>port</code>\uFF1AWebSocket \u670D\u52A1\u5668\u7684\u7AEF\u53E3\u3002</li>\n</ul>\n\n<p><strong>\u6CE8\u610F\uFF1A</strong>\u672C\u63D2\u4EF6\u63D0\u4F9B\u7684\u670D\u52A1\u662F\u4E00\u4E2A WebSocket \u670D\u52A1\u3002\u4E0E DG-LAB \u7684 WebSocket \u670D\u52A1\u5668\u8FDE\u63A5\u65F6\uFF0C\u5F3A\u5236\u9700\u8981\u4E8C\u7EF4\u7801\u94FE\u63A5\u3002\u4E8C\u7EF4\u7801\u5BF9\u5E94\u5185\u5BB9\u5FC5\u5B9A\u5305\u542B\u672C\u63D2\u4EF6\u670D\u52A1\u5668\u7684\u5730\u5740\uFF0C\u56E0\u6B64\u672C\u63D2\u4EF6\u4E00\u4F1A\u6CC4\u9732\u670D\u52A1\u5668 IP\u3002\u8BF7\u8C28\u614E\u8003\u8651\u540E\u518D\u51B3\u5B9A\u662F\u5426\u5F00\u542F\u516C\u5F00\u670D\u52A1\u3002</p>\n\n";
export declare function apply(ctx: Context, config: Config): void;
