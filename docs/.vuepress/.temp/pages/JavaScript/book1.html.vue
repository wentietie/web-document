<template><h1 id="第一部分-作用域和闭包" tabindex="-1"><a class="header-anchor" href="#第一部分-作用域和闭包" aria-hidden="true">#</a> 第一部分 作用域和闭包</h1>
<h2 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理" aria-hidden="true">#</a> 编译原理</h2>
<div class="custom-container tip"><p class="custom-container-title">尽管通常将 JavaScript 归类为“动态”或“解释执行”语言，但事实上它是一门编译语言。 但与传统的编译语言不同，它不是提前编译的，编译结果也不能在分布式系统中进行移植。</p>
</div>
<h3 id="传统编译语言编译过程" tabindex="-1"><a class="header-anchor" href="#传统编译语言编译过程" aria-hidden="true">#</a> 传统编译语言编译过程</h3>
<p>以JS语言举例</p>
<ol>
<li>分词/词法分析 这个过程会将书写的编程字符串分解成有意义的代码块，这些代码块被称为词法单元（token）。 例如：var a = 2;。这段程序通常被分解为var、a、=、2、;。空格是否被当作词法单元取决于空格在语言中是否有意义。<div class="custom-container tip"><p class="custom-container-title">关于分词和词法分析的区别</p>
</div>
</li>
</ol>
<ul>
<li>中文本书中原文的描述是：<strong>如果词法单元生成器在判断 a 是一个独立的词法单元还是其他词法单元的一部分时，调用的是有状态的解析规则，那么这个过程就被称为词法分析</strong>。</li>
<li>通过查询资料本人的理解为：<strong>词法分析是用来做分词的手段，词法分析的目的是分词</strong>。
:::</li>
</ul>
<ol start="2">
<li>解析/语法分析 这个过程将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”(AST)
抽象语法树类似一个对象，这个对象中存储了对分词的的描述。</li>
<li>代码生成 将 AST 转换为可执行代码的过程被称为代码生成。</li>
</ol>
<h3 id="js编译" tabindex="-1"><a class="header-anchor" href="#js编译" aria-hidden="true">#</a> JS编译</h3>
<p>简单地说，任何 JavaScript 代码片段在执行前都要进行编译（通常就在执行前）。因此， JavaScript 编译器首先会对 var a = 2; 这段程序进行编译，然后做好执行它的准备，并且 通常马上就会执行它。</p>
<h3 id="理解作用域" tabindex="-1"><a class="header-anchor" href="#理解作用域" aria-hidden="true">#</a> 理解作用域</h3>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<ol>
<li>引擎 从头到尾负责整个JS程序的编译及执行过程</li>
<li>编译器 负责语法分析及代码生成</li>
<li>作用域 负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。</li>
</ol>
<h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h4>
<p>以“var a = 2;”为例</p>
<ol>
<li>编译器过程
<ol>
<li>遇到var a，编译器会查询作用域中是否存在变量a，如果有则忽略，没有则创建一个变量，并命名为a。这个过程被称为LHS查询。即赋值操作的左侧查询。</li>
<li>为引擎生成运行时所需要的代码，这些代码用来处理a = 2这个赋值操作。</li>
</ol>
</li>
<li>引擎过程
<ol>
<li>引擎会查询作用域中是否有a这个变量，如果有就直接使用这个变量，如果没有则向上一层作用域中查询。这个过程被称为RHS查询。即赋值操作的非左侧查询。</li>
<li>如果最后引擎没有找到a这个变量，则会抛出一个异常<div class="custom-container tip"><p class="custom-container-title">LHS和RHS LHS的意思是试图找到变量的容器本身，从而可以进行复制，而RHS的目的更强调“取到他的源值”。</p>
</div>
</li>
</ol>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 以这段代码为例
 * a 的引用是一个RHS引用，因为这里a 并没有被赋予给任何变量，
 * 而是需要取到a的值并将值传递给log方法。
 * 而对a = 2 这个a的引用则是LHS引用，
 * 因为实际上我们并不关心a的值是什么，我们只需要将2赋值给a
 */</span>

<span class="token comment">// 举例</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 </span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 *  首先对于方法foo 需要先声明一个变量foo，并将function赋值给foo（LHS）。
 *  所以foo(2) 的执行则是找到foo所对应的方法（RHS）并执行。
 *  而方法中形参的赋值a = 2是隐式的所以这个是需要一次LHS查询的。
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>结论：LHS 和 RHS 的含义是“赋值操作的目标是谁（LHS）”以及“谁是赋值操作的源头 （RHS）”。
:::</p>
<h4 id="作用域嵌套" tabindex="-1"><a class="header-anchor" href="#作用域嵌套" aria-hidden="true">#</a> 作用域嵌套</h4>
<p>这一部分很好理解。就是当一个作用域中包含子作用域，那LHS和RHS在进行查询的时候，如果在当前作用域中没有查询到结果，会在外层嵌套作用域中继续查找。</p>
<h2 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域" aria-hidden="true">#</a> 词法作用域</h2>
<h3 id="词法阶段" tabindex="-1"><a class="header-anchor" href="#词法阶段" aria-hidden="true">#</a> 词法阶段</h3>
<p>词法作用域就是定义在词法阶段的作用域</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">bar</span><span class="token punctuation">(</span>b <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2, 4, 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在这个例子中有三个逐级嵌套的作用域。为了帮助理解，可以将它们想象成几个逐级包含的气泡。</p>
<p><img src="C:\Users\LYC\Desktop\web-document\docs\JavaScript\images\1651217604(1).jpg" alt="1651217604(1)"></p>
</template>
