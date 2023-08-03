1、有没有使用过预处理器
    Less
    Sass

2、JS由哪三部分组成
    ES
    DOM
    BOM

3、对数据类型的检测
    typeof
    instanceof
    constroctor
    Object.prototype.toString.call()

4、说一下原型链
    原型就是一个普通对象，是为构造函数的实例共享属性和方法，所有实例对象引用的原型都是同一个对象，使用 prototype.xxx可以把方法挂在原型上，内存值保存一份。
    实例对象 __proto__ 指向构造函数的原型对象 *.prototype
    原型链就是 一个实例对象在调用属性、方法的时候，会依次从实例本身、构造函数原型、原型的原型去找的过程
    
5、new 操作符做了什么

6、script标签的defer、async的作用及区别
    都用来延时加载js；只针对外部脚本有效；
    区别：
        1、defer：下载和html解析同步，但是要等到html文档完全被解析和显示，才会执行脚本的代码；顺次执行JS脚本；
        2、async：下载和html解析并行，不是顺次执行JS脚本；

    async：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或 等待加载其他脚本。只对外部脚本文件有效。
    这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在</script>元素中设置defer 属性，相当于告诉浏览器立即下载，但延迟执行。

    defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。
    这个属性与 defer 属性类似，都用于改变处理脚本的行为。同样与 defer 类似，async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer 不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行。

    延迟加载js的方式：
        1、setTimeout document.creatEmemrnt('script')
        2、async
        3、defer

7、setTimeout、setInterval最小执行时间
    setTimeout为：4ms
    setInterval为：10ms

8、ES6 有哪些新特性

9、如何实现一个深拷贝
    1、扩展运算符
        只能实现一层拷贝，有更多层的时候还是浅拷贝
    2、JSON.prase(JSON.string(obj))
        该方法无法拷贝内部函数
    3、Object.assign()
    4、利用递归函数实现

10、JS的事件循环
    js是一个单线程的脚本语言
    主线程、执行栈、任务队列、宏任务、微任务
    主线程先执行同步任务、然后再去执行任务队列里的任务、如果在执行宏任务之前有微任务，那么先执行完所有的微任务再去执行宏任务

11、ajax是什么，怎么实现的？
    XmlhttpRequest

    var xhr = new XmlhttpRequest()
    xhr.open('xxx.xxx.xom')
    xhr.send()
    
12、get和post有什么区别？
    get一般是获取数据、post一般用于提交数据
    get请求参数会放在url中，所以安全性较差；post是放在body中，安全性比较高；
    get请求刷新服务器或回退是没有任何影响，post请求退回时会重新提交数据
    get请求会主动被缓存，post请求不会主动被缓存
    get请求会被保存在浏览器历史记录中；post请求不会；
    get请求只能进行url编码，post请求支持很多种

13、promise的内部原理是什么、有什么优势；
    Promise对象，封装了一个异步操作并且可以获取成功或失败的结果；
    Promise主要用于解决回调地狱问题；之前如果异步任务过多，同时他们之间有相互依赖关系，就只能通过回调函数处理，这样容易造成回调地狱，导致代码可读性变差，不易维护；
    自身有：all、race、allted、resolved、rejected
    原型上有：then、catch、finally
    有三种状态：pending、fulfilled、reject
    状态改变只有两种状态：pending--->fulfilled、pending--->reject，一旦发生，状态就不会再变
    内部维护两个异步队列，fulfilledList和rejectedList，在pending阶段将异步回调放入队列，在状态结果改变后分别执行队列里面的回调；
    原理：
        构造一个Promise实例，实例需要传递一个函数作为参数，该函数包含两个参数，一个为resolve函数，一个为reject函数；
        在promise的then方法用于指定状态改变后的操作，resolve时执行第成功队列，reject时执行失败队列；
    缺点：
        一旦创建，就无法在中途取消；如果不设置回调，内部抛出的错误无法反馈到外部；如果处于pending状态时，无法得知目前在哪个阶段；

14、Promise和async、await有什么区别？
        相同点：
            都用于处理JS异步
            都是非阻塞性的
            async、await时机遇Promise实现的
        不同点：
            Promise是返回对象，我们要有then、catch处理和捕获异常，支持链式调用；
            async、await是通过try、catch来捕获异常
            async、await是基于Generator的实现，包装一层自调用函数实现自执行；
            async、await同步书写，格式类似Generator，遇到await就等待返回结果后再执行后面的结果；

15、浏览器的缓存
    cookie
        兼容性好、请求头自动携带、存储量小、安全性差
    sessonstorage
        用键值对进行存储；当前页面存储、会话级别存储，存储量较大
    localstorage
        用键值对进行存储；操作方便，永久存储、储存量较大，不能被爬取
    indexedDB
        用键值对进行存储；可以快速读取、适合web场景；


