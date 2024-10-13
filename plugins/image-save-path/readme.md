# koishi-plugin-image-save-path

[![npm](https://img.shields.io/npm/v/koishi-plugin-image-save-path?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-image-save-path)

`koishi-plugin-image-save-path`插件，允许用户将图片保存到服务器上特定的路径。


## 功能

- 允许用户指定图片的保存路径。
- 支持多个路径选择。
- 自定义图片的后缀名。
- 支持快速保存模式，直接保存到默认路径。
- 允许对需要保存的图片进行重命名。


## 指令说明

此插件提供了两个命令`交互保存图片`和`回复保存图片`，允许用户保存图片到特定路径。

基本上用户需要像这样交互
```
用户：交互保存图片
```
```
机器人： 请选择路径的序号：
```

```
用户：[路径序号名称]
```
```
机器人：请发送图片：
```
```
用户：[图片]
```


不过也可以像下面这样：
```
用户：交互保存图片  [路径名称]
```

```
机器人：请发送图片：
```

```
用户：[图片]
```
总之在这个指令下，图片消息是需要用户单独发的。

此外本插件还提供了两个选项：-n 和 -e，以增强其功能。

-n 选项：这个选项允许用户为保存的图片指定一个具体的文件名。在命令中使用 -n 后跟上所需的文件名。
```
交互保存图片 -n 测试文件
```
-e 选项：这个选项允许用户指定图片的后缀名。在命令中使用 -e 后跟上所需的图片后缀名。
```
交互保存图片 -e webp
```

你也可以一次性指定所有的选项，例如：
```
交互保存图片 路径序号 -n 图片名 -e webp
```

对于`回复保存图片`指令，用法基本一致，只是无需用户单独发图片，而是改为从回复的消息里获取图片。


### 配置项说明
- **defaultImageExtension**：默认的图片后缀名，如`png`或`jpg`。
- **imageSaveMode**：开启后，用户在保存图片时不进行路径选择交互，图片直接保存到`savePaths`的第一行的路径。
- **savePaths**：用于设置图片保存路径的名称和地址映射。在控制台中，用户需要填写路径的`name`和对应的`path`。

在配置了配置项内容后，用户可以直接输入 `指令名称 路径序号  文件重命名` 快捷触发保存。


## 注意事项

- 确保提供的路径是服务器上有效且具有写入权限的路径。

- 如果图片无法下载或保存，请检查网络连接和服务器配置。


## 更新日志
<details>
<summary>点我查看更新日志详情</summary>

- **0.3.7** - 优化调试模式的日志输出，仅对图片消息输出

- **0.3.6** - 突然发现没法自动保存了。。。。。

- **0.3.4** - 完善部分日志输出

- **0.3.3**
    -   优化json存储路径
    -   完善部分说明

- **0.3.2** - 优化日志输出，完善**0.3.0** 

- **0.3.0** - 实现自动保存多次重复的图片的功能

- **0.2.3** - `fetch`改为`ctx.http.get`方法

- **0.2.2** - 完善说明内容

- **0.2.1** - 更正说明内容【`savePaths`的第一行的路径。】

- **0.2.0** - 优化控制台`savePaths`配置项，呈现表格的形式更易懂。

- **0.1.4** - 优化在【回复保存图片】时的缺省参数的处理。

- **0.1.3** - 优化在【回复保存图片】时的缺省参数的处理。

- **0.1.2** - 优化一些交互的细节逻辑。

- **0.1.1** - 1.优化提取逻辑，不再使用正则提取。2.完善交互内容，用户直接输入 `指令名称 路径序号  文件重命名` 快捷指定保存内容。

- **0.1.0** - 日常维护，重写控制台展示页内容。重写readme。新增日志调试开关。修改冗余的代码内容。

- **0.0.8** - 适配onebot？优化LLOB情况下对图片url的提取处理

- **0.0.7** - 修复0.0.6的bug。中间件函数只接收了 next 参数，而没有 session 参数。

- **0.0.6** - 新增一个指令，可以保存被回复的图片。save-card指令。

- **0.0.5** - 添加目标路径下的重名检查功能。开启后若重名则保存为【文件名(累加数字)】，如【开心(2)】。关闭重名检查，重名会覆盖原文件。

- **0.0.4** - 0.0.3缺少保存的实际写入，补上了。

- **0.0.3** - 增加“保存成功后，是否返回文件路径”的选项

- **0.0.2** - 增加默认路径示例值

- **0.0.1** - 基本实现交互保存到指定路径

</details>