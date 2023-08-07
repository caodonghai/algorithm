1、react的合成事件知多少？
    1、react自身实现了一套事件机制，包括事件的注册、事件的存储、事件的合成及执行等。
    2、react 的所有事件并没有绑定到具体的dom节点上而是绑定在了document 上，然后由统一的事件处理程序来派发执行。
    3、通过这种处理，减少了事件注册的次数，另外react还在事件合成过程中，对不同浏览器的事件进行了封装处理，抹平浏览器之间的事件差异。
    4、React 利用事件委托机制，将几乎所有事件的触发代理（delegate）在 document 节点上，事件对象(event)是合成对象(SyntheticEvent)，不是原生事件对象，但通过 nativeEvent 属性访问原生事件对象。
    5、由于 React 的事件委托机制，React 组件对应的原生 DOM 节点上的事件触发时机总是在 React 组件上的事件之前。

    事件机制流程：
        1、在组件挂载阶段，根据组件内声明的事件类型-onclick，onchange 等，给 document 上添加事件 -addEventListener，并指定统一的事件处理程序 dispatchEvent。
        2、react 把所有的事件和事件类型以及 react 组件进行关联，把这个关系保存在了一个 map里，也就是一个对象里（键值对）listenerBank，然后在事件触发的时候去根据当前的 组件id和 事件类型查找到对应的 事件fn；
            {
                click: { key1: fn1, key2: fn2 },
                change: { key1: fn1, key2: fn2 },
            }

    事件的执行：
        1、进入统一的事件分发函数(dispatchEvent)
        2、结合原生事件找到当前节点对应的ReactDOMComponent对象
        3、开始 事件的合成
            根据当前事件类型生成指定的合成对象
            封装原生事件和冒泡机制
            在 listenerBank事件池中查找事件回调并合成到 event(合成事件结束)
        4.处理合成事件内的回调事件（事件触发完成 end）

    优点：
     1、兼容性好；
     2、使用事件委托机制，性能高；


2、class 类中 constroctor 函数中的 super() 有什么用？
    super() 用来调用父类的构造函数，并把props传递给父类构造函数；
    在没有props的情况下，可以不调用super()

3、react Fiber 了解多少？

4、React的Diff算法？
    1、根节点不同：删除重新创建
    2、根节点相同：
        比较他们的属性变化，更新属性；
    3、同级多个节点的Diff：
        用新集合中的节点去和老集合中的节点进行diff
        diff结束后，如果新集合中还有未进行diff的节点，说明该节点是需要新增的，对该节点执行新增逻辑。
        diff结束后，如果老集合中还有未进行diff的节点，说明该节点是需要删除的，对该节点执行删除逻辑。

        diff过程：
            index：新集合遍历下标
            oldIndex：当前节点在老集合的下标
            maxIndex：在新集合访问过的节点中，其在老集合的最大下标

            当oldIndex > maxIndex 时：将oldIndex 赋值给maxIndex；
            当oldIndex = maxIndex 时：不移动；
            当oldIndex < maxIndex 时：将当前节点移动到index位置；
