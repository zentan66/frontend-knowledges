## Introduction

### 1.10

#### 1.10.1 Presentational markup()

> This section is non-normative
>
> 本节不具有规范性

The majority of presentational features from previous versions of HTML are no longer allowed. Presentational markup in general has been found to have a number of problems:

之前的HTML版本的表象特征是不被允许的。表示标记一般已被发现有一些问题：

##### **The use of presentational elements leads to poorer accessibility**

**表示性元素的使用导致了较差的可访问性**

While it is possible to use presentational markup in a way that provides users of assistive technologies (ATs) with an acceptable experience (e.g., using ARIA), doing so is significantly more difficult than doing so when using semantically-appropriate markup. Furthermore, even using such techniques doesn’t help make pages accessible for non-AT, non-graphical users, such as users of text-mode browsers.

虽然在某种程度上使用表示性标记会用一种可以被接受或理解的经验，提供给辅助技术的使用者，这样的使用显然比使用语义化标记更加困难。另外，使用这些技术并不会对非辅助技术，非图形使用者，例如文本模式浏览器使用者的页面可访问性有帮助。

Using media-independent markup, on the other hand, provides an easy way for documents to be authored in such a way that they are "accessible" for more users (e.g., users of text browsers).

使用与媒体无关的标记，在另一方面说，提供了一种简单的方式，可被更多用户访问

**Higher cost of maintenance**

**维护成本高**

It is significantly easier to maintain a site written in such a way that the markup is style-independent. For example, changing the color of a site that uses `<font color="">` throughout requires changes across the entire site, whereas a similar change to a site based on CSS can be done by changing a single file.

维护一个样式与标记分离的网站显然很容易。举个例子，整个网站需要通过使用`<font color="">`更改网站的颜色，而对于以CSS为基础的网站可以通过改变单个文件做出同样的操作。

**Larger document sizes**

**越来越大的文档大小**

Presentational markup tends to be much more redundant, and thus results in larger document sizes.

表示性标记往往更加冗余，导致的结果是越来越大的文档大小

For those reasons, presentational markup has been removed from HTML in this version. This change should not come as a surprise; HTML 4.0 deprecated presentational markup many years ago and provided a mode (HTML Transitional) to help authors move away from presentational markup; later, XHTML 1.1 went further and obsoleted those features altogether.

出于这些原因，表示性标记在当前版本的HTML中移除了。对于这种改变不必惊讶；HTML4.0在多年以前就废弃了表示性标记，提供了一种模式（HTML Transitional）帮助作者远离表示性标记；之后，XHTML1.1进一步完全废弃了这些特性。

The only remaining presentational markup features in HTML are the `style` attribute and the `style`element. Use of the `style` attribute is somewhat discouraged in production environments, but it can be useful for rapid prototyping (where its rules can be directly moved into a separate style sheet later) and for providing specific styles in unusual cases where a separate style sheet would be inconvenient. Similarly, the `style` element can be useful in syndication or for page-specific styles, but in general an external style sheet is likely to be more convenient when the styles apply to multiple pages.

在HTML中仅剩下的表示性标记特性就只有`style`属性和`<style>`元素。在生产环境中使用`style`属性是不怎么被建议的，但是这对快速原型制作（其规则可以在以后移动到分离的样式表中）是有用的，在一个分离的样式表不方便的异常情况下提供特定的样式。同样，`<style>`元素对于联合或者特定页面样式是有用的，但是当样式需要提供给多页面的时候，外部样式表可能更加方便。

It is also worth noting that some elements that were previously presentational have been redefined in this specification to be media-independent: `b`, `i`, `hr`, `s`, `small`, and `u`.

值得注意的是此规范的某些元素被重新定义为与媒体无关的：`<b>`,`<i>`,`<s>`,`<small>`,and `<u>`.

#### 1.10.2. Syntax errors（语法错误）

> This section is non-normative
>
> 本节不具有规范性

The syntax of HTML is constrained to avoid a wide variety of problems.

限制HTML语法，以避免各种各样的问题。

**Unintuitive error-handling behavior**

**不直观的错误处理行为**

Certain invalid syntax constructs, when parsed, result in DOM trees that are highly unintuitive.

一些无效的语法结构，转译导致的结果是DOM树非常不直观。

**Errors with optional error recovery**

**可选择的错误恢复错误**

To allow user agents to be used in controlled environments without having to implement the more bizarre and convoluted error handling rules, user agents are permitted to fail whenever encountering a [parse error](https://www.w3.org/TR/html5/syntax.html#parse-errors).

允许用户代理在没有实行更加奇特和复杂的错误处理规则的受控环境中使用，每当遇到解析错误的时候都允许用户代理失败

**Errors where the error-handling behavior is not compatible with streaming user agents**

**错误处理行为和不兼容的用户代理流错误**

Some error-handling behavior, such as the behavior for the `<table><hr>`... example mentioned above, are incompatible with streaming user agents (user agents that process HTML files in one pass, without storing state). To avoid interoperability problems with such user agents, any syntax resulting in such behavior is considered invalid.

一些错误处理行为，例如`<table><hr>`这样的行为，上述提到的例子和用户代理流不兼容（一次性处理HTML文件，没有状态存储的用户代理）。为了避免用户代理之间的互相操作问题，导致此类行为的任何语法都被视为无效。

**Errors that can result in infoset coercion**

**导致信息强制的错误**

When a user agent based on XML is connected to an HTML parser, it is possible that certain invariants that XML enforces, such as element or attribute names never contain multiple colons, will be violated by an HTML file. Handling this can require that the parser coerce the HTML DOM into an XML-compatible infoset. Most syntax constructs that require such handling are considered invalid. (Comments containing two consecutive hyphens, or ending with a hyphen, are exceptions that are allowed in the HTML syntax.)

当一个基于XML的用户代理与一个HTML解析器连接时，

**Errors that result in disproportionately poor performance**

**导致性能不合理的错误**

Certain syntax constructs can result in disproportionately poor performance. To discourage the use of such constructs, they are typically made non-conforming.

某些语法结构会导致性能不合理的错误。不建议使用这些结构，它们通常是不合格的。

**Errors involving fragile syntax constructs**

**包含弱语法结构的错误**

There are syntax constructs that, for historical reasons, are relatively fragile. To help reduce the number of users who accidentally run into such problems, they are made non-conforming.