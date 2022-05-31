<template><h1 id="第二部分-this和对象原型" tabindex="-1"><a class="header-anchor" href="#第二部分-this和对象原型" aria-hidden="true">#</a> 第二部分 this和对象原型</h1>
<h2 id="关于this" tabindex="-1"><a class="header-anchor" href="#关于this" aria-hidden="true">#</a> 关于this</h2>
<h3 id="_1-1-为什么要用this" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么要用this" aria-hidden="true">#</a> 1.1 为什么要用this</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">"Hello, I'm "</span> <span class="token operator">+</span> <span class="token function">identify</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> me <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Kyle"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> you <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Reader"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">identify</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// KYLE</span>
<span class="token function">identify</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>you<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// READER</span>
<span class="token function">speak</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, 我是 KYLE</span>
<span class="token function">speak</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>you<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, 我是 READER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这段代码可以在不同的上下文对象（me 和 you）中重复使用函数 identify() 和 speak()， 不用针对每个对象编写不同版本的函数。如果不使用 this，那就需要给 identify() 和 speak()
显式传入一个上下文对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">identify</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> context<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">"Hello, I'm "</span> <span class="token operator">+</span> <span class="token function">identify</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">identify</span><span class="token punctuation">(</span>you<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// READER</span>
<span class="token function">speak</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hello, 我是 KYLE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this则不会这样。当我们介绍对象和原型时，你就会明白函数可以自动引用合适的上下文对象有多重要。</p>
<h3 id="_1-2-误解" tabindex="-1"><a class="header-anchor" href="#_1-2-误解" aria-hidden="true">#</a> 1.2 误解</h3>
<h4 id="_1-2-1-指向自身" tabindex="-1"><a class="header-anchor" href="#_1-2-1-指向自身" aria-hidden="true">#</a> 1.2.1 指向自身</h4>
<p>人们很容易把 this 理解成指向函数自身。那么为什么需要从函数内部引用函数自身呢？常见的原因是递归（从函数内部调用这个函数）或者可以写一个在第一次被调用后自己解除绑定的事件处理器。 JavaScript
的新手开发者通常会认为，既然函数看作一个对象（JavaScript
中的所有函数都是对象），那就可以在调用函数时存储状态（属性的值）。这是可行的，有些时候也确实有用，但是在本书即将介绍的许多模式中你会发现，除了函数对象还有许多更合适存储状态的地方。</p>
<p>不过现在我们先来分析一下这个模式，让大家看到 this 并不像我们所想的那样指向函数本身。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"foo: "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录 foo 被调用的次数</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

foo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">foo</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// foo: 6</span>
<span class="token comment">// foo: 7</span>
<span class="token comment">// foo: 8</span>
<span class="token comment">// foo: 9</span>
<span class="token comment">// foo 被调用了多少次？</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 -- WTF?</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>console.log 语句产生了 4 条输出，证明 foo(..) 确实被调用了 4 次，但是 foo.count 仍然是 0。显然从字面意思来理解 this 是错误的。</p>
<p>执行 foo.count = 0 时，的确向函数对象 foo 添加了一个属性 count。但是函数内部代码this.count 中的 this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同，困惑随之产生。</p>
<p>如果要从函数对象内部引用它自身，那只使用 this 是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量）来引用它。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// foo 指向它自身</span>
<span class="token punctuation">}</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 匿名（没有名字的）函数无法指向自身</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">还有一种传统的但是现在已经被弃用和批判的用法，是使用 arguments.callee</p>
<p>来引用当前正在运行的函数对象。这是唯一一种可以从匿名函数对象内部引用自身的方法。然而，更好的方式是避免使用匿名函数，至少在需要自引用时使用具名函数（表达式）。arguments.callee 已经被弃用，不应该再使用它。</p>
</div>
<p>一种解决方法是使用 foo 标识符替代 this 来引用函数对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"foo: "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 记录 foo 被调用的次数</span>
    foo<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

foo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">foo</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// foo: 6</span>
<span class="token comment">// foo: 7</span>
<span class="token comment">// foo: 8</span>
<span class="token comment">// foo: 9</span>
<span class="token comment">// foo 被调用了多少次？</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>然而，这种方法同样回避了 this 的问题，并且完全依赖于变量 foo 的词法作用域。另一种方法是强制 this 指向 foo 函数对象：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"foo: "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 记录 foo 被调用的次数</span>
<span class="token comment">// 注意，在当前的调用方式下（参见下方代码），this 确实指向 foo</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

foo<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 call(..) 可以确保 this 指向函数对象 foo 本身</span>
        <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// foo: 6</span>
