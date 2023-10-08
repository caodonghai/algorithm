1、语义化的理解？
    让html结构所写的标签都有意义
    怎么判断是不是语义化了？
        把css去掉，如果能清晰的看见文档结构，显示内容较为正常
    语义化的好处：
        1、让HTML的结构更加清晰
        2、方便团队开发协作
        3、有利于SEO
        4、有利于浏览器解析

2、H5C3的新特性？
    H5：
        1、语义化标签
        2、本地存储sessonstorage、localStorage
        3、canvas
        4、音频视频
        5、表单控件 email、url、search
        6、拖拽
    C3：
        1、新增选择器：属性选择器、伪类选择器、伪元素选择器
        2、增加了媒体查询
        3、文字阴影
        4、边框
        5、盒子模型：box-sizing
        6、渐变
        7、过渡
        8、自定义动画
        9、2D、3D

3、解决了那些移动端兼容性问题？
    1、当设置overflow：scroll、auto时，IOS上会卡顿
        解决：-webkit-overflow-scrolling：touch
    2、