1、v-if 和 v-show 的区别
    v-show：是display：none、block
    v-if：是每次创建DOM节点；
    使用场景：
        1、初次加载v-if比v-show好，页面不会多加载盒子；
        2、频繁切换使用v-show，减少页面开销；

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
            完成对实例数据的创建，完成对数据的观测，可以使用数据、修改数据，不会触发update，也不会更新视图，可以获取到this.$data；
    挂载
        beforeMount
            已经完成对模版的编译，虚拟DOM也完成创建，即将渲染，修改数据不会触发update；
        Mounted
            把编译好的模版挂载到页面，可以发送异步请求，也可以获取DOM；，可以获取到this.$el；
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

    第一次进入会执行哪些生命周期？
        beforeCreat、created、beforeMount、mounted、activited(使用了keep-alive)
    第2次或第n次进入会执行哪些生命周期？
        没有keep-alive：beforeCreat、created、beforeMount、mounted
        使用keep-alive：activited
    离开某组件时执行什么声明周期？
        没有keep-alive：beforeDestory、destoried;
        使用keep-alive：deactivited

4、created 和 mounted 请求数据有什么区别？
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
    是vue的一个内置组件，包裹组建的时候会缓存不活跃的组件实例，而不是销毁它们；
    作用：把组建切换的状态保存在内存里，防止重复渲染DOM。减少加载时间，提高性能；
    使用场景：
        首页进入到详情页，使用activited判断路由传递的数据和当前的数据有无变化，变化了就重新发起请求；

7、vue路由的hash 和 history 模式有什么区别
    1、hash模式的路由上有#号，history模式没有；
    2、在做回车刷新的时候，hash会加载对应页面，history会报404；

8、computed 和 watch有什么区别？
    1、computed是计算属性，watch是监听，监听的是data中数据的变化；
    2、computed是支持缓存，依赖属性值发生变化，计算属性才会重新计算，否则使用缓存，watch不支持缓存；
    3、computed不支持异步，watch可以异步操作；
    4、computed是第一次加载就执行，watch是当前监听的数据或路由发生了改变才会执行，第一次不执行；
    5、computed函数必须有return，watch不用

9、vue2.0的双向绑定原理？
    通过数据劫持和发布订阅模式来实现，同时利用Object.definProperty()来劫持各个属性的setter和getter，在数据发生变化的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图是同步的，数据发生改变，视图会跟着更新，视图发生改变，数据也会跟着更新；
    实现原理：
        1、需要Observer对数据对象进行递归遍历，包括子属性对象的属性，都加上setter、getter；
        2、Complie 模版解析指令，把模版中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上对应的更新函数，添加订阅者，如果数据变化，收到通知，更新视图。
        3、Watcher 订阅者是 Observer 和 Complie 之间的通信桥梁，作用：
            在自身实例化的时候往订阅器内添加自己；
            自身要有一个update方法等待属性变动时，调用自身的update方法，触发Complie的回调
        4、MVVM作为数据绑定的入口，整合了Observer、Complie、Watcher三者，通过Observer来监听自己的数据变化，通过Complie解析模版指令，最后使用Watcher把Observer和Complie联系起来，最终达到数据更新视图更新、视图更新数据更新的效果；

10、vuex 是什么，有什么使用场景？
    做数据状态管理
    state       存储变量
    getters     state的计算属性
    mutations   提交更新数据的方法，都是同步的事务；
    actions     和mutations差不多，它是提交mutations来修改数据，可以包括异步操作
    modules     模块化vuex

    使用场景：
        1、用户个人信息
        2、购物车
        3、订单模块

11、vuex 的响应式处理？
    是一种状态管理工具；
    vue中可以直接触发 methods 中的方法，vuex 是不可以的，为了处理异步，当触发事件的时候，会通过 dispach 触发 actions 中的方法，actions中的commit会触发mutations中的方法来修改state里的数据，通过getter把数据更新到视图；
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

18、ref是什么？
    来获取DOM；

19、nextTick是什么？
    DOM 的更新是异步的；用来获取更新后的DOM；
    使用：
        this.$nextTick(() => {})

20、scoped原理？
    1、作用：让样式在本组件生效，不影响其他组件；
    2、原理：给元素的节点新增data-v-xxx属性，然后css根据属性选择器添加样式；

