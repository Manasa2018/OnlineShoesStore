/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcess/sharedProcessMain.nls.zh-cn",{"vs/base/common/severity":["错误","警告","信息"],"vs/base/node/zip":["在 Zip 中找不到 {0}。"],"vs/platform/configuration/common/configurationRegistry":["默认配置替代","针对 {0} 语言，配置替代编辑器设置。","针对某种语言，配置替代编辑器设置。",'无法注册“{0}”。其符合描述特定语言编辑器设置的表达式 "\\\\[.*\\\\]$"。请使用 "configurationDefaults"。',"无法注册“{0}”。此属性已注册。"],"vs/platform/extensionManagement/common/extensionManagement":["扩展","首选项"],"vs/platform/extensionManagement/node/extensionGalleryService":["无法下载。找不到与 VS Code 当前版本 ({0}) 兼容的扩展。"],
"vs/platform/extensionManagement/node/extensionManagementService":["扩展无效: package.json 不是 JSON 文件。","请先重启 Code 再重新安装 {0}。","您已安装此扩展的新版程序。是否要使用旧版覆盖？","覆盖","取消","安装依赖项时出错。{0}","无法安装“{0}”；没有可用的版本与 VS Code “{1}”兼容。","无法安装此扩展，它被报告存在问题。","无法安装。找不到与 VS Code 当前版本 ({1}) 兼容的依赖扩展“{0}”。","无法安装扩展。请在重启 VS Code 后重新安装。","无法安装扩展。请在重启 VS Code 后重新安装。","要仅卸载“{0}”或者其依赖项也一起卸载?","仅","全部","取消","是否确定要卸载“{0}”?","确定","取消","无法卸载扩展程序“{0}”。扩展程序“{1}”依赖于此。","无法卸载扩展程序“{0}”。扩展程序“{1}”、“{2}”依赖于此。","无法卸载扩展程序“{0}”。扩展程序“{1}”、“{2}”以及其他扩展程序都依赖于此。","找不到扩展"],
"vs/platform/extensions/common/extensionsRegistry":["对于 VS Code 扩展，指定与其兼容的 VS Code 版本。不能为 *。 例如: ^0.10.5 表示最低兼容 VS Code 版本 0.10.5。","VS Code 扩展的发布者。","VS Code 库中使用的扩展的显示名称。","VS Code 库用于对扩展进行分类的类别。","VS Code 商城使用的横幅。","VS Code 商城页标题上的横幅颜色。","横幅文字的颜色主题。","由此包表示的 VS Code 扩展的所有贡献。","在 Marketplace 中设置扩展，将其标记为“预览”。","VS Code 扩展的激活事件。","在打开被解析为指定语言的文件时发出的激活事件。","在调用指定命令时发出的激活事件。","在用户准备调试或准备设置调试配置时发出的激活事件。",'在需要创建 "launch.json" 文件 (且需要调用 provideDebugConfigurations 的所有方法) 时发出的激活事件。',"在将要启动具有特定类型的调试会话 (且需要调用相应的 resolveDebugConfiguration 方法) 时发出的激活事件。","在打开至少包含一个匹配指定 glob 模式的文件的文件夹时发出的激活事件。","在指定视图被展开时发出的激活事件。","在 VS Code 启动时发出的激活事件。为确保良好的最终用户体验，请仅在其他激活事件组合不适用于你的情况时，才在扩展中使用此事件。","在 Marketplace 的扩展页边栏中显示的徽章数组。","徽章图像 URL。","徽章链接。","徽章说明。","其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。","包作为 VS Code 扩展发布前执行的脚本。","128 x 128 像素图标的路径。"],
"vs/platform/extensions/node/extensionValidator":['无法分析 "engines.vscode" 值 {0}。例如请使用: ^0.10.0、^1.2.3、^0.11.0、^0.10.x 等。','"engines.vscode" ({0}) 中指定的版本不够具体。对于 1.0.0 之前的 vscode 版本，请至少定义主要和次要想要的版本。例如: ^0.10.0、0.10.x、0.11.0 等。','"engines.vscode" ({0}) 中指定的版本不够具体。对于 1.0.0 之后的 vscode 版本，请至少定义主要想要的版本。例如: ^1.10.0、1.10.x、1.x.x、2.x.x 等。',"扩展与 Code {0} 不兼容。扩展需要: {1}。","已获得空扩展说明",'属性“{0}”是必要属性，其类型必须是 "string"','属性“{0}”是必要属性，其类型必须是 "string"','属性“{0}”是必要属性，其类型必须是 "string"','属性“{0}”是必要属性，其类型必须是 "object"','属性“{0}”是必要属性，其类型必须是 "string"','属性“{0}”可以省略，否则其类型必须是 "string[]"','属性“{0}”可以省略，否则其类型必须是 "string[]"',"必须同时指定或同时省略属性”{0}“和”{1}“",'属性“{0}”可以省略，否则其类型必须是 "string"','应在扩展文件夹({1})中包含 "main" ({0})。这可能会使扩展不可移植。',"必须同时指定或同时省略属性”{0}“和”{1}“","扩展版本与 semver 不兼容。"],
"vs/platform/localizations/common/localizations":["向编辑器提供本地化内容","显示字符串翻译的目标语言 ID。","语言的英文名称。","提供语言的名称。","与语言关联的翻译的列表。",'使用此翻译的 VS Code 或扩展的 ID。VS Code 的 ID 总为 "vscode"，扩展的 ID 的格式应为 "publisherId.extensionName"。','翻译 VS Code 或者扩展，ID 分别应为 "vscode" 或格式为 "publisherId.extensionName"。',"包含语言翻译的文件的相对路径。"],"vs/platform/message/common/message":["关闭","稍后","取消","...1 个其他文件未显示","...{0} 个其他文件未显示"],"vs/platform/request/node/request":["HTTP","要使用的代理设置。如果尚未设置，则将从 http_proxy 和 https_proxy 环境变量获取","是否应根据提供的 CA 列表验证代理服务器证书。",'要作为每个网络请求的 "Proxy-Authorization" 标头发送的值。'],"vs/platform/telemetry/common/telemetryService":["遥测","启用要发送给 Microsoft 的使用情况数据和错误。"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f88bbf9137d24d36d968ea6b2911786bfe103002/core/vs\code\electron-browser\sharedProcess\sharedProcessMain.nls.zh-cn.js.map