16、token是什么，登陆流程？
    一种用于用户身份验证的身份令牌；
    登陆流程：
        客户端使用账号、密码登陆
        服务端收到后验证信息，验证成功后将通过加密手段对一些用户信息加密后生成一个token；把这个发送给客户端；
        客户端收到后存储在本地，以后每次请求都携带用于登陆信息认证

17、输入以URL后会发生什么？


18、SVG 和 canvas 有什么区别，使用场景？
    区别：svg是基于XML语法格式的图像，是矢量图，放大不失真；svg是对图像形状的描述，本质是文本文件，体积小；
    应用：
        svg可直接插入到页面中成为DOM的一部分，然后用ＪＳ和ＣＳＳ操作；＜svg＞＜／svg＞；
        svg可作为文件被引入：＜img src='*.svg' /＞
        svg可以转为base64引入页面；


19、了解过JWT吗？
    JSON Web Token 通过JSON形式作为web应用中的令牌，可以在各方之间安全的把信息作为JSON对象传输；
    信息传输、授权
    JWT 一般是这样一个字符串，分为三个部分，以 “.” 隔开：
        1、JWT 第一部分是头部分，它是一个描述 JWT 元数据的 Json 对象；
        2、JWT 第二部分是 Payload，也是一个 Json 对象，除了包含需要传递的数据，还有七个默认的字段供选择。
        3、JWT 第三部分是签名。是这样生成的，首先需要指定一个 secret，该 secret 仅仅保存在服务器中，保证不能让其他用户知道。这个部分需要 base64URL 加密后的 header 和 base64URL 加密后的 payload 使用 . 连接组成的字符串，然后通过header 中声明的加密算法 进行加盐secret组合加密，然后就得出一个签名哈希，也就是Signature，且无法反向解密。
    JWT的认证流程：
        1、前端把账号密码发送给服务端
        2、后端核对账号密码成功后，把用户ID等信息作为JWT负载，把它和头部分别进行base64编码拼接后签名，形成一个JWT(Token);
        3、前端每次请求时会把JWT放在请求头部的Authorization字段内
        4、后端检查是否存在，如果存在就验证JWT的有效性（签名是否正确，Token是否国过期）
        5、验证通过后后端使用JWT中包含的用户信息进行其他操作并返回对应结果
    优点：
        1、json格式的通用性，所以JWT可以跨语言支持，比如Java、JavaScript、PHP、Node等等。
        2、可以利用Payload存储一些非敏感的信息。
        3、便于传输，JWT结构简单，字节占用小。
        4、不需要在服务端保存会话信息，易于应用的扩展。
    缺点：
        1、安全性没法保证，所以 jwt 里不能存储敏感数据。因为 jwt 的 payload 并没有加密，只是用 Base64 编码而已。
        2、无法中途废弃。因为一旦签发了一个 jwt，在到期之前始终都是有效的，如果用户信息发生更新了，只能等旧的 jwt 过期后重新签发新的 jwt。
        3、续签问题。当签发的 jwt 保存在客户端，客户端一直在操作页面，按道理应该一直为客户端续长有效时间，否则当 jwt有效期到了就会导致用户需要重新登录。那么怎么为 jwt 续签呢？最简单粗暴就是每次签发新的 jwt，但是由于过于暴力，会影响性能。如果要优雅一点，又要引入 Redis 解决，但是这又把无状态的 jw t硬生生变成了有状态的，违背了初衷。
    详解：https://blog.csdn.net/weixin_45410366/article/details/125031959

20、npm底层环境是什么?
    组成：网站、注册表、命令行工具

21、HTTP规定的请求头有哪些？
    1、请求头信息：
        Accept：浏览器告诉服务器支持的数据类型；
        Host：浏览器告诉服务器我想访问服务器的哪台主机；
        Referer：浏览器告诉服务器我是从哪里来的（防盗链）；
        User-Agent：浏览器类型、版本信息；
        Date：浏览器告诉服务器我是什么时候访问的；
        Connection：连接方式；
        Cookie
        X-Request-With：请求方式；
    2、响应头信息:
        Location：告诉浏览器你要去访问谁；
        Server：告诉浏览器服务器的类型；
        Content-Type：告诉浏览器返回的数据类型；
        Refresh：控制浏览器的定时刷新；

22、浏览器的缓存策略？
    1、强缓存（本地缓存）
        不发起请求，直接使用缓存里面的内容；
        触发：
            http:1.0：Express
            http:1.1：Catch-Control
    2、协商缓存（弱缓存）
        需要向后台发情请求，判断来决定是否使用强缓存，如果内容没有变化，则返回304，浏览器就使用缓存里面的；
        触发：
            http:1.0：请求头：if-modified-since 响应头：last-modified
            http:1.1：请求头：if-none-match 响应头：Etag

23、大文件上传怎么做？