21、如何使用saas？
    1、下载：npm install sass-loader node-sass --save
    2、使用：<style lang="sass" scoped></ style>
    3、样式穿透：
        .父元素 /deep/ .子元素 {}

22、组件之间的通信？
    1、父 ---> 子
        父组件：<Child :msg="msg" />
        子组件：使用props接收
            props: ['mas']
            props: {
                msh: 数据类型；
            }
    1、子 ---> 父
        父组件：<Child @childChange="getChildValue" />
        子组件：
            this.$emit('childChange', data)
                childChange——自定义事件名称
                data——传递的数据
    1、兄弟之间
        通过一个中转实现bus：
            import Vue from 'vue';
            export default new Vue;
        A兄弟组件传值：
            import bus from 'bus'
            bus.$emit('toBcom', data)
        B兄弟组件接收：
            import bus from 'bus'
            bus.$on('toBcom', (data) => {
                // data 就是传过来的数据
            })

23、props、data优先级
    props ===> methods ===> data ===> computed ===> watch 

24、vue打包后出现空白页？
    配置publicPath

25、vue 路由传值？
    1、显示：
        传递：
            this.$router.push({
                path: '/about',
                query: {
                    a: 1
                }
            })
        接收：
            this.$router.query.id;

    2、隐式：
        传递：
            this.$router.push({
                name: 'About',
                params: {
                    a: 1
                }
            })
        接收：
            this.$router.params.id;

26、路由导航守卫有哪些？
     1、全局
        beforeEach((to, from, next) => {})
        beforeResolve
        afterEach
     2、路由独享
        beforeEnter
     3、组价内；
        beforeRouterEnter、beforeRouterUpdate、beforeRouterLeave

    使用场景：
        判断是否登陆，如果登陆就next()，否则跳转到登陆页面；

27、diff算法的理解？
    功能：提升性能；
    虚拟DOM ===> 把DOM数据化
    虚拟节点：
        {
            children: [],
            data: {},
            elm: div,
            key: undefined,
            sel: 'div',
            text: '海绵宝宝',
        }
        对应真实节点为：<div>海绵宝宝</div>
    新老节点替换规则：
        1、如果新老节点不是同一个节点名称，直接暴力删除旧节点，创建新的节点；
        2、做同级比较，忽略跨层级移动；
        3、如果是相同类型节点：
            3.1、新节点没有childeren，那就证明是文本节点，创建文本节点替换旧节点；
            3.2、新节点有children，旧的没有，删除旧的，创建新的；
            3.3、新节点有children，旧的有children(diff算法核心：使用key值比对)：
                3.3.1、旧前 和 新前
                    匹配：旧前指针++、新前指针++；
                3.3.2、旧后 和 新后
                    匹配：旧后指针--、新后指针--；
                3.3.3、旧前 和 新后
                    匹配：旧前指针++、新后指针--；
                3.3.4、旧后 和 新前
                    匹配：旧后指针--、新前指针++；
                3.3.5、以上情况都不满足 ===> 查找
                3.3.6、创建和删除

        【注：为了提升性能，对列表节点一定要使用key，用来确认节点更改前后是不是同一个节点】

28、Composition API 与 Options API 有什么区别？
    在 Composition API 中，根据代码逻辑功能来组织的，一个功能所定义的所有 API 都会放到一起，这样即使功能复杂，代码量增大，都可以一下子定位到某个功能的所有代码，代码维护方便。它的最大特点就是：高内聚，低耦合。
    1、生命周期：
        beforeCreate===>setup()
        created=======>setup()
        beforeMount ===>onBeforeMount
        mounted=======>onMounted
        beforeUpdate===>onBeforeUpdate
        updated =======>onUpdated
        beforeUnmount ==>onBeforeUnmount
        unmounted =====>onUnmounted

29、watch 和 watchEffect 的区别？
    1、watch 需要传入监听的数据源，而 watchEffect 可以自动手机数据源作为依赖。
    2、watch 可以访问倒改变之前和之后的值，watchEffect 只能获取改变后的值。
    3、watch 运行的时候不会立即执行，值改变后才会执行，而 watchEffect 运行后可立即执行。这一点可以通过 watch 的配置项 immediate 改变。

30、v-for 和 v-if 优先级？
    1.在vue2中，v-for的优先级高于v-if；
    2.在vue3中，又恰好相反v-if的优先级是高于v-for的；