<span class="token comment">// foo: 7</span>
<span class="token comment">// foo: 8</span>
<span class="token comment">// foo: 9</span>
<span class="token comment">// foo 被调用了多少次？</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h4 id="_1-2-2-它的作用域" tabindex="-1"><a class="header-anchor" href="#_1-2-2-它的作用域" aria-hidden="true">#</a> 1.2.2 它的作用域</h4>
<p>第二种常见的误解是，this 指向函数的作用域。需要明确的是，this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过
JavaScript代码访问，它存在于 JavaScript 引擎内部。</p>
<p>思考一下下面的代码，它试图（但是没有成功）跨越边界，使用 this 来隐式引用函数的词法作用域：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>首先，这段代码试图通过 this.bar() 来引用 bar() 函数。这是绝对不可能成功的，我们之后会解释原因。调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符。</p>
<p>此外，编写这段代码的开发者还试图使用 this 联通 foo() 和 bar() 的词法作用域，从而让bar() 可以访问 foo() 作用域里的变量 a。这是不可能实现的，你不能使用 this 来引用一个词法作用域内部的东西。</p>
<h3 id="_1-3-this到底是什么" tabindex="-1"><a class="header-anchor" href="#_1-3-this到底是什么" aria-hidden="true">#</a> 1.3 this到底是什么</h3>
<p>this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this
的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this
就是记录的其中一个属性，会在函数执行的过程中用到。</p>
<p><strong>总而言之，this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。</strong></p>
<h2 id="this-全面解析" tabindex="-1"><a class="header-anchor" href="#this-全面解析" aria-hidden="true">#</a> this 全面解析</h2>
<h3 id="_2-1-调用位置" tabindex="-1"><a class="header-anchor" href="#_2-1-调用位置" aria-hidden="true">#</a> 2.1 调用位置</h3>
<p>在理解 this 的绑定过程之前，首先要理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。只有仔细分析调用位置才能回答这个问题：这个 this 到底引用的是什么？</p>
<p>通常来说，寻找调用位置就是寻找“函数被调用的位置”，但是做起来并没有这么简单，因为某些编程模式可能会隐藏真正的调用位置。</p>
<p>最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。</p>
<p>下面我们来看看到底什么是调用栈和调用位置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 当前调用栈是：baz</span>
<span class="token comment">// 因此，当前调用位置是全局作用域</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"baz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- bar 的调用位置</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 当前调用栈是 baz -> bar</span>
<span class="token comment">// 因此，当前调用位置在 baz 中</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- foo 的调用位置</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 当前调用栈是 baz -> bar -> foo</span>
<span class="token comment">// 因此，当前调用位置在 bar 中</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"foo"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">baz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- baz 的调用位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>注意我们是如何（从调用栈中）分析出真正的调用位置的，因为它决定了 this 的绑定</strong></p>
<div class="custom-container tip"><p class="custom-container-title">你可以把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。</p>
<p>另一个查看调用栈的方法是使用浏览器的调试工具。绝大多数现代桌面浏览器都内置了开发者工具，其中包含 JavaScript 调试器。就本例来说，你可以在工具中给 foo() 函数的第一行代码设置一个断点，或者直接在第一行代码之前插入一条
debugger;语句。运行代码时，调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。因此，如果你想要分析 this 的绑定，使用开发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。</p>
</div>
<h3 id="_2-2-绑定规则" tabindex="-1"><a class="header-anchor" href="#_2-2-绑定规则" aria-hidden="true">#</a> 2.2 绑定规则</h3>
<h4 id="_2-2-1-默认绑定" tabindex="-1"><a class="header-anchor" href="#_2-2-1-默认绑定" aria-hidden="true">#</a> 2.2.1 默认绑定</h4>
<p>首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你应该注意到的第一件事是，声明在全局作用域中的变量（比如 var a = 2）就是全局对象的一个同名属性。它们本质上就是同一个东西，并不是通过复制得到的。</p>
<p>接下来我们可以看到当调用 foo() 时，this.a 被解析成了全局变量 a。为什么？因为在本例中，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。</p>
<p>那么我们怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看 foo() 是如何调用的。在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。</p>
<p><strong>如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定到 undefined</strong></p>
<h4 id="_2-2-2-隐式绑定" tabindex="-1"><a class="header-anchor" href="#_2-2-2-隐式绑定" aria-hidden="true">#</a> 2.2.2 隐式绑定</h4>
<p>另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，不过这种说法可能会造成一些误导。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>首先需要注意的是 foo() 的声明方式，及其之后是如何被当作引用属性添加到 obj 中的。但是无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj 对象。</p>
<p>然而，调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。</p>
<p>无论你如何称呼这个模式，当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 foo() 时 this 被绑定到 obj，因此
this.a 和 obj.a 是一样的。</p>
<p>对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> obj2
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span>obj2<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="隐式丢失" tabindex="-1"><a class="header-anchor" href="#隐式丢失" aria-hidden="true">#</a> <strong>隐式丢失</strong></h5>
<p>一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 函数别名！</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"oops, global"</span><span class="token punctuation">;</span> <span class="token comment">// a 是全局对象的属性</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "oops, global"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">doFoo</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// fn 其实引用的是 foo</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- 调用位置！</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"oops, global"</span><span class="token punctuation">;</span> <span class="token comment">// a 是全局对象的属性</span>
<span class="token function">doFoo</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "oops, global"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_2-2-3-显式绑定" tabindex="-1"><a class="header-anchor" href="#_2-2-3-显式绑定" aria-hidden="true">#</a> 2.2.3 显式绑定</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
