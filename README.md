﻿# jello-prepackager-cleanup-extra
***
* 58金融事业部基于fis所编写的插件
* 源码编译后打包前指定额外的旧打包文件,将其删除
* 此插件应用在静态资源打包添加MD5戳的场景,防止生成过多无效文件


# fis-config.js 配置
***
* fis.config.set('modules.prepackager', 'cleanup-extra');
* fis.config.set('settings.prepackager.cleanup-extran', {
* 　　extraPath: './old-compiled-file-path'
* });
* [具体使用参考](http://fex-team.github.io/fis-site/docs/dev/plugin.html)