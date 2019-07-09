#### 类型转换规则

- `parseInt`
- `parseFloat`
- `Number`
- `toString()`

### 事件

#### 创建事件

##### new Event

```js
let ev = new Event('alert', {
    bubbles: true,
    cancelable: true,
    composed: false
})
```

##### createEvent('CustomEvent')[DOM3]

```js
let ev = dom.createEvent('CustomEvent')
ev.initCustomEvent('alert', true, true, 'button')
```

##### new CustomEvent() [DOM4]

```js
let ev = new CustomEvent('alert', {
    bubbles: true,
    cancelable: true,
    detail: 'button'
})
```



#### webWorker

**不可以操作dom**



### Promise

#### Promise A+规范





#### 可遍历数据结构（Symbol.iterator）



### 模块

#### ES6

- 编译时就确定模块的依赖关系
- 自动采用严格模式
- 无法动态加载，`import`语句必须在顶层作用域中
- 模块中顶层的 `this` 指向 `undefined` 
- 输出的是值的引用

#### CommonJS

- 模块运行时加载
- 可以动态加载
- 模块顶层 `this` 指向当前模块
- 输出的是一个值的拷贝

