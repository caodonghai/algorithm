1、谈谈你得webpack打包过程的理解？
    文章：https://www.cnblogs.com/art-poet/p/15542616.html
    步骤：
        1、读取入口文件内容，fs.readFileSync(file, 'utf-8')
        2、使用@babel/parser转为抽象语法树，
        3、创建一个对象 deps ，用来收集模块自身引入的依赖，使用@babel/traverse 遍历 ast ，我们只需要对 ImportDeclaration 的节点做处理；
        4、使用@babel/core 以及 @babel/preset-env 对 ast 做语法转换，把 es6 的语法转化为 es5 的语法

2、webpack中loader和plugin的区别？
    Loader：直译为加载器。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力
    Plugin：直译为插件。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

3、如何实现一个loader？
    执行顺序：在 webpack 中，loader 的执行顺序是从右到左、从下往上的。
    1、loader本质上就是一个函数，这个函数会在我们在我们加载一些文件时执行
    2、我们可以尝试在 loader 的函数里打印 this ，发现输出结果是非常长的一串内容， this 上有很多我们可以在 loader 中使用的有用信息，所以，对于 loader 的编写，一定不要使用箭头函数，那样会改变 this；
    3、使用官方推荐的 loader-utils 包去完成更加复杂的 loader 的编写
    常用API：
        1、this.async：获取一个callback函数，处理异步；
        2、this.callback：同步loader中返回的方法
        3、this.emitFile：产生一个文件；
        4、this.getOptions：根据传入的schema获取对应的参数；
        5、this.importModule：用于子编译器在构建时编译和执行请求；
        6、this.resourcePach：当前资源文件的路径；

4、如何实现一个plugin？
    1、plugin 通常是在 webpack 在打包的某个时间节点做一些操作，我们使用 plugin 的时候，一般都是 new Plugin() 这种形式使用，所以，首先应该明确的是， plugin 应该是一个类。
    2、plugin 类里面需要实现一个 apply 方法， webpack 打包时候，会调用 plugin 的 aplly 方法来执行 plugin 的逻辑，这个方法接受一个 compiler 作为参数，这个 compiler 是 webpack 实例；
    3、plugin的核心在于，apply方法执行时，可以操作webpack本次打包的各个时间节点（hooks，也就是生命周期勾子），在不同的时间节点做一些操作；

5、webpack 做过什么配置？
    文档：https://blog.csdn.net/qq_25354709/article/details/87775425
    1、入口文件：entry
    2、出口文件：output
    3、loader
        style-loader、css-loader
        less-loader、less
        sass-loader、node-sass
        postcss-loader、autoprefixer
        file-loader
    4、plugin
        html-webpack-plugin：生成HTML
        extra-text-webpack-plugin：提取分离css
        mini-css-extract-plugin：压缩css
        optimize-css-assets-webpack-plugin：压缩css
        clean-webpack-plugin：清除文件
        terser-webpack-plugin：压缩js代码
    5、分包策略配置
        optimization{
            splitChunks: {
                cacheGroups: {
                    common: {},
                    antd: {}
                }
            }
        }
    6、多线程打包
        happypack、hard-source-webpack-plugin、cache-loader
    7、Source Map
        开发环境：devtool 的值设置为 eval-source-map 或者 source-map
        生产环境： 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map 
    8、热模块替换：
        {
            hot: true,
        }

6、webpack 缓存原理？
    在 Webpack 中，缓存机制是通过文件名和哈希值来完成的。每个打包生成的文件都会添加一个哈希码，这个哈希码默认是生成的资源的内容（即使只是重新编译，文件内容也会略有改变）。然后，Webpack 会根据每个文件的哈希码生成对应的缓存文件，如果两次的哈希值相同，Webpack 就会认为它们是同一个文件，不会再次编译和打包，优化了编译和打包速度。
    Webpack 4 中，开启持久缓存的方式非常简单，只需要在命令行参数里面加上 --cache 即可。