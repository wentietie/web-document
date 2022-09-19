<template><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<p>==设计模式（Design Pattern）==是前辈们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性、安全性、以及提高程序的内聚、降低程序耦合的解决方案。</p>
<h1 id="_1-七大原则" tabindex="-1"><a class="header-anchor" href="#_1-七大原则" aria-hidden="true">#</a> 1.七大原则</h1>
<blockquote>
<p>设计原则的核心思想：</p>
</blockquote>
<ul>
<li>找出应用中可能需要变化之处，把他们独立出来，不要和那些不需要变化的代码混在一起</li>
<li>针对接口编程，而非针对实现编程</li>
<li>为了交互对象之间的松耦合设计而努力</li>
</ul>
<h2 id="_1-1-单一职责原则" tabindex="-1"><a class="header-anchor" href="#_1-1-单一职责原则" aria-hidden="true">#</a> 1.1 单一职责原则</h2>
<blockquote>
<p>基本介绍</p>
</blockquote>
<p>对类来说，<strong>一个类应该只负责一项职责</strong>。</p>
<p>eg. 某个Dao类既操作user表，又操作order表。这个时候就应该把该Dao类拆分成一个UserDao类、一个OrderDao类。</p>
<blockquote>
<p>注意事项和细节</p>
</blockquote>
<ul>
<li>降低类的复杂度，一个类只负责一个一项职责。</li>
<li>提高类的可读性、可维护性</li>
<li>降低变更引起的风险</li>
<li>通常情况下，我们应当遵守单一职责原则。<strong>只有逻辑足够简单，才可以在代码级违反单一原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则。</strong></li>
</ul>
<h2 id="_1-2-接口隔离原则" tabindex="-1"><a class="header-anchor" href="#_1-2-接口隔离原则" aria-hidden="true">#</a> 1.2 接口隔离原则</h2>
<blockquote>
<p>基本介绍</p>
</blockquote>
<p>客户端不应该依赖它不需要的接口。即一个类对另一个类的依赖应该建立在最小的接口上。</p>
<blockquote>
<p>例子：Interface1中有5个方法，类B和类D是它的实现类。类A通过接口Interface1依赖（使用）类B，使用类B中的fun1、fun2、fun3方法； 类C通过接口Interface1依赖（使用）类D，使用类D中的fun1、fun4、fun5方法。</p>
</blockquote>
<ul>
<li>
<p>没有使用接口隔离原则的</p>
<p><img src="@source/tang/java/images/设计模式/image-20211227134632163.png" alt="image-20211227134632163"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>principle<span class="token punctuation">.</span>segregation</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Segregation1</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * A类通过接口Interface1依赖（使用）B类，但是只会拥戴1,2,3方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>h

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend2</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend3</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend4</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend5</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br></div></div></li>
<li>
<p>使用了接口隔离原则之后</p>
<p>按照隔离接口原则应该这样处理：</p>
<p>将Interface1</p>
<p><img src="@source/tang/java/images/设计模式/image-20211227134217772.png" alt="image-20211227134217772"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>principle<span class="token punctuation">.</span>segregation<span class="token punctuation">.</span>improve</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Segregation1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">depend2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a<span class="token punctuation">.</span><span class="token function">depend3</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">C</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">depend4</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">depend5</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Interface2</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Interface3</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span><span class="token punctuation">,</span> <span class="token class-name">Interface2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"B 实现了 fun3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span><span class="token punctuation">,</span> <span class="token class-name">Interface3</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"D 实现了 fun5"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * A类通过接口Interface1、Interface2依赖（使用）B类，但是只会拥戴1,2,3方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend2</span><span class="token punctuation">(</span><span class="token class-name">Interface2</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend3</span><span class="token punctuation">(</span><span class="token class-name">Interface2</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * C类通过接口Interface1、Interface3依赖（使用）D类，但是只会拥戴1,4,5方法
 */</span>
