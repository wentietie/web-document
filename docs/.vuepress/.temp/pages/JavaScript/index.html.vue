<template><h1 id="第一部分-作用域和闭包" tabindex="-1"><a class="header-anchor" href="#第一部分-作用域和闭包" aria-hidden="true">#</a> 第一部分 作用域和闭包</h1>
<h2 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理" aria-hidden="true">#</a> 编译原理</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>尽管通常将 JavaScript 归类为“动态”或“解释执行”语言，但事实上它是一门编译语言。
但与传统的编译语言不同，它不是提前编译的，编译结果也不能在分布式系统中进行移植。</p>
</div>
<h3 id="传统编译语言编译过程" tabindex="-1"><a class="header-anchor" href="#传统编译语言编译过程" aria-hidden="true">#</a> 传统编译语言编译过程</h3>
<p>以JS语言举例</p>
<ol>
<li>分词/词法分析
这个过程会将书写的编程字符串分解成有意义的代码块，这些代码块被称为词法单元（token）。
例如：var a = 2;。这段程序通常被分解为var、a、=、2、;。空格是否被当作词法单元取决于空格在语言中是否有意义。</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">关于分词和词法分析的区别</p>
<ul>
<li>中文本书中原文的描述是：<strong>如果词法单元生成器在判断 a 是一个独立的词法单元还是其他词法单元的一部分时，调用的是有状态的解析规则，那么这个过程就被称为词法分析</strong>。</li>
<li>通过查询资料本人的理解为：<strong>词法分析是用来做分词的手段，词法分析的目的是分词</strong>。</li>
</ul>
</div>
<ol start="2">
<li>解析/语法分析
这个过程将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”</li>
<li>代码生成</li>
</ol>
<h3 id="js编译" tabindex="-1"><a class="header-anchor" href="#js编译" aria-hidden="true">#</a> JS编译</h3>
<p>简单地说，任何 JavaScript 代码片段在执行前都要进行编译（通常就在执行前）。因此，
JavaScript 编译器首先会对 var a = 2; 这段程序进行编译，然后做好执行它的准备，并且
通常马上就会执行它。</p>
<h3 id="理解作用域" tabindex="-1"><a class="header-anchor" href="#理解作用域" aria-hidden="true">#</a> 理解作用域</h3>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<ol>
<li>引擎
从头到尾负责整个JS程序的编译及执行过程</li>
<li>编译器
负责语法分析及代码生成</li>
<li>作用域
负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。</li>
</ol>
</template>
