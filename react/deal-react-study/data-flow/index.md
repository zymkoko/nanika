# 2020/11/24

[TOC]

## 关键词

* 数据驱动视图: UI = render(data) / UI = f(data)
* 1. 父 -> 子 组建通信, props
* 子 -> 父 组件通信, props: { change: function }
* 2. 发布-订阅
* 3. Context API: 组件数全局通信, Provider Consumer
* 4. Redux

## 内容

组件类比人, 组件的内心世界和人际关系, 沟通和表达

React 的核心特征: `数据驱动视图`, 表达式的本质: React 的视图会随着数据的变化而变化. 数据在 React 中的地位可见一斑.
组件之间要产生`耦合`, 就是要进行组件通信.