<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend4</span><span class="token punctuation">(</span><span class="token class-name">Interface3</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend5</span><span class="token punctuation">(</span><span class="token class-name">Interface3</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token punctuation">.</span><span class="token function">fun5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div></li>
</ul>
<h2 id="_1-3-依赖倒转原则" tabindex="-1"><a class="header-anchor" href="#_1-3-依赖倒转原则" aria-hidden="true">#</a> 1.3 依赖倒转原则</h2>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li><strong>高层模块不应该依赖低层模块，二者都应该依赖其抽象</strong></li>
<li><strong>抽象不应该依赖细节，细节应该依赖抽象</strong></li>
<li>==<strong>依赖倒转的中心思想</strong>：面向接口编程==</li>
<li><strong>依赖倒转原则的设计理念</strong>：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构比以细节为基础搭建的架构要稳的多。在java中，抽象指的是接口或抽象类，细节就是具体的实现类。</li>
<li><strong>使用接口或抽象类的目的</strong>是制定好规范，而不设计任何具体操作，把展现细节的任务交给他们的实现类。</li>
<li><strong>变量的声明类型尽量是抽象类或接口</strong>。这样我们的变量引用和实际对象间，就存在一个缓冲层，有利于程序的扩展和优化。</li>
<li><strong>继承时遵循里氏替换原则</strong></li>
</ul>
<blockquote>
<p>例子：完成Person接收消息的功能</p>
</blockquote>
<ul>
<li>
<p>没有使用依赖倒转原则的</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>principle<span class="token punctuation">.</span>inversion</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependecyInversion</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Email</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"电子邮件信息： hello world"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">Email</span> email<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>email<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></li>
<li>
<p>使用了依赖倒转原则的</p>
<p>**分析：**没有使用依赖倒转原则的代码存在的问题===&gt;如果我们获取的对象是微信、短信等，则新增类，同时Person类还应该增加相应的接收方法。</p>
<p>**解决：**引入一个抽象接口IReceiver，表示接收者，使Person和IReceiver产生依赖关系，让Email、WeiXin各自实现IReceiver接口。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>principle<span class="token punctuation">.</span>inversion<span class="token punctuation">.</span>improve</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependecyInversion</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeiXin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IReceiver</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Email</span> <span class="token keyword">implements</span> <span class="token class-name">IReceiver</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"电子邮件信息： hello world"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WeiXin</span> <span class="token keyword">implements</span> <span class="token class-name">IReceiver</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"微信信息： hello world"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">IReceiver</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>receiver<span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li>
</ul>
<blockquote>
<p>依赖关系传递的三种方式</p>
</blockquote>
<ul>
<li>
<p>接口传递</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 依赖实现的3种方式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependecyInversionSupplement</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChangHong</span> changHong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangHong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 方式1. 使用接口传递依赖</span>
        <span class="token class-name">OpenAndClose</span> openAndClose <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span>changHong<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方式1.通过接口传递实现依赖</span>
<span class="token keyword">interface</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> tv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> tv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChangHong</span> <span class="token keyword">implements</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"长虹电视机，打开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li>
<li>
<p>构造方法传递</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependecyInversionSupplement</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChangHong</span> changHong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangHong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 方式2 使用接口传递依赖</span>
        <span class="token class-name">OpenAndClose</span> openAndClose <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose</span><span class="token punctuation">(</span>changHong<span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义TV属性</span>
    <span class="token keyword">public</span> <span class="token class-name">ITV</span> tv<span class="token punctuation">;</span>
    <span class="token comment">// 通过带参构造给属性赋值</span>
    <span class="token keyword">public</span> <span class="token class-name">OpenAndClose</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> tv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用属性的play()方法</span>
        tv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChangHong</span> <span class="token keyword">implements</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"长虹电视机，打开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div></li>
<li>
<p>setter方法传递</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependecyInversionSupplement</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChangHong</span> changHong <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChangHong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 方式3 使用setter方法传递依赖</span>
        <span class="token class-name">OpenAndClose</span> openAndClose <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token function">setTv</span><span class="token punctuation">(</span>changHong<span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setTv</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> tv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义ITV属性</span>
    <span class="token keyword">private</span> <span class="token class-name">ITV</span> tv<span class="token punctuation">;</span>

    <span class="token comment">// 使用set方法为ITV赋值</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTv</span><span class="token punctuation">(</span><span class="token class-name">ITV</span> tv<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用属性的play()方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChangHong</span> <span class="token keyword">implements</span> <span class="token class-name">ITV</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"长虹电视机，打开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></li>
</ul>
<h2 id="_1-4-里氏替换原则" tabindex="-1"><a class="header-anchor" href="#_1-4-里氏替换原则" aria-hidden="true">#</a> 1.4 里氏替换原则</h2>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>
<p>如果S是T的子类型，对于S类型的任意对象，使得以T定义的所有程序P在所有t1对象换成s1对象时，程序P的行为没有发生任何变化。<strong>所有引用基类的地方必须能够透明的使用子类。</strong>===&gt;<strong>对象继承的原则</strong></p>
</li>
<li>
<p>==<strong>替换的前提</strong>：面向对象的多态性==，即同一个行为具有多个不同的表现形式或者形态的能力。也可以理解为多条就是同一个接口，拥有多个不同的实现类。</p>
</li>
<li>
<p>在使用继承时，<strong>子类尽量不要重写父类方法</strong>。</p>
</li>
<li>
<p>里氏替换原则告诉我们：继承实际上让两个类耦合性增强了， 在适当的情况下，可以通过<strong>聚合</strong>、<strong>组合</strong>、<strong>依赖</strong>来解决问题。</p>
<ul>
<li>
<p>组合</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Base</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> extend <span class="token class-name">Base</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span>  <span class="token class-name">B</span> extend <span class="token class-name">Base</span><span class="token punctuation">{</span>
    <span class="token comment">// 组合</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p>聚合</p>
</li>
<li>
<p>依赖</p>
</li>
</ul>
</li>
<li>
<p>违反里氏替换原则的场景</p>
<ul>
<li>
<p>子类抛出了基类中未定义的异常</p>
<p>以JDK的集合框架为例，如果自定义一个List的派生类，如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">CustomList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>以上例子重写了get方法，抛出了<code>UnsupportedOperationException</code>异常。在JDK源码中，LIst的get方法仅会抛出<code>IndexOutOfBoundsException</code>异常（见下面代码），此时子类抛出<code>UnsupportedOperationException</code>异常并不是基类所期待的，所以该子类违反了里氏替换原则。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
     * Returns the element at the specified position in this list.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> index of the element to return
     * <span class="token keyword">@return</span> the element at the specified position in this list
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IndexOutOfBoundsException</span></span> if the index is out of range
     *         (<span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">>=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span><span class="token punctuation">}</span>)
     */</span>
    <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li>
<li>
<p>子类方法改变了基类方法的语义或者引入了副作用</p>
<p>同样，以JDK的集合框架为例，如果自定义一个List的派生类，如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">CustomList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">>=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>以上代码中，当下标&gt;list长度时，返回空而非抛出<code>IndexOutOfBoundsException</code>异常，此时子类改变了基类方法的语义。所以该子类也违反了里氏替换原则。</p>
</li>
</ul>
</li>
</ul>
<h2 id="_1-5-开闭原则" tabindex="-1"><a class="header-anchor" href="#_1-5-开闭原则" aria-hidden="true">#</a> 1.5 开闭原则</h2>
<p>==ocp： Open Close Principle==</p>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>开闭原则是编程中最基础、最重要的原则</li>
<li>一个类（软件实体）中，模块和函数应该<strong>对扩展开放</strong>（即对提供方开放），<strong>对修改关闭</strong>（即对使用方关闭），即当给类增加新的功能时，尽量不修改代码或者尽可能少修改代码。用抽象架构框架，用实现扩展细节。</li>
<li><strong>当软件需要变化时，尽量通过扩展软件实体的行为来实现改变，而不是通过修改已有的代码来实现变化</strong>。</li>
<li>编程中遵循其他原则，以及使用设计模式的目的就是遵循开闭原则。</li>
</ul>
<h2 id="_1-6-迪米特法则" tabindex="-1"><a class="header-anchor" href="#_1-6-迪米特法则" aria-hidden="true">#</a> 1.6 迪米特法则</h2>
<p>==Demeter Principle==</p>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>迪米特法则又叫<strong>最少知道原则</strong>，即一个类<strong>对自己依赖的类知道的越少越好</strong>。也就是说，对于被依赖的类不管多么复杂，都尽量将逻辑封装到类的内部。对外除了提供的public方法，不对外泄露任何消息。</li>
<li>迪米特法则还有一个更简单的定义：<strong>只与直接的朋友通信</strong></li>
<li><strong>直接的朋友</strong>：每个对象都与其他对象有耦合关系，只要两个对象之间有耦合关机，我们就说两个对象之间是<strong>朋友关系</strong>。耦合的方式（依赖、关联、组合、聚合等）。我们称出现成员变量、方法参数、方法返回值中的类为<strong>直接朋友</strong>。而出现在局部变量中的类不是直接朋友（而是陌生人）。<strong>陌生类最好不要以局部变量的形式出现在类的内部。</strong></li>
<li>核心：<strong>降低类之间的耦合</strong>，但并非完全没有依赖关系</li>
</ul>
<h2 id="_1-7-合成复用原则" tabindex="-1"><a class="header-anchor" href="#_1-7-合成复用原则" aria-hidden="true">#</a> 1.7 合成复用原则</h2>
<p>==Composite Reuse Principle==</p>
<blockquote>
<p>基本介绍</p>
</blockquote>
<p><strong>尽量使用合成/聚合的方式，而不是使用继承。</strong></p>
<h1 id="_2-uml类图" tabindex="-1"><a class="header-anchor" href="#_2-uml类图" aria-hidden="true">#</a> 2.UML类图</h1>
<h2 id="_2-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-基本介绍" aria-hidden="true">#</a> 2.1 基本介绍</h2>
<blockquote>
<p>定义</p>
</blockquote>
<p>Unified modeling language，统一建模语言，是一种用于软件系统分析和设计的语言工具，他帮助软件开发人员进行思考和记录思路的结果。</p>
<blockquote>
<p>常用符号</p>
</blockquote>
<p><img src="@source/tang/java/images/设计模式/image-20211227175645777.png" alt="image-20211227175645777"></p>
<h2 id="_2-2-uml类图的画法" tabindex="-1"><a class="header-anchor" href="#_2-2-uml类图的画法" aria-hidden="true">#</a> 2.2 UML类图的画法</h2>
<p>==类之间的关系：==</p>
<p><strong>依赖</strong>： A在类中用到了B类，则A和B类之间就存在依赖关系。可以是类的成员变量、方法的返回类型、方法接收的参数类型、方法中的局部变量。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111016993.png" alt="image-20211228111016993"></p>
<p><strong>泛化（继承）</strong>：泛化就是继承，是依赖关系的特例。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111041720.png" alt="image-20211228111041720"></p>
<p><strong>实现</strong>：类实现了接口，是依赖关系的特例。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111100399.png" alt="image-20211228111100399"></p>
<p><strong>关联</strong>：指的是类与类之间的联系，是依赖的特例。具有<strong>导航性</strong>（即双向关系或者单项关系）、<strong>多重性</strong>（一对一、一对多、多对多）</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111131977.png" alt="image-20211228111131977"></p>
<p><strong>聚合</strong>：表示整体和部分的关系，整体与部分可以分开（比如电脑中有鼠标和键盘类，但是键盘和鼠标又可以从电脑上拆下来，所以电脑与鼠标、电脑与键盘是聚合关系），是关联关系的特例。具有导航性和多重性。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111149199.png" alt="image-20211228111149199"></p>
<p><strong>组合</strong>：表示整体和部分的关系，整体与部分不可以分开（比如人中有头和四肢类，但是头和四肢不能从人上拆下来，所以人和头、人和四肢是组合关系。人有身份证，身份证可以从人身上拆下来，所以人和身份证是聚合关系）。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211228111201555.png" alt="image-20211228111201555"></p>
<blockquote>
<p>聚合与组合</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span> <span class="token comment">// 聚合</span>
    <span class="token keyword">private</span> <span class="token class-name">C</span> c  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 组合关系</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果程序中A实体中定义了对IDCard进行<strong>级联删除</strong>（即删除Person时连同IDCard一起删除），那么IDCard和Person就是组合了。</p>
<h1 id="_3-设计模式" tabindex="-1"><a class="header-anchor" href="#_3-设计模式" aria-hidden="true">#</a> 3.设计模式</h1>
<h2 id="_3-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-1-概述" aria-hidden="true">#</a> 3.1 概述</h2>
<ul>
<li>设计模式是某类问题的<strong>通用解决方案</strong>，代表了最佳实践</li>
<li>本质：提高软件的维护性、通用性、扩展性，降低软件的复杂性</li>
<li><strong>分为3种类型</strong>：
<ul>
<li><strong>创建型模式</strong>：单例模式、抽象工厂模式、原型模式、建造者模式、工厂模式</li>
<li><strong>结构性模式</strong>：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式</li>
<li><strong>行为型模式</strong>：模板方法模式、命令模式、访问者模式、迭代器模式、观察者模式、终结者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式</li>
</ul>
</li>
</ul>
<h2 id="_3-2-单例模式" tabindex="-1"><a class="header-anchor" href="#_3-2-单例模式" aria-hidden="true">#</a> 3.2 单例模式</h2>
<h3 id="_3-2-1-定义" tabindex="-1"><a class="header-anchor" href="#_3-2-1-定义" aria-hidden="true">#</a> 3.2.1 定义</h3>
<p>即采取一定的方法保证整个软件系统中，对于某个类<strong>只能存在一个对象实例</strong>，并且该类<strong>只提供一个取得该对象实例的方法</strong>（静态方法）。</p>
<h3 id="_3-2-2-实现方式" tabindex="-1"><a class="header-anchor" href="#_3-2-2-实现方式" aria-hidden="true">#</a> 3.2.2 实现方式</h3>
<p>==<strong>高亮的推荐</strong>==</p>
<ul>
<li>==饿汉式（静态常量）==</li>
<li>==饿汉式（静态代码块）==</li>
<li>懒汉式（线程不安全）</li>
<li>懒汉式（同步方法）</li>
<li>懒汉式（同步代码块）</li>
<li>==双重检查==</li>
<li>==静态内部类==</li>
<li>==枚举==</li>
</ul>
<h4 id="_3-2-2-1-饿汉式-静态常量" tabindex="-1"><a class="header-anchor" href="#_3-2-2-1-饿汉式-静态常量" aria-hidden="true">#</a> 3.2.2.1 <strong>饿汉式（静态常量）</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">HungryManType1</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.构造器私有化</span>
	<span class="token keyword">private</span> <span class="token class-name">HungryManType1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// 2.本类内部创建对象实例</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">HungryManType1</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HungryManType1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 3.公共静态方法，返回实例对象</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HungryManType1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：写法简单，在类装载的时候完成实例化，避免了线程同步问题</li>
<li>缺点：没有用到懒加载效果。如果从始至终没有用到这个实例，则会造成==内存浪费==。</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>==可用==，但是可能造成内存浪费。</p>
<h4 id="_3-2-2-2-饿汉式-静态代码块" tabindex="-1"><a class="header-anchor" href="#_3-2-2-2-饿汉式-静态代码块" aria-hidden="true">#</a> 3.2.2.2 <strong>饿汉式（静态代码块）</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">HungryManType2</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.构造器私有化</span>
	<span class="token keyword">private</span> <span class="token class-name">HungryManType2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// 2.本类内部创建对象实例</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">HungryManType2</span> instance<span class="token punctuation">;</span>

	<span class="token comment">// 3.在静态代码块中创建实例</span>
	<span class="token keyword">static</span> <span class="token punctuation">{</span>
		instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HungryManType2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 4.公共静态方法，返回实例对象</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HungryManType2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：写法简单，在类装载的时候完成实例化，避免了线程同步问题</li>
<li>缺点：没有用到懒加载效果。如果从始至终没有用到这个实例，则会造成==内存浪费==。</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>==可用==，但是可能造成内存浪费。</p>
<h4 id="_3-2-2-3-懒汉式-线程不安全" tabindex="-1"><a class="header-anchor" href="#_3-2-2-3-懒汉式-线程不安全" aria-hidden="true">#</a> 3.2.2.3 <strong>懒汉式（线程不安全）</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LazyManType1</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.本类内部创建对象实例</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">LazyManType1</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 2.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">LazyManType1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.公共静态方法，返回实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LazyManType1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyManType1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：起到了懒加载效果</li>
<li>缺点：==线程不安全，只能在单例模式下使用==</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>实际开发不要使用该方法。</p>
<h4 id="_3-2-2-4-懒汉式-同步方法" tabindex="-1"><a class="header-anchor" href="#_3-2-2-4-懒汉式-同步方法" aria-hidden="true">#</a> 3.2.2.4 <strong>懒汉式（同步方法）</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LazyManType2</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.本类内部创建对象实例</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">LazyManType2</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 2.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">LazyManType2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.公共同步静态方法，返回实例对象---加入synchronized解决线程安全问题</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">LazyManType2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyManType2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：起到了懒加载效果，线程安全</li>
<li>缺点：==方法进行同步效率太低==</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>实际开发不推荐使用。</p>
<h4 id="_3-2-2-5-懒汉式-同步代码块" tabindex="-1"><a class="header-anchor" href="#_3-2-2-5-懒汉式-同步代码块" aria-hidden="true">#</a> 3.2.2.5 <strong>懒汉式（同步代码块）</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">LazyManType3</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.本类内部创建对象实例</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">LazyManType3</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 2.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">LazyManType3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.公共同步静态代码块，返回实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LazyManType3</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">LazyManType3</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyManType3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<p>本意是优化同步方法的方式，但是实际上==并不能起到线程同步的作用==。</p>
<blockquote>
<p>结论</p>
</blockquote>
<p>实际开发不能使用。</p>
<h4 id="_3-2-2-6-双重检查" tabindex="-1"><a class="header-anchor" href="#_3-2-2-6-双重检查" aria-hidden="true">#</a> 3.2.2.6 <strong>双重检查</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">DoubleCheckType</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.本类内部创建对象实例</span>
    <span class="token comment">// volatile保证变量如果有修改，能够立刻刷到内存中，一定程度上还能达到同步的效果</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">DoubleCheckType</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 2.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">DoubleCheckType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 3.公共方法，加入双重检查代码，解决线程安全问题，返回实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">DoubleCheckType</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">LazyManType3</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoubleCheckType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：线程安全，延时加载，效率高</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>实际开发==推荐使用==。</p>
<h4 id="_3-2-2-7-静态内部类" tabindex="-1"><a class="header-anchor" href="#_3-2-2-7-静态内部类" aria-hidden="true">#</a> 3.2.2.7 <strong>静态内部类</strong></h4>
<blockquote>
<p>静态内部类的特点</p>
</blockquote>
<ul>
<li>外部类装载的时候，静态内部类并不一定会立即被装载</li>
<li>静态内部类只会在第一次加载类的时候初始化</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">StaticInnerClassType</span><span class="token punctuation">{</span>
    <span class="token comment">// 1.构造器私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">StaticInnerClassType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 2.静态内部类，以及他的静态属性</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonInstance</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">StaticInnerClassType</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticInnerClassType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3.公共方法，加入双重检查代码，解决线程安全问题，返回实例对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">StaticInnerClassType</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonInstance</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：线程安全，利用静态内部类特点实现延迟加载，效率高</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>借助底层JVM类的装载机制保证初始化时只有一个实例，实际开发==推荐使用==。</p>
<h4 id="_3-2-2-8-枚举" tabindex="-1"><a class="header-anchor" href="#_3-2-2-8-枚举" aria-hidden="true">#</a> 3.2.2.8 <strong>枚举</strong></h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">EnumType</span><span class="token punctuation">{</span>
    INSTANCE<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sayOk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ok~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote>
<p>分析</p>
</blockquote>
<ul>
<li>优点：线程安全，防止反序列化重新创建新的对象</li>
</ul>
<blockquote>
<p>结论</p>
</blockquote>
<p>实际开发==推荐使用==。</p>
<h3 id="_3-2-3-源码单例举例" tabindex="-1"><a class="header-anchor" href="#_3-2-3-源码单例举例" aria-hidden="true">#</a> 3.2.3 源码单例举例</h3>
<p><img src="@source/tang/java/images/设计模式/image-20211228142017753.png" alt="image-20211228142017753"></p>
<h3 id="_3-2-4-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-4-使用场景" aria-hidden="true">#</a> 3.2.4 使用场景</h3>
<ul>
<li>需要频繁的创建和销毁的对象</li>
<li>创建对象时耗时过多或者耗费资源过多但又经常用到的对象</li>
<li>工具类对象</li>
<li>频繁访问数据库或者文件的对象（如数据源、session工厂等）</li>
</ul>
<h2 id="_3-3-工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-3-工厂模式" aria-hidden="true">#</a> 3.3 工厂模式</h2>
<h3 id="_3-3-1-简单工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-3-1-简单工厂模式" aria-hidden="true">#</a> 3.3.1 简单工厂模式</h3>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>
<p>属于创建型模式，是工厂模式的一种。简单工厂模式是<strong>由一个工厂对象决定创建出哪一种产品类的实例</strong>。</p>
</li>
<li>
<p>本质：定义了一个创建对象的==类==，由这个类来<strong>封装实例化对象的行为</strong>。</p>
</li>
<li>
<p>使用场景：当需要大量的创建某类或者某批对象时，就会用到工厂模式。</p>
</li>
<li>
<p>简单工厂模式也叫静态工厂模式。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211229173735944.png" alt="image-20211229173735944"></p>
</li>
</ul>
<h3 id="_3-3-2-工厂方法模式" tabindex="-1"><a class="header-anchor" href="#_3-3-2-工厂方法模式" aria-hidden="true">#</a> 3.3.2 工厂方法模式</h3>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>
<p>本质：定义了一个创建对象的==抽象方法==，由子类决定要实例化的类。工厂方法模式<strong>将对象的实例化推迟到子类</strong>。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211229175126825.png" alt="image-20211229175126825"></p>
</li>
</ul>
<h3 id="_3-3-3-抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-3-3-抽象工厂模式" aria-hidden="true">#</a> 3.3.3 抽象工厂模式</h3>
<blockquote>
<p>基本介绍</p>
</blockquote>
<ul>
<li>
<p>本质：定义了一个==interface==，用于创建或有依赖关系对象的对象簇，无需指明具体的类。</p>
</li>
<li>
<p>抽象工厂模式<strong>可以将简单工厂模式和工厂方法模式进行整合</strong>。</p>
</li>
<li>
<p>从设计层面看，抽象工厂模式就随对简单工厂模式的进一步抽象----将工厂抽象成两层，即抽象工厂和具体实现的工厂子类。程序员可以根据创建对象类型使用对应的工厂子类，如此便将单个的简单工厂类变成了<strong>工厂簇</strong>，更利于代码的维护和扩展。</p>
<p><img src="@source/tang/java/images/设计模式/image-20211229164242551.png" alt="image-20211229164242551">0</p>
</li>
</ul>
<h3 id="_3-3-4-源码工厂模式举例" tabindex="-1"><a class="header-anchor" href="#_3-3-4-源码工厂模式举例" aria-hidden="true">#</a> 3.3.4 源码工厂模式举例</h3>
<p><img src="@source/tang/java/images/设计模式/image-20211229171630731.png" alt="image-20211229171630731"></p>
<h3 id="_3-3-5-小结" tabindex="-1"><a class="header-anchor" href="#_3-3-5-小结" aria-hidden="true">#</a> 3.3.5 小结</h3>
<blockquote>
<p>意义</p>
</blockquote>
<p>将实例化对象的代码提取出来，放到一个类中统一管理和维护，以达到和主项目依赖关系的解耦，从而提高项目的可扩展性和可维护性。</p>
<blockquote>
<p>三种工程模式</p>
</blockquote>
<ul>
<li>简单工厂模式</li>
<li>工厂方法模式</li>
<li>抽象工厂模式</li>
</ul>
<blockquote>
<p>设计模式的<strong>依赖抽象</strong>原则</p>
</blockquote>
<ul>
<li>创建对象实例时，不要直接new类，而是把这个new类的动作放在一个工厂的方法中，并返回。</li>
<li>不要让类继承具体类，而应继承抽象类或者实现接口。</li>
<li>不要覆盖类中已经实现的方法。</li>
</ul>
<h2 id="_3-4-原型模式" tabindex="-1"><a class="header-anchor" href="#_3-4-原型模式" aria-hidden="true">#</a> 3.4 原型模式</h2>
<h3 id="_3-4-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_3-4-1-基本介绍" aria-hidden="true">#</a> 3.4.1 基本介绍</h3>
<ul>
<li><strong>定义</strong>：用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象</li>
<li>是一种==创建型设计模式==，允许一个对象再创建另外一个可定制的对象，无需知道创建细节</li>
<li><strong>工作原理</strong>：通过将一个原型对象传给那个要发起创建的对象，这个要发起创建的对象通过请求原型对象拷贝他们自己来实现创建，即==对象.clone()==</li>
<li><strong>形象理解</strong>：孙悟空拔出猴毛，变出其他孙大圣</li>
</ul>
<h3 id="_3-4-2-克隆羊例子" tabindex="-1"><a class="header-anchor" href="#_3-4-2-克隆羊例子" aria-hidden="true">#</a> 3.4.2 克隆羊例子</h3>
<p>创建5只属性一样的羊。</p>
<blockquote>
<p>关键</p>
</blockquote>
<p>Sheep类实现Cloneable接口，并重写clone()。客户端创建完第一只羊之后，调用clone()方法完成其他4只羊的创建。</p>
<p>==Sheep类：==</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>prototype</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sheep</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> color<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Sheep</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Shape{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">", color='"</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Sheep</span> shape <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            shape <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> shape<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>==Client类：==</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>learn<span class="token punctuation">.</span>prototype</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Sheep</span> sheep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sheep</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"白色"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sheep</span> sheep2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">)</span>sheep<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sheep</span> sheep3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">)</span>sheep<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sheep</span> sheep4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">)</span>sheep<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sheep</span> sheep5 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sheep</span><span class="token punctuation">)</span>sheep<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sheep5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_3-4-3-源码原型模式举例" tabindex="-1"><a class="header-anchor" href="#_3-4-3-源码原型模式举例" aria-hidden="true">#</a> 3.4.3 源码原型模式举例</h3>
<p>==Spring使用xml创建bean实例，可以指定原型模式==</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>monster<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.tth.learning.springsource.Monster<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prototype<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/java/images/设计模式/image-20211230102634432.png" alt="image-20211230102634432"></p>
<h3 id="_3-4-4-浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#_3-4-4-浅拷贝和深拷贝" aria-hidden="true">#</a> 3.4.4 浅拷贝和深拷贝</h3>
<blockquote>
<p>浅拷贝</p>
</blockquote>
<ul>
<li>基本数据类型：值传递，即将该属性值复制一份给新的对象</li>
<li>引用数据类型（数组、对象等）：引用传递，即指向同一个内存地址</li>
<li>浅拷贝是使用默认的==clone()==方法来实现的</li>
</ul>
<blockquote>
<p>深拷贝</p>
</blockquote>
<ul>
<li>
<p>深拷贝实现方式：==重写clone()==或者通过==对象实例化**(推荐)**==实现深拷贝</p>
<blockquote>
<p>通过重写clone()方法实现深拷贝</p>
</blockquote>
<p><img src="@source/tang/java/images/设计模式/image-20211230144621521.png" alt="image-20211230144621521"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// Teacher类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> major<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> major<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>major <span class="token operator">=</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMajor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMajor</span><span class="token punctuation">(</span><span class="token class-name">String</span> major<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>major <span class="token operator">=</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Student类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Teacher</span> teacher<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> teacherName<span class="token punctuation">,</span> <span class="token class-name">String</span> teacherMajor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span>teacherName<span class="token punctuation">,</span> teacherMajor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方式一：重写clone方法，实现深拷贝</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 完成对基本类型以及String类型属性的克隆</span>
        student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 借助引用对象的clone()方法，完成对引用对象的克隆</span>
        student<span class="token punctuation">.</span><span class="token function">setTeacher</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Teacher</span><span class="token punctuation">)</span> teacher<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> student<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Teacher</span> <span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> teacher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTeacher</span><span class="token punctuation">(</span><span class="token class-name">Teacher</span> teacher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"明世隐"</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token string">"诸葛亮"</span><span class="token punctuation">,</span> <span class="token string">"数学"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span>s1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s1="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s1.name="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s1.teacher="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s2="</span><span class="token operator">+</span>s2<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s2.name="</span><span class="token operator">+</span>s2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s2.teacher="</span><span class="token operator">+</span>s2<span class="token punctuation">.</span><span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br></div></div><blockquote>
<p>通过对象的序列化实现深拷贝</p>
</blockquote>
<p><img src="@source/tang/java/images/设计模式/image-20211230145041397.png" alt="image-20211230145041397"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// Teacher类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> major<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> major<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>major <span class="token operator">=</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMajor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMajor</span><span class="token punctuation">(</span><span class="token class-name">String</span> major<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>major <span class="token operator">=</span> major<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Student类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Teacher</span> teacher<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">String</span> teacherName<span class="token punctuation">,</span> <span class="token class-name">String</span> teacherMajor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span>teacherName<span class="token punctuation">,</span> teacherMajor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 方式2：通过对象的序列化实现深拷贝</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建对象流</span>
        <span class="token class-name">ByteArrayOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ByteArrayInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 序列化</span>
            bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建输出流</span>
            oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前这个对象以对象流的方式输出</span>
            <span class="token comment">// 反序列化</span>
            bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建输入流</span>
            ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>bis<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span>ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> student<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 关闭流</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Teacher</span> <span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> teacher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTeacher</span><span class="token punctuation">(</span><span class="token class-name">Teacher</span> teacher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>teacher <span class="token operator">=</span> teacher<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"明世隐"</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token string">"诸葛亮"</span><span class="token punctuation">,</span> <span class="token string">"数学"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> s3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span>s1<span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s1="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s1.name="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s1.teacher="</span><span class="token operator">+</span>s1<span class="token punctuation">.</span><span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"s3="</span><span class="token operator">+</span>s3<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s3.name="</span><span class="token operator">+</span>s3<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" s3.teacher="</span><span class="token operator">+</span>s3<span class="token punctuation">.</span><span class="token function">getTeacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br></div></div></li>
</ul>
<h3 id="_3-4-5-小结" tabindex="-1"><a class="header-anchor" href="#_3-4-5-小结" aria-hidden="true">#</a> 3.4.5 小结</h3>
<blockquote>
<p>原型模式的注意事项和优缺点</p>
</blockquote>
<ul>
<li>当创建的对象比较复杂时，可以利用原型模式<strong>简化对象的创建过程</strong>，同时也能<strong>提高效率</strong></li>
<li>不用重新初始化对象，而是动态的获取对象运行时的状态</li>
<li>如果原式对象的属性增加或者减少，其他克隆对象的也会相应变化，无需修改代码</li>
<li>缺点：需要为每一个类配备一个克隆方法，这对于全新的类来说不是很难，但对已有的类改造时，需要修改源代码，违背了ocp原则</li>
</ul>
<h2 id="_3-5-建造者模式" tabindex="-1"><a class="header-anchor" href="#_3-5-建造者模式" aria-hidden="true">#</a> 3.5 建造者模式</h2>
<h3 id="_3-5-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_3-5-1-基本介绍" aria-hidden="true">#</a> 3.5.1 基本介绍</h3>
<ul>
<li>本质：将产品和产品建造过程解耦</li>
<li>是一种==创建型设计模式==。它可以将复杂对象的建造过程抽象出来，使这个抽象过程的不同实现方法可以构造出不同属性的对象</li>
<li>建造者模式是一步一步的创建一个复杂对象。它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构造过程</li>
<li>建造者的==四个角色==
<ul>
<li><strong>Product(产品)</strong>：产品对象</li>
<li><strong>Builder(抽象建造者)</strong>：穿件一个Product对象各个部件指定的接口或抽象类</li>
<li><strong>ConcreteBuilder(具体建造者)</strong>：实现接口或抽象类，构建和装配各个组件</li>
<li><strong>Director(指挥者)</strong>：构建一个使用Builder接口的对象。==作用是==<strong>①</strong>隔离客户与对象的生产过程<strong>②</strong>负责控制产品对象的生产过程。</li>
</ul>
</li>
</ul>
<h3 id="_3-5-2-盖房子例子" tabindex="-1"><a class="header-anchor" href="#_3-5-2-盖房子例子" aria-hidden="true">#</a> 3.5.2 盖房子例子</h3>
<p><img src="@source/tang/java/images/设计模式/image-20211231154953574.png" alt="image-20211231154953574"></p>
<h3 id="_3-5-3-小结" tabindex="-1"><a class="header-anchor" href="#_3-5-3-小结" aria-hidden="true">#</a> 3.5.3 小结</h3>
<blockquote>
<p>建造者模式的注意事项和优缺点</p>
</blockquote>
<ul>
<li>客户端不比知道产品内部的<strong>组成</strong>细节，将产品本身与产品床创建过程解耦，使得相同的创建过程可以创建不同的产品对象。</li>
<li>每一个具体建造者都是相对独立的，因此可以很方便的替换具体建造者或者增加新的建造者，<strong>用户使用不同的具体建造者即可得到不同的对象产品</strong>。</li>
<li><strong>可以更加惊喜的控制产品的创建过程</strong>。将复杂产品的创建步骤分解在不同的方法中，是的创建过程更加清晰，也更方便使用程序来控制创建过程。</li>
<li><strong>增加新的具体建造者无须修改原有类库代码</strong>，符合<strong>开闭原则</strong></li>
<li>使用建造者模式创建的产品一般具有较多的共同点，其组成部分相似。<strong>如果产品之间的差异性很大，则不适合使用建造者模式</strong>。</li>
<li>==抽象工厂模式VS建造者模式==
<ul>
<li><strong>抽象工厂模式</strong>实现对产品家族的创建，一个产品家族是这样一系列的产品：具有不同分类纬度的产品组合，采用抽象工厂模式不需要关系构建过程，之关系什么产品由什么工厂生产即可。抽象工厂模式是一个函数生成一个对象。</li>
<li><strong>建造者模式</strong>是把对象的创建分散开来，不同的方法创建对象不同的组成部分，最终将所有函数结合起来才能生成一个对象。</li>
</ul>
</li>
</ul>
<h2 id="_3-6-适配器模式" tabindex="-1"><a class="header-anchor" href="#_3-6-适配器模式" aria-hidden="true">#</a> 3.6 适配器模式</h2>
<h3 id="_3-6-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_3-6-1-基本介绍" aria-hidden="true">#</a> 3.6.1 基本介绍</h3>
<ul>
<li><strong>定义</strong>：适配器模式将某个类的接口转换成客户端期望的另一个接口表示。</li>
<li><strong>目的</strong>：兼容。让原本因接口不匹配不能一起工作的两个类可以协同工作。</li>
<li>是一种==结构型设计模式==</li>
<li><strong>分类</strong>：
<ul>
<li>类适配器模式</li>
<li>对象适配器模式</li>
<li>接口适配器模式</li>
</ul>
</li>
</ul>
<h3 id="_3-6-2-类适配器模式" tabindex="-1"><a class="header-anchor" href="#_3-6-2-类适配器模式" aria-hidden="true">#</a> 3.6.2 类适配器模式</h3>
<ul>
<li><strong>定义：</strong>==是一个类(Adapter)，通过<strong>继承被适配类</strong>，实现目标类的接口，完成被**适配类(src)-&gt;目标类(dst)**的实现。==</li>
<li><strong>优缺点</strong>
<ul>
<li><code>缺点</code>：由于java是单继承，类适配器需要继承src类，所以det必须是接口，有一定的局限性</li>
<li><code>缺点</code>：src类的方法在Adapter中会暴露出来，也增加了使用的成本</li>
<li><code>优点</code>：由于继承了src类，所以它可以根据需求重写src类，使得Adapter的灵活性增强了</li>
</ul>
</li>
</ul>
<h3 id="_3-6-3-对象适配器模式" tabindex="-1"><a class="header-anchor" href="#_3-6-3-对象适配器模式" aria-hidden="true">#</a> 3.6.3 对象适配器模式</h3>
<ul>
<li><strong>定义：</strong>==基本思路和类的适配器模式相同，只是将Adapter类作修改，不是继承src类，而是<strong>持有src类的实例</strong>，以解决兼容性问题。即：持有src类，实现dst接口（或继承dst类），完成src-&gt;dst的适配。==</li>
<li>根据“合成复用原则”，在系统中尽量使用关联关系来替代继承类。</li>
<li><strong>对象适配器模式是适配器模式中最常用的一种</strong>。</li>
<li><strong>优缺点：</strong>
<ul>
<li><code>优点：</code>对象适配器是对类适配器的一种升级。根据合成复用原则，使用组合替代继承，它解决了类适配器必须继承src的局限性问题，也不再要求dst必须是接口。</li>
<li><code>缺点：</code>使用成本更低，更灵活。</li>
</ul>
</li>
</ul>
<h3 id="_3-6-4-接口适配器模式" tabindex="-1"><a class="header-anchor" href="#_3-6-4-接口适配器模式" aria-hidden="true">#</a> 3.6.4 接口适配器模式</h3>
<ul>
<li>**定义：**当不需要全部实现接口提供的方法时，可以先设计一个==抽象类==实现接口，并==为该接口中每个方法提供一个默认实现（空方法）==，那么==抽象类的子类可有选择的覆盖父类的某些方法来实现需求==。</li>
<li>**使用场景：**适用于一个接口不想使用其所有方法的情况。</li>
</ul>
<h3 id="_3-6-5-源码适配器模式举例" tabindex="-1"><a class="header-anchor" href="#_3-6-5-源码适配器模式举例" aria-hidden="true">#</a> 3.6.5 源码适配器模式举例</h3>
<p>适配器模式在SpringMVC中的应用。</p>
<p><img src="@source/tang/java/images/设计模式/image-20220104150119181.png" alt="image-20220104150119181"></p>
<blockquote>
<p>例子：手写简单SpringMVC DispatcherServlet.doDispatch()方法</p>
</blockquote>
<p><img src="@source/tang/java/images/设计模式/image-20220104160107383.png" alt="image-20220104160107383"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// ========================Controller类============================================</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>adapter<span class="token punctuation">.</span>springmvcadapter</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HttpController</span> <span class="token keyword">implements</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doHttpController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HttpController..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleController</span> <span class="token keyword">implements</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSimpleController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"SimpleController..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AnnotationController</span> <span class="token keyword">implements</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAnnotationController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"AnnotationController..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ========================HandlerAdapter类============================================</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HandlerAdapter</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断当前handler对应的类是否是指定的HandlerAdapter类</span>
    <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 具体HandlerAdapter对象的处理方法</span>
    <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HttpHandlerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 判断当前handler对应的类是否HttpHandlerAdapter类
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">HttpController</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行HttpController对应的方法
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此处将handler强转为HttpController类，并调用HttpController类中的doHttpController()</span>
        <span class="token comment">// 因为handle()方法是在supports()方法返回为true的前提下调用的，所以强转肯定是成功的</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpController</span><span class="token punctuation">)</span>handler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doHttpController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleHandlerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerAdapter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 判断当前handler对应的类是否SimpleHandlerAdapter类
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">SimpleController</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行SimpleController对应的方法
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此处将handler强转为SimpleController类，并调用SimpleController类中的doSimpleController()</span>
        <span class="token comment">// 因为handle()方法是在supports()方法返回为true的前提下调用的，所以强转肯定是成功的</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">SimpleController</span><span class="token punctuation">)</span>handler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doSimpleController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AnnotationHandlerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerAdapter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 判断当前handler对应的类是否AnnotationHandlerAdapter类
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">AnnotationController</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 执行AnnotationController对应的方法
     * <span class="token keyword">@param</span> <span class="token parameter">handler</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此处将handler强转为AnnotationController类，并调用AnnotationController类中的doAnnotationController()</span>
        <span class="token comment">// 因为handle()方法是在supports()方法返回为true的前提下调用的，所以强转肯定是成功的</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">AnnotationController</span><span class="token punctuation">)</span>handler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doAnnotationController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ========================DispatcherServlet类============================================</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DispatcherServlet</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HandlerAdapter</span><span class="token punctuation">></span></span> handlerAdapters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DispatcherServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        handlerAdapters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AnnotationHandlerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handlerAdapters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HttpHandlerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handlerAdapters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleHandlerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 模拟SpringMVC从request中获取handler对象</span>
        <span class="token class-name">AnnotationController</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 得到对应的适配器</span>
        <span class="token class-name">HandlerAdapter</span> adapter <span class="token operator">=</span> <span class="token function">getHandler</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通过适配器执行对应的controller方法</span>
        adapter<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">HandlerAdapter</span> <span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token class-name">Controller</span> controller<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">HandlerAdapter</span> adapter<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlerAdapters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>adapter<span class="token punctuation">.</span><span class="token function">supports</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> adapter<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ========================测试入口============================================</span>
        <span class="token keyword">new</span> <span class="token class-name">DispatcherServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br></div></div><h3 id="_3-6-6-小结" tabindex="-1"><a class="header-anchor" href="#_3-6-6-小结" aria-hidden="true">#</a> 3.6.6 小结</h3>
<ul>
<li>按照<strong>src是以怎样的形式转给到Adapter</strong>被分为3种不同的适配器：
<ul>
<li><strong>类适配器</strong>：以类给到，在Adapter里，<strong>将src当做类</strong>，继承</li>
<li><strong>对象适配器</strong>：以对象给到，在Adapter里，<strong>将src作为一个对象</strong>，持有</li>
<li><strong>接口适配器</strong>：以接口给到，在Adapter里，<strong>将src作为一个接口</strong>，实现</li>
</ul>
</li>
<li>Adapter模式==最大的作用==是将原本不兼容的接口融合在一起工作</li>
</ul>
<h2 id="_3-7-桥接模式" tabindex="-1"><a class="header-anchor" href="#_3-7-桥接模式" aria-hidden="true">#</a> 3.7 桥接模式</h2>
<h3 id="_3-7-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_3-7-1-基本介绍" aria-hidden="true">#</a> 3.7.1 基本介绍</h3>
<ul>
<li><strong>定义：</strong> 将实现与抽象放在两个不同的类层次中，使两个层次可以独立改变。</li>
<li>是一种==结构型设计模式==</li>
<li>基于<strong>类的最小设计原则</strong>，通过使用封装、聚合、继承，让不同的类承担不同的职责。</li>
<li>**主要特点：**把抽象和行为实现分离开来，从而保持各部分的独立性以及应对他们的功能扩展。</li>
</ul>
<h3 id="_3-7-2-原理图-类图" tabindex="-1"><a class="header-anchor" href="#_3-7-2-原理图-类图" aria-hidden="true">#</a> 3.7.2 原理图（类图）</h3>
<p><img src="@source/tang/java/images/设计模式/image-20220105111056369.png" alt="image-20220105111056369"></p>
<h3 id="_3-7-3-源码桥接模式举例" tabindex="-1"><a class="header-anchor" href="#_3-7-3-源码桥接模式举例" aria-hidden="true">#</a> 3.7.3 源码桥接模式举例</h3>
<p>JDBC源码</p>
<h3 id="_3-7-4-小结" tabindex="-1"><a class="header-anchor" href="#_3-7-4-小结" aria-hidden="true">#</a> 3.7.4 小结</h3>
<blockquote>
<p>桥接模式的优缺点</p>
</blockquote>
<ul>
<li><code>优点</code>实现了抽象和实现部分的分离，极大提供了系统的灵活性，让抽象部分和实现部分独立开来，有助于系统进行分层设计，从而产生更好的结构化系统。</li>
<li><code>优点</code>对于系统的高层部分，只需要知道抽象部分和实现接口即可，其他交于具体业务来完成。</li>
<li><code>优点</code>桥接模式替代多层继承，可以减少子类个数，降低系统的管理和维护成本。</li>
<li><code>缺点</code>桥接模式的引入增加了系统的理解和设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计和编程。</li>
<li><code>缺点</code>桥接模式要求正确识别出系统中两个独立变化的维度，因此使用范围具有一定的局限性。</li>
</ul>
<blockquote>
<p>桥接模式应用场景</p>
</blockquote>
<p>==桥接模式尤为使用那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统==</p>
<p><strong>桥接模式应用场景举例：</strong></p>
<ul>
<li>JDBC驱动程序</li>
<li>银行转账系统
<ul>
<li>转账分类：网上转账、柜台转账、ATM转账 <code>抽象层</code></li>
<li>转账用户类型：普通用户、银卡用户、金卡用户... <code>实现层</code></li>
</ul>
</li>
<li>消息管理
<ul>
<li>消息类型：即时消息、延时消息 <code>抽象层</code></li>
<li>消息分类：手机短信、邮件消息、QQ消息... <code>实现层</code></li>
</ul>
</li>
</ul>
<h2 id="_3-8-装饰者模式" tabindex="-1"><a class="header-anchor" href="#_3-8-装饰者模式" aria-hidden="true">#</a> 3.8 装饰者模式</h2>
<h3 id="_3-8-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_3-8-1-基本介绍" aria-hidden="true">#</a> 3.8.1 基本介绍</h3>
<ul>
<li><strong>定义：</strong>==动态的将新的功能附加到对象上。==在对象功能扩展方面，比继承更有弹性。</li>
<li>体现了==开闭原则（ocp）==</li>
</ul>
<h3 id="_3-8-2-原理图" tabindex="-1"><a class="header-anchor" href="#_3-8-2-原理图" aria-hidden="true">#</a> 3.8.2 原理图</h3>
<h3 id="_3-8-3-星巴克点餐例子" tabindex="-1"><a class="header-anchor" href="#_3-8-3-星巴克点餐例子" aria-hidden="true">#</a> 3.8.3 星巴克点餐例子</h3>
<p>咖啡分为</p>
<h3 id="_3-8-4源码装饰者模式" tabindex="-1"><a class="header-anchor" href="#_3-8-4源码装饰者模式" aria-hidden="true">#</a> 3.8.4源码装饰者模式</h3>
<p>==Java的IO结构中，FilterInputStream就是一个装饰者。==</p>
</template>
