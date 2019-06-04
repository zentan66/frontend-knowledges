#### 盒模型

页面渲染时，dom元素所采用的 **布局模型**，可通过`box-sizing`设置

- `content-box`（w3c标准盒模型）
- `border-box`（IE盒模型）
- `padding-box`
- `margin-box`

#### 层叠上下文

元素提升为一个比较特殊的图层

- 触发条件
  - 根层叠上下文（`html`）
  - `postition`
  - css3属性
    - `flex`
    - `transform`
    - `opacity`
    - `filter`
    - `will-change`
    - `-webkit-overflow-scrolling`

- 层叠等级：层叠上下文在z轴上的排序
  - 在同一个层叠上下文中，层叠等级才有意义
  - `z-index`的优先级最高

**background/border** -> **z-index负值** -> **块级元素** -> **浮动元素** -> **行内元素** -> **z-index: 0/auto** -> **z-index正值**

#### 居中布局

- 水平居中
  - 行内元素`text-align:center`
  - 块级元素`margin: 0 auto`
  - `absolute+transform`
  - `flex+justify-content:center`
- 垂直居中
  - `line-height: height`
  - `absolute-transform`
  - `flex+align-items: center`
  - `table`
- 水平垂直居中
  - `absolute+transform`
  - `flex+justify-content+align-items`

#### 选择器优先级

- `!important`>行内样式>`#id`>`.class`>`tag`>`*`>继承>默认
- 选择器 **从右往左** 解析

#### 去除浮动影响，防止父级高度塌陷

- 通过增加尾元素清除浮动
  - `:after/ <br> : clear:both`
- 创建父级`BFC`
- 父级设置高度

#### link与@import区别

- `link`功能较多，可以定义`RSS`，而`@import`只能用于加载css
- 当解析到`link`是，页面会同步加载所引用的css，而`@import`所引用的css会等到页面加载完才被加载
- `@import`需要IE5以上才能使用
- `link`可以使用js动态引入

