1、盒模型？
    标准盒模型（content-box）：margin + border + padding + content
        width = comtent + 2*border + 2*padding
        占据页面大小 = comtent + 2*border + 2*padding + 2*margin
    怪异盒模型（border-box）：margin + content(包含border、padding)
        width = comtent
        占据页面大小 = comtent + 2*margin

2、line-height 和 height的区别？
    height：行高；是一个死值，盒子的高度； 
    line-height：每一行文字的高；如果文字换行（<br />），则整个格子高度会增大(行数 * 行高)；

3、CSS选择器及优先级？
    !important
    行内样式
    ID选择器(#)
    类(.xxx)、属性(img[src='xxx.img'])、伪类(a:hover)
    标签(p)
    通配符(*、>、+) 
    【注：从上到下依次递减】

3、CSS属性哪些可以继承？哪些不可以继承？
    CSS的三大特性：层叠、继承、优先级
    子元素可继承父元素的样式：
        字体的一些属性：font、color、
        文本的一些属性：line-height
        元素的可见性：visibility：hidden
        表格的布局属性：border-spacing
        列表的属性：list-style
        页面样式属性：page
    子元素不可继承父元素的样式：
        padding
        margin
        border
        ...

4、对BFC（块级格式化上下文）的理解？
    BFC就是页面上一个隔离的独立容器，容器里面的元素布局不会影响到外面；
    如何触发BFC：
        flot的值不为none；
        overflow的值不为visible；
        display的值为inline-block、tabel-cell、flex、inline-flex。。。
        position的值为absolute、fixed
    BFC的用处：
        1、解决相邻盒子的外边距重叠问题：分别外面包一层，加各自的BFC；
        2、清除浮动；

5、清除浮动的方式：
    1、触发BFC；
    2、最后创建一个空盒子：clear：botah
    3、使用伪元素解决
        ul:after{
            content: '';
            display: block;
            clear: both;
        }

6、position的值有哪些，分别是根据什么定位的？
    static：没有定位，正常的文档流；
    relative：根据自身当前位置进行定位，不脱离文档流；
    fixed：固定，根据浏览器窗口定位，脱离文档流；
    absolute：根据不是static定位以外的第一个祖先元素进行定位，脱离文档流

    relative 和 absolute的区别:
        1、relative根据自身进行定位，absolute根据第一个部位static 的祖先元素进行定位；
        2、relative 不脱离文档流，position会脱离文档流；
        3、relative 如果有 left、top、right、bottom ===> left、top
        absolute 如果有 left、top、right、bottom ===> left、top、right、bottom
