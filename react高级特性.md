

#### Fragments

> 允许将子列表分组，无需向DOM添加额外参数

常规写法：

```jsx
render() {
  return (
  	<React.Fragment>
    	<ChildA />
      <ChildB />
    </React.Fragment>
  )
}
```

短语法（未得到全面支持）：

```jsx
render() {
  return (
  	<>
    	<ChildA />
      <ChildB />
    </>
  )
}
```

`key`是唯一可以传递给`Fragment`的属性。



#### 高阶组件（HOC)

> 高阶组件是一种复用组件逻辑的高级技巧，自身不是React API的一部分，只是一种基于React的组合特性而形成的设计模式

**高阶组件是参数为组件，返回值为新组件的函数**

组件将`props`转换为UI，高阶组件将组件转换为另一个组件

HOC不会修改传入的组件，也不会使用继承复制其行为

HOC是纯函数，没有副作用

HOC不需要关心数据的使用方式或原因，而被包装组件也不需要关心数据如何来的

**不要在render方法中使用HOC**

**务必复制静态方法**

可以使用`hoist-non-react-statics`自动拷贝所有非React静态方法

**Refs不会被传递**

