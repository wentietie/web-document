<template><h1 id="字符串的扩展" tabindex="-1"><a class="header-anchor" href="#字符串的扩展" aria-hidden="true">#</a> 字符串的扩展</h1>
<p>ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。但是，这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"\u0061"</span>
<span class="token comment">// "a"</span>

<span class="token string">"\uD842\uDFB7"</span>
<span class="token comment">// "𠮷"</span>

<span class="token string">"\u20BB7"</span>
<span class="token comment">// " 7"</span>

<span class="token comment">//上面代码表示，如果直接在\u后面跟上超过0xFFFF的数值（比如\u20BB7），JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。</span>

<span class="token string">"\u{20BB7}"</span>
<span class="token comment">// "𠮷"</span>
<span class="token string">"\u{41}\u{42}\u{43}"</span>
<span class="token comment">// "ABC"</span>
<span class="token keyword">let</span> hello <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
hell\u<span class="token punctuation">{</span>6F<span class="token punctuation">}</span> <span class="token comment">// 123</span>
<span class="token string">'\u{1F680}'</span> <span class="token operator">===</span> <span class="token string">'\uD83D\uDE80'</span>
<span class="token comment">// true</span>


<span class="token comment">//有了这种表示法之后，JavaScript 共有 6 种方法可以表示一个字符。</span>
<span class="token string">'\z'</span> <span class="token operator">===</span> <span class="token string">'z'</span>  <span class="token comment">// true</span>
<span class="token string">'\172'</span> <span class="token operator">===</span> <span class="token string">'z'</span> <span class="token comment">// true</span>
<span class="token string">'\x7A'</span> <span class="token operator">===</span> <span class="token string">'z'</span> <span class="token comment">// true</span>
<span class="token string">'\u007A'</span> <span class="token operator">===</span> <span class="token string">'z'</span> <span class="token comment">// true</span>
<span class="token string">'\u{7A}'</span> <span class="token operator">===</span> <span class="token string">'z'</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="字符串的遍历器接口" tabindex="-1"><a class="header-anchor" href="#字符串的遍历器接口" aria-hidden="true">#</a> 字符串的遍历器接口</h2>
<p>ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> codePoint <span class="token keyword">of</span> <span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>codePoint<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// "f"</span>
<span class="token comment">// "o"</span>
<span class="token comment">// "o"</span>

<span class="token comment">// 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。</span>
<span class="token keyword">let</span> text <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x20BB7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> text<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// " "</span>
<span class="token comment">// " "</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// "𠮷"</span>
<span class="token comment">//上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不可打印），而for...of循环会正确识别出这一个字符。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="json-stringify-的改造" tabindex="-1"><a class="header-anchor" href="#json-stringify-的改造" aria-hidden="true">#</a> JSON.stringify() 的改造</h2>
<p>根据标准，JSON 数据必须是 UTF-8 编码。但是，现在的JSON.stringify()方法有可能返回不符合 UTF-8 标准的字符串。为了确保返回的是合法的 UTF-8 字符，ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。</p>
<h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2>
<p>模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。<br>
传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#result'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
  <span class="token string">'There are &lt;b>'</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">'&lt;/b> '</span> <span class="token operator">+</span>
  <span class="token string">'items in your basket, '</span> <span class="token operator">+</span>
  <span class="token string">'&lt;em>'</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>onSale <span class="token operator">+</span>
  <span class="token string">'&lt;/em> are on sale!'</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#result'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  There are &lt;b></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>basket<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/b> items
   in your basket, &lt;em></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>basket<span class="token punctuation">.</span>onSale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/em>
  are on sale!
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 并且可以定义多行字符串和使用变量</span>
<span class="token comment">// 普通字符串</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">In JavaScript '\n' is a line-feed.</span><span class="token template-punctuation string">`</span></span>

<span class="token comment">// 多行字符串</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">In JavaScript this is
 not legal.</span><span class="token template-punctuation string">`</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">string text line 1
string text line 2</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模板字符串中嵌入变量，需要将变量名写在${}之中。大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"Bob"</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token string">"today"</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, how are you </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>x <span class="token operator">+</span> obj<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token comment">// "3"</span>

<span class="token comment">// 模板字符串之中还能调用函数。</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">foo </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bar</span><span class="token template-punctuation string">`</span></span>
<span class="token comment">// foo Hello World bar</span>

<span class="token comment">//如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。如果模板字符串中的变量没有声明，将报错。</span>

<span class="token comment">// 模板字符串甚至还能嵌套。</span>
<span class="token keyword">const</span> <span class="token function-variable function">tmpl</span> <span class="token operator">=</span> <span class="token parameter">addrs</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  &lt;table>
  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addrs<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">addr</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;tr>&lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addr<span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>&lt;/tr>
    &lt;tr>&lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>addr<span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>&lt;/tr>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  &lt;/table>
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>




<span class="token comment">// 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。如果你不想要这个换行，可以使用trim方法消除它。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。</p>
</div>
<h3 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h3>
<p>模板字符串默认会将字符串转义，导致无法嵌入其他语言。</p>
</template>
