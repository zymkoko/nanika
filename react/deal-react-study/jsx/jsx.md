# JSX

## 3个问题

* JSX 的本质是什么? 它和 JS 之间到底是什么关系?
* 为什么要用 JSX?  不用有什么后果?
* JSX 背后的功能模块是什么? 这个功能模块都做了哪些事情?

JSX 和 React 本身的运行机制有着千丝万缕的联系

## 语法 和 本质

接入 JSX 语法的组件越来越多, 但 React 联系最深.
组件中 render 方法的返回值, 就是 JSX 代码来填充的.

官网定义:
> JSX 是 JavaScript 的一种语法扩展, 它和模板语言很接近, 但是它充分具备 JavaScript 的能力
> JSX 会被编译成为 React.createElement() 返回一个 React Element 的 JS 对象

* 编译: babel 来完成, 如模板字符串 => es5 代码 []
* JSX 本质: 调用 React.createElement 方法. 优势: 语法糖层次分明/嵌套关系清晰/使用类 HTML 标签语法, 创建虚拟 DOM, 降低学习成本提升了开发效率和体验
* createElement 源码分析:
