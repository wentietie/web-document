import{_ as n,c as s}from"./app.3bec2fc9.js";const a={},p=s(`<h1 id="\u6570\u7EC4\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u6269\u5C55" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u6269\u5C55</h1><h2 id="\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26</h2><p>\u6269\u5C55\u8FD0\u7B97\u7B26\uFF08spread\uFF09\u662F\u4E09\u4E2A\u70B9\uFF08 ... \uFF09\u3002\u5B83\u597D\u6BD4 rest \u53C2\u6570\u7684\u9006\u8FD0\u7B97\uFF0C\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u4E3A\u7528\u9017\u53F7\u5206\u9694\u7684\u53C2\u6570\u5E8F\u5217\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3 4 5</span>

<span class="token comment">//\u6269\u5C55\u8FD0\u7B97\u7B26\u540E\u9762\u8FD8\u53EF\u4EE5\u653E\u7F6E\u8868\u8FBE\u5F0F\u3002</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u7531\u4E8E\u6269\u5C55\u8FD0\u7B97\u7B26\u53EF\u4EE5\u5C55\u5F00\u6570\u7EC4\uFF0C\u6240\u4EE5\u4E0D\u518D\u9700\u8981 apply \u65B9\u6CD5\uFF0C\u5C06\u6570\u7EC4\u8F6C\u4E3A\u51FD\u6570\u7684\u53C2\u6570\u4E86\u3002</span>
<span class="token comment">// ES5 \u7684\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ES6\u7684\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26\u7684\u5E94\u7528</h3><ol><li>\u590D\u5236\u6570\u7EC4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u5199\u6CD5\u4E00</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token operator">...</span>a2<span class="token punctuation">]</span> <span class="token operator">=</span> a1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>\u5408\u5E76\u6570\u7EC4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// ES5 \u7684\u5408\u5E76\u6570\u7EC4</span>
arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; ]</span>
<span class="token comment">// ES6 \u7684\u5408\u5E76\u6570\u7EC4</span>
<span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">,</span> <span class="token operator">...</span>arr3<span class="token punctuation">]</span>
<span class="token comment">// [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3"><li>\u4E0E\u89E3\u6784\u8D4B\u503C\u7ED3\u5408</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token comment">// ES5</span>
a <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> rest <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// ES6</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>\u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span>
<span class="token comment">// [ &quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot; ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>\u5B9E\u73B0\u4E86 Iterator \u63A5\u53E3\u7684\u5BF9\u8C61 \u4EFB\u4F55\u5B9A\u4E49\u4E86\u904D\u5386\u5668\uFF08Iterator\uFF09\u63A5\u53E3\u7684\u5BF9\u8C61\uFF08\u53C2\u9605 Iterator \u4E00\u7AE0\uFF09\uFF0C\u90FD\u53EF\u4EE5\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\u3002</li></ol><h2 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h2><p>\u7528\u4E8E\u5C06\u4E24\u7C7B\u5BF9\u8C61\u8F6C\u4E3A\u771F\u6B63\u7684\u6570\u7EC4\uFF1A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\uFF08array-like object\uFF09\u548C\u53EF\u904D\u5386\uFF08iterable\uFF09\u7684\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// ES5\u7684\u5199\u6CD5</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>
<span class="token comment">// ES6\u7684\u5199\u6CD5</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h2><p>\u7528\u4E8E\u5C06\u4E00\u7EC4\u503C\uFF0C\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002\u57FA\u672C\u4E0A\u53EF\u4EE5\u7528\u6765\u66FF\u4EE3Array()\u6216new Array()\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u7531\u4E8E\u53C2\u6570\u4E0D\u540C\u800C\u5BFC\u81F4\u7684\u91CD\u8F7D\u3002\u5B83\u7684\u884C\u4E3A\u975E\u5E38\u7EDF\u4E00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// [3,11,8]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// [3]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="copywithin" tabindex="-1"><a class="header-anchor" href="#copywithin" aria-hidden="true">#</a> copyWithin()</h2><h2 id="find-\u548C-findindex" tabindex="-1"><a class="header-anchor" href="#find-\u548C-findindex" aria-hidden="true">#</a> find() \u548C findIndex()</h2><p>find\u65B9\u6CD5\uFF0C\u7528\u4E8E\u627E\u51FA\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458. \u5B83\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570,\u56DE\u8C03\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u4E3A\u5F53\u524D\u7684\u503C\u3001\u5F53\u524D\u7684\u4F4D\u7F6E\u548C\u539F\u6570\u7EC4\u3002 findIndex \u65B9\u6CD5\u7684\u7528\u6CD5\u4E0E find \u65B9\u6CD5\u975E\u5E38\u7C7B\u4F3C\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u6570\u7EC4\u6210\u5458\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u6240\u6709\u6210\u5458\u90FD\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u5219\u8FD4\u56DE -1 \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// -5</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u7528\u6765\u7ED1\u5B9A\u56DE\u8C03\u51FD\u6570\u7684 this \u5BF9\u8C61\u3002</p><h2 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill()</h2><p>fill\u65B9\u6CD5\u4F7F\u7528\u7ED9\u5B9A\u503C\uFF0C\u586B\u5145\u4E00\u4E2A\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// [7, 7, 7]</span>

<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// [7, 7, 7]</span>

<span class="token comment">//fill\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u63A5\u53D7\u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u586B\u5145\u7684\u8D77\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u3002</span>
<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;a&#39;, 7, &#39;c&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,29);function t(e,o){return p}var l=n(a,[["render",t],["__file","es6-8.html.vue"]]);export{l as default};
