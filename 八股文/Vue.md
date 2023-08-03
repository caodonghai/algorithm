1、v-if 和 v-show的区别

2、对MVVM的理解？
    是Modal-View-ViewModal的缩写，前端开发的架构模式；
    M：模型，对应的就是data数据；
    V：视图，用户界面，DOM；
    VM：视图模型，Vue的实例对象，连接View和Modal的桥梁
    核心是提供View和ViewModal的双向数据绑定，当数据改变的时候，ViewModal能监听到数据变化，自动更新视图；当用户操作视图的时候，ViewModal也能监听到视图的变化，然后通知数据进行改动，这就实现了数据的双向绑定，ViewModal通过双向数据绑定把View和Modal链接起来，它们之间的同步是自动的，不需要人为干涉，所以我们只需要关注业务逻辑即可，不需要操作DOM，同时也不需要关注数据的状态问题，因为它们是由MVVM同一管理的。

3、vue的生命周期？
    创建
        beforeCreat
            属性和方法都无法使用
        created
            完成对实例数据的创建，完成对数据的观测，可以使用数据、修改数据，不会触发update，也不会更新视图
    挂载
        beforeMount
            已经完成对模版的编译，虚拟DOM也完成创建，即将渲染，修改数据不会触发update；
        Mounted
            把编译好的模版挂载到页面，可以发送异步请求，也可以获取DOM；
    更新
        beforeUpdate、
            组件数据更新之前调用，数据是新的，页面上的数据是旧的，组件即将更新
        updated
            render重新做了渲染，这时数据和页面都是新的，避免在这里更新数据，防止死循环
    销毁
        beforeDestroy
            实例销毁前，实例还可以用，可以清除定时器
        Destroyed
            实例销毁

    使用了keep-alive，多出两个生命周期：
        activited
            组件激活时
        deactivited
            组件被销毁时

4、createed 和 mounted 请求数据有什么区别？
    creared：在渲染前调用
    mounted：在渲染后调用，会出现闪屏问题
    一般：
        请求数据对DOM有影响，使用created；
        请求数据与DOM无关，使用mounted；

5、vue中是修饰符有哪些？
    事件修饰符
        .stop：阻止冒泡
        .prevent：阻止默认行为
        .capture
        .self：只有在event.target是当前元素时触发
        .once：只执行一次
        .native：把当前元素作为原生标签看待
    按键修饰符
        .keyup：键盘抬起
        .keydown：键盘按下
    系统修饰符
        .ctrl
        .alt
        .meta
    鼠标修饰符
        .left
        .right
        .middle
    表单修饰符
        .lazy：等输入完成后再显示
        .trim：删除内容前后空格
        .number：输入是数字或者转为数字

6、keep-alive 是什么，怎么用？
    是vue的一个内置组件，，包裹组建的时候会缓存不活跃的组件实例，而不是销毁它们；
    作用：把组建切换的状态保存在内存里，防止重复渲染DOM。减少加载时间，提高性能；

7、vue路由的hash 和 history 模式有什么区别
    1、hash模式的路由上有#号，history模式没有；
    2、在做回车刷新的时候，hash会加载对应页面，history会报404；

8、computed 和 watch有什么区别？
    1、computed是计算属性，watch是监听，监听的是data中数据的变化；
    2、computed是支持缓存，依赖属性值发生变化，计算属性才会重新计算，否则使用缓存，watch不支持缓存；
    3、computed不支持异步，watch可以异步操作；
    4、computed是第一次加载就监听，watch是不监听；
    5、computed函数必须有return，watch不用

9、vuex 是什么，有什么使用场景？
    state       存储变量
    getters     state的计算属性
    mutations   提交更新数据的方法
    actions     和mutations差不多，它是提交mutations来修改数据，可以包括异步操作
    modules     模块化vuex

    使用场景：
        1、用户个人信息
        2、购物车
        3、订单模块

10、vue的双向绑定原理？
    通过数据劫持和发布订阅模式来实现，同时利用Object.definProperty()来劫持各个属性的setter和getter，在数据发生变化的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图是同步的，数据发生改变，视图会跟着更新，视图发生改变，数据也会跟着更新；
    实现原理：
        1、需要Observer对数据对象进行递归遍历，包括子属性对象的属性，都加上setter、getter；
        2、Complie 模版解析指令，把模版中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上对应的更新函数，添加订阅者，如果数据变化，收到通知，更新视图。
        3、Watcher订阅者是Observer和Complie之间的通信桥梁，作用：
            在自身实例化的时候往订阅器内添加自己；
            自身要有一个update方法等待属性变动时，调用自身的update方法，触发Complie的回调
        4、MVVM作为数据绑定的入口，整合了Observer、Complie、Watcher三者，通过Observer来监听自己的数据变化，通过Complie解析模版指令，最后使用Watcher把Observer和Complie联系起来，最终达到数据更新视图更新、视图更新数据更新的效果；

11、vuex的响应式处理？
    是一种状态管理工具；
    vue中可以直接触发methods中的方法，vuex是不可以的，为了处理异步，当触发事件的时候，会通过dispach触发actions中的方法，actions中的commit会触发mutations中的方法来修改state里的数据，通过getter把数据更新到视图；
    vue.use(vues), 调用install方法，通过applyMixin(vue)在任意组建内执行this.$store就可以访问store对象。
    vuex的state是响应式的，借助vue的就是vue的data；把state存到vue实例的组件之中；

12、了解diff算法和虚拟DOM吗？

13、如何搭建一个脚手架
    下载：node cnpm webpack vue-cli
    创建项目：
        1、找到对应的文件，然后使用node指令创建
        2、vue init webpack xxxx
        3、输入项目信息、作者信息回车
    运行项目：npm run dev

14、vue的过滤器怎么使用？
    vue的特性，用来对文本进行格式化处理；
    使用它的地方，一个是插值表达式，一个是v-bind；
    分类： 
        1、全局过滤器：
            Vue.filter('aaa', function(v) {
                return v < 10 ? '0' + v : v
            })
            <div>{{ 33 | aaa }}</div>
        2、本地过滤器
            和methods同级；
            filter: {
                add: function(v) {
                    return v < 10 ? '0' + v : v
                }
            }

15、vue2 和 vue3的区别？
    1、双向数据绑定和原理不同
        Object.definProperty(data, key, value) Proxy(data, {})
    2、是否支持碎片（多个根节点）
    3、API 不同，vue2是选项式Api，vue3是组合式Api；
    4、定义数据变量的方法不同，vue2是使用data、methods等；vue3是使用setup；
    5、生命周期不同：
    6、传值不同，setup第二个参数
    7、指令和插槽不同 
        vue2中v-for、v-if不能一起使用，vue3中v-if仅仅被当作是v-for的一个判断
        vue2可以直接使用slot，vue3中只能用v-slot

16、vue3性能为什么比vue2好？
    1、diff算法优化
        vue2全量比较，vue3在数据发生变化时会进行标记，只比对标记虚拟DOM；
    2、静态提升
    3、事件侦听缓存
    4、使用Proxy代理对象对数据进行监听，不会修改被代理对象本身

17、是否使用过nuxt.js
    是基于vue的应用框架，关注的是渲染，可以开发服务端渲染应用的配置
    SSR：
        好处：
            1、SSR生成是的带有html内容的页面，有利于搜索引擎的搜索；
            2、可以提高加载时间
    SEO：
    SPA的使用不利于搜索引擎SEO的操作；