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
    1、loader本质上就是一个函数，这个函数会在我们在我们加载一些文件时执行
    2、我们可以尝试在 loader 的函数里打印 this ，发现输出结果是非常长的一串内容， this 上有很多我们可以在 loader 中使用的有用信息，所以，对于 loader 的编写，一定不要使用箭头函数，那样会改变 this；
    3、使用官方推荐的 loader-utils 包去完成更加复杂的 loader 的编写

4、如何实现一个plugin？
    1、plugin 通常是在 webpack 在打包的某个时间节点做一些操作，我们使用 plugin 的时候，一般都是 new Plugin() 这种形式使用，所以，首先应该明确的是， plugin 应该是一个类。
    2、plugin 类里面需要实现一个 apply 方法， webpack 打包时候，会调用 plugin 的 aplly 方法来执行 plugin 的逻辑，这个方法接受一个 compiler 作为参数，这个 compiler 是 webpack 实例；
    3、plugin的核心在于，apply方法执行时，可以操作webpack本次打包的各个时间节点（hooks，也就是生命周期勾子），在不同的时间节点做一些操作；