<template><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3>
<p>一个类只有一个实例，并提供一个访问他的全局访问接口。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token keyword">null</span>    
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_instance
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3>
<p>根据不同的参数，返回不同类的实例。
核心思想：将对象的创建与对象的实现分离。实现复杂，但使用简单。工厂会给我们提供一个工厂方法，我们直接去调用即可。</p>
<p>例子： js 中的 document.createElement() 方法；Vue 和 React中的createElement() 方法</p>
<h3 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h3>
<p>利用对象或Map来简化if-else和switch</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">switchFn</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> 
            <span class="token comment">// ...</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
            <span class="token comment">//</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 改写
 */</span>
<span class="token keyword">class</span> <span class="token class-name">KeyToFn</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> __keyFn <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> fn
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'已经包含该键名对应的方法，如果想继续更改，请使用update方法'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> fn
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'不包含该键名对应的方法，如果想继续添加，请使用add方法'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'对象中不包含该键值对'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">exeFn</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> <span class="token operator">...</span>option</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> KeyToFn<span class="token punctuation">.</span>__keyFn<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>option<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
KeyToFn<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
KeyToFn<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

KeyToFn<span class="token punctuation">.</span><span class="token function">exeFn</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'abc'</span><span class="token punctuation">)</span>
KeyToFn<span class="token punctuation">.</span><span class="token function">exeFn</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token string">'def'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
</template>
