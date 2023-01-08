import React from 'react';
import ReactDom from 'react-dom';

class LifeCycle extends React.Component {

  // 挂载:
  // 当组件实例被创建并插入 DOM  中时, 其生命周期调用顺序

  constructor(props) {
    console.log('进入constructor');
    super(props);
    this.state = {
      text: '子组件的文本'
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log('挂载第二顺位方法执行--初始化/更新时调用')
    // 一定要一个返回值
    return {
      fatherText: props.text
    }
  }
  render()
  componentDidMount() {
    console.log('初始化渲染时调用, 真实dom渲染');
  }

  // 更新:
  // 当组件的props / state 发生变化时会触发更新. 组件更新的生命周期调用顺序
  static getDerivedStateFromProps() {
    console.log('更新-第一顺位方法执行--初始化/更新时调用')
  }
  shouldComponentUpdate() {
    console.log('组件更新时调用-第二顺位--不常用')
    return true;
  }
  render()
  getSnapshotBeforeUpdate() {
    console.log('更新第四顺位');
    return true;
  }
  componentDidUpdate() {
    console.log('更新后调用');
  }

  // 卸载:
  // 当组件从 DOM 中移除时会调用如下方法
  componentWillUnmount() {
    console.log('卸载时, dom移除时');
  }

  // 错误处理: --不经常用
  // 当渲染过程 生命周期, 或子组件的构造函数中抛出错误时, 会调用以下
  static getDerivedStateFromError()
  componentDidCatch()

  // 方法:
  changeText = () => {
    this.setState({
      text: '修改后的子组件文本'
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeText} className="changeText">点我修改子组件文本内容</button>
        <p>{this.state.text}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

// 父组件

class LifeCycleContainer extends React.Component {
  // 属性声明方式初始化
  state = {
    text: '父组件的文本',
    hideChild: false
  };
  changeText = () => {

  }
}