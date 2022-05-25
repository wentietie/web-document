<template><h1 id="module-的语法" tabindex="-1"><a class="header-anchor" href="#module-的语法" aria-hidden="true">#</a> Module 的语法</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>在 ES6 之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。</p>
<p>区别详见<RouterLink to="/notes/JS/modules.html">随笔笔记/js随笔</RouterLink></p>
<p>ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// CommonJS模块</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readfile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">let</span> _fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> stat <span class="token operator">=</span> _fs<span class="token punctuation">.</span>stat<span class="token punctuation">;</span>
<span class="token keyword">let</span> exists <span class="token operator">=</span> _fs<span class="token punctuation">.</span>exists<span class="token punctuation">;</span>
<span class="token keyword">let</span> readfile <span class="token operator">=</span> _fs<span class="token punctuation">.</span>readfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面代码的实质是整体加载 fs 模块（即加载 fs 的所有方法），生成一个对象（ _fs ），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。</p>
<p>ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2>
<p>ES6 的模块自动采用严格模式，不管你有没有在模块头部加上 &quot;use strict&quot;; 。
严格模式主要有以下限制。</p>
<ul>
<li>变量必须声明后再使用</li>
<li>函数的参数不能有同名属性，否则报错</li>
<li>不能使用 with 语句</li>
<li>不能对只读属性赋值，否则报错</li>
<li>不能使用前缀 0 表示八进制数，否则报错</li>
<li>不能删除不可删除的属性，否则报错</li>
<li>不能删除变量 delete prop ，会报错，只能删除属性 delete global[prop]</li>
<li>eval 不会在它的外层作用域引入变量</li>
<li>eval 和 arguments 不能被重新赋值</li>
<li>arguments 不会自动反映函数参数的变化</li>
<li>不能使用 arguments.callee</li>
<li>不能使用 arguments.caller</li>
<li>禁止 this 指向全局对象</li>
<li>不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈</li>
<li>增加了保留字（比如 protected 、 static 和 interface ）</li>
</ul>
<h2 id="export-命令" tabindex="-1"><a class="header-anchor" href="#export-命令" aria-hidden="true">#</a> export 命令</h2>
<p>模块功能主要由两个命令构成：export和import 。 export 命令用于规定模块的对外接口， import 命令用于输入其他模块提供的功能。
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用 export 关键字输出该变量。下面是一个 JS 文件，里面使用 export 命令输出变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// profile.js</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Michael'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'Jackson'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 上面代码是 profile.js 文件，保存了用户信息。
 * ES6 将其视为一个模块，里面用 export 命令对外部输出了三个变量。
 * export 的写法，除了像上面这样，还有另外一种。
 */</span>

<span class="token comment">// profile.js</span>
<span class="token keyword">var</span> firstName <span class="token operator">=</span> <span class="token string">'Michael'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> lastName <span class="token operator">=</span> <span class="token string">'Jackson'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">1958</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//export 命令除了输出变量，还可以输出函数或类（class）。</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 上面代码对外输出一个函数 multiply 。
 * 通常情况下， export 输出的变量就是本来的名字，但是可以使用 as 关键字重命名。
 */</span>

<span class="token keyword">function</span> <span class="token function">v1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">v2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    v1 <span class="token keyword">as</span> streamV1<span class="token punctuation">,</span>
    v2 <span class="token keyword">as</span> streamV2<span class="token punctuation">,</span>
    v2 <span class="token keyword">as</span> streamLatestVersion
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>需要特别注意的是， export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 报错</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> m<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量 m ，还是直接输出 1。 1 只是一个值，不是接口。正确的写法是下面这样。
 */</span>

<span class="token comment">// 写法一</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 写法二</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 写法三</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>n <span class="token keyword">as</span> m<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//同样的， function 和 class 的输出，也必须遵守这样的写法。</span>
<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> f<span class="token punctuation">;</span>
<span class="token comment">// 正确</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 正确</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//另外， export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> foo <span class="token operator">=</span> <span class="token string">'baz'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="import-命令" tabindex="-1"><a class="header-anchor" href="#import-命令" aria-hidden="true">#</a> import 命令</h2>
<p>使用export 命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName<span class="token punctuation">,</span> year <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./profile.js'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  element<span class="token punctuation">.</span>textContent <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
