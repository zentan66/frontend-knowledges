## HTML meta标签

### 简介

metadata就是“元数据”，用于描述数据的数据，不会显示在页面上，但是机器可以识别

### 用处

meta常用语定义页面的说明，关键字，最后修改日期

这些元数据将服务于浏览器，搜索引擎和其它网络服务

### 组成

meta标签由两个属性组成，分别是`http-equiv`属性和`name`属性

#### name属性

用于描述网页，比如网页的关键词，叙述等

与之对应的属性值是content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取

具体格式：

```html
<meta name="参数" content="具体描述">
```

##### keywords（关键字）

作用：告诉搜索引擎，网页的关键字

```html
<meta name="keywords" content="前端，性能">
```

##### description（网站内容的描述）

作用：告诉搜索引擎，网站的主要内容

```html
<meta name="description" content="热爱前端性能优化">
```

##### viewport（移动端窗口）

作用：用于设计移动端网页

```html
<meta name="viewport" content="width=device-width">
```

##### robots（定义搜索引擎爬虫的索引方式）

作用：告诉爬虫哪些页面需要索引，哪些页面不需要

值：all、none、index、noindex、follow、nofollow

```html
<meta name="robots" content="all">
```

##### author（作者）

作用：标注网页作者

```html
<meta name="author" content="xxx">
```

##### generator（网页制作软件）

作用：标明网页是什么软件写的

```html
<meta name="generator" content="Sublime text3">
```

##### copyright（版权）

作用：标注版权信息

```html
<meta name="copyright" content="xxxx">
```

#### revisit-after（搜索引擎爬虫重访时间）

作用：如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。

```html
<meta name="revisit-after" content="7 days">
```

##### renderer（双核浏览器渲染方式）

作用：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。

```html
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

#### http-equiv属性

相当于http的文件头作用

语法格式：

```html
<meta httpp-equiv="参数" content="描述">
```

##### content-Type（设定网页字符集）

作用：设定网页字符集，便于浏览器解析与渲染页面

```html
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐
<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```

##### X-UA-Compatible（浏览器采取何种版本渲染当前页面）

作用：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE和Chrome使用最新版本渲染当前页面
```

##### cache-control（指定请求和响应遵循的缓存机制）

作用：

1. 指导浏览器如何缓存某个响应以及缓存多长时间。

```html
<meta http-equiv="cache-control" content="no-cache">
```

2. 用于禁止当前页面在移动端浏览时，被百度自动转码。

```html
<meta http-equiv="Cache-Control" content="no-siteapp">
```

##### expires（网页过期时间）

作用：用于设定网页的到期时间，过期后网页必须到服务器上重新传输

```html
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT">
```

##### refresh（自动刷新并指向某页面）

作用：网页将在设定的时间内，自动刷新并调向设定的网址。

```html
<meta http-equiv="refresh" content="2；URL=http://www.lxxyx.win/"> //意思是2秒后跳转向我的博客
```

##### Set-Cookie（cookie设定）

作用：如果网页过期。那么这个网页存在本地的cookies也会被自动删除。

```html
<meta http-equiv="Set-Cookie" content="name, date"> //格式
<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> //具体范例
```

