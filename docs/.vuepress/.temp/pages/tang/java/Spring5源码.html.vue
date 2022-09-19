<template><h1 id="_1、spring框架概念" tabindex="-1"><a class="header-anchor" href="#_1、spring框架概念" aria-hidden="true">#</a> 1、Spring框架概念</h1>
<p><img src="@source/tang/java/images/Spring5源码/image-20211224162008582.png" alt="image-20211224162008582"></p>
<h1 id="_2、ioc概念与原理" tabindex="-1"><a class="header-anchor" href="#_2、ioc概念与原理" aria-hidden="true">#</a> 2、IOC概念与原理</h1>
<h2 id="_2-1-什么是ioc" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是ioc" aria-hidden="true">#</a> 2.1 什么是IOC</h2>
<ul>
<li>IOC即控制反转，把对象创建和对象之间的调用过程，交给Spring进行挂你</li>
<li>使用IOC的目的：降低耦合度</li>
</ul>
<h2 id="_2-2-ioc底层原理" tabindex="-1"><a class="header-anchor" href="#_2-2-ioc底层原理" aria-hidden="true">#</a> 2.2 IOC底层原理</h2>
<p>IOC底层主要用到xml解析、工厂模式、反射来实现</p>
<h2 id="_2-3ioc接口" tabindex="-1"><a class="header-anchor" href="#_2-3ioc接口" aria-hidden="true">#</a> 2.3IOC接口</h2>
<ul>
<li>
<p>IOC思想基于IOC容器完成，IOC容器底层就是对象工厂</p>
</li>
<li>
<p>Spring为IOC容器的实现提供了两种方式（即两个接口）：</p>
<ul>
<li>
<p>BeanFactory：是Spring框架最核心的接口，提供了高级IOC的配置机制。一般来说，BeanFactory被称为IOC容器。</p>
</li>
<li>
<p>ApplicationContext：建立在BeanFactory基础之上，提供了更多面向应用的功能。他提供了国际化支持和框架事件体系，更易于创建实际应用。一般来说，ApplicationContext被称为应用上下文，有时也直接称为Spring容器。</p>
<blockquote>
<p>总结</p>
</blockquote>
<p>BeanFactory是Spring框架的基础设施， 面向Spring本身；ApplicationContext面向使用Spring框架的开发者，几乎所有的应用场合都可以直接使用ApplicationContext而非BeanFactory。此外，BeanFactory创建对象过程中（默认情况下），在加载配置文件这一步骤，是不会创建对象的，只有在获取对象/使用对象的时候才去创建；但是ApplicationContext是在加载配置文件的时候就会把在配置文件中的对象创建出来。</p>
</li>
</ul>
</li>
</ul>
<h2 id="_2-4-ioc操作bean" tabindex="-1"><a class="header-anchor" href="#_2-4-ioc操作bean" aria-hidden="true">#</a> 2.4 IOC操作Bean</h2>
<ul>
<li>
<p>什么是Bean管理？</p>
<p>答：Bean管理指的是两个操作：创建对象和注入属性</p>
</li>
<li>
<p>Bean管理操作的两种实现方式？</p>
<p>答：基于xml配置文件方式实现、基于注解方式实现</p>
</li>
<li>
<p>什么是DI？</p>
<p>答：DI即依赖注入，就是注入属性。是在使用xml创建对象时，给属性赋值用到的。DI是IOC的一个具体体现。在Spring中支持两种注入方式，一个是使用set方法注入，另一个是使用有参构造注入。</p>
</li>
</ul>
<h2 id="_2-5xml管理bean" tabindex="-1"><a class="header-anchor" href="#_2-5xml管理bean" aria-hidden="true">#</a> 2.5XML管理Bean</h2>
<h3 id="_2-5-1-set方法注入属性-字符串-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-5-1-set方法注入属性-字符串-基本数据类型" aria-hidden="true">#</a> 2.5.1 set方法注入属性（字符串/基本数据类型）</h3>
<p><img src="images/Spring5源码/image-20211221170031482.png" alt="image-20211221170031482">
<img src="images/Spring5源码/image-20211221174721467.png" alt="image-20211221174721467"></p>
<h3 id="_2-5-2-有参构造注入属性-字符串-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-5-2-有参构造注入属性-字符串-基本数据类型" aria-hidden="true">#</a> 2.5.2 有参构造注入属性（字符串/基本数据类型）<img src="images/Spring5源码/image-20211221174657603.png" alt="image-20211221174657603"></h3>
<p><img src="images/Spring5源码/image-20211221175511923.png" alt="image-20211221175511923"></p>
<h3 id="_2-5-3-p名称空间注入-字符串-基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-5-3-p名称空间注入-字符串-基本数据类型" aria-hidden="true">#</a> 2.5.3 p名称空间注入（字符串/基本数据类型）</h3>
<p>可以简化基于xml配置方式。</p>
<p>==其实底层还是基于set方法实现的。==</p>
<p>Step1.添加p名称空间</p>
<p><img src="images/Spring5源码/image-20211224135021317.png" alt="image-20211224135021317"></p>
<p>Step2.在bean标签中进行属性注入</p>
<p><img src="images/Spring5源码/image-20211224135153505.png" alt="image-20211224135153505"></p>
<h3 id="_2-5-4-xml注入其他类型属性" tabindex="-1"><a class="header-anchor" href="#_2-5-4-xml注入其他类型属性" aria-hidden="true">#</a> 2.5.4 xml注入其他类型属性</h3>
<h4 id="_2-5-4-1-注入null" tabindex="-1"><a class="header-anchor" href="#_2-5-4-1-注入null" aria-hidden="true">#</a> 2.5.4.1 注入null</h4>
<p><img src="images/Spring5源码/image-20211224135756396.png" alt="image-20211224135756396"></p>
<h4 id="_2-5-4-2-属性值包含特殊符号" tabindex="-1"><a class="header-anchor" href="#_2-5-4-2-属性值包含特殊符号" aria-hidden="true">#</a> 2.5.4.2 属性值包含特殊符号</h4>
<p><img src="images/Spring5源码/image-20211224140113926.png" alt="image-20211224140113926"></p>
<h4 id="_2-5-4-3-注入外部bean" tabindex="-1"><a class="header-anchor" href="#_2-5-4-3-注入外部bean" aria-hidden="true">#</a> 2.5.4.3 注入外部bean</h4>
<p>比如说serviceImpl调用dao中的方法。</p>
<p>Step1.在serviceImpl中创建Dao类型属性，并生成set方法</p>
<p><img src="images/Spring5源码/image-20211224141244408.png" alt="image-20211224141244408"></p>
<p>Step2.在xml中配置serviceImpl和daoImpl</p>
<p><img src="images/Spring5源码/image-20211224141426703.png" alt="image-20211224141426703"></p>
<h4 id="_2-5-4-4-注入内部bean" tabindex="-1"><a class="header-anchor" href="#_2-5-4-4-注入内部bean" aria-hidden="true">#</a> 2.5.4.4 注入内部bean</h4>
<blockquote>
<p>数据库表一对多关系：部门和员工</p>
</blockquote>
<p>一个部门可以有多个员工，一个员工只属于一个部门。</p>
<p>Step1.部门和员工实体类</p>
<p><img src="images/Spring5源码/image-20211224153019836.png" alt="image-20211224153019836"></p>
<p>Step2.在xml中配置Emp和Dept</p>
<p><img src="images/Spring5源码/image-20211224153337243.png" alt="image-20211224153337243"></p>
<h4 id="_2-5-4-5-级联赋值" tabindex="-1"><a class="header-anchor" href="#_2-5-4-5-级联赋值" aria-hidden="true">#</a> 2.5.4.5 级联赋值</h4>
<p>第一种写法：</p>
<p><img src="images/Spring5源码/image-20211224154128121.png" alt="image-20211224154128121"></p>
<p>第二种写法：</p>
<p><img src="images/Spring5源码/image-20211224154929289.png" alt="image-20211224154929289"></p>
<p>==级联赋值和注入外部bean的区别：==级联赋值比注入外部bean多了个给外部bean赋值的操作。</p>
<h4 id="_2-5-4-6-注入简单集合类型属性" tabindex="-1"><a class="header-anchor" href="#_2-5-4-6-注入简单集合类型属性" aria-hidden="true">#</a> 2.5.4.6 注入简单集合类型属性</h4>
<ul>
<li>
<p>Stu类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>spring5learn<span class="token punctuation">.</span>collectiontype</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Stu</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.数组类型的属性</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> courses<span class="token punctuation">;</span>
    <span class="token comment">// 2.List集合类型的属性</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">;</span>
    <span class="token comment">// 3.map集合类型的属性</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">;</span>
    <span class="token comment">// 4.set集合类型的属性</span>
    <span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set<span class="token punctuation">;</span>
    <span class="token comment">// 5.集合中的元素是对象类型</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Course</span><span class="token punctuation">></span></span> courseList<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCourseList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Course</span><span class="token punctuation">></span></span> courseList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>courseList <span class="token operator">=</span> courseList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCourses</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> courses<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>courses <span class="token operator">=</span> courses<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSet</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>set <span class="token operator">=</span> set<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>courses<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>courseList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></li>
<li>
<p>Course类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>spring5learn<span class="token punctuation">.</span>collectiontype</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> cname<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCname</span><span class="token punctuation">(</span><span class="token class-name">String</span> cname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cname <span class="token operator">=</span> cname<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Course{"</span> <span class="token operator">+</span>
                <span class="token string">"cname='"</span> <span class="token operator">+</span> cname <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></li>
<li>
<p>bean1.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stu<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.tth.spring5learn.collectiontype.Stu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 数组类型属性注入 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>courses<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>array</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>java课程<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>mysql课程<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>array</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- list类型属性注入 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>8点-10点上java课<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>14点-16点上mysql课<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- map类型属性注入 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>早饭<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>粥<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>午饭<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>面<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>晚饭<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>盖饭<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- set类型属性注入 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>set<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>set</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>跑步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>跳绳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>set</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

        <span class="token comment">&lt;!-- 对象型集合 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>courseList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>list</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>list</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 创建多个course对象 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.tth.spring5learn.collectiontype.Course<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cname<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Spring5框架<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.tth.spring5learn.collectiontype.Course<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cname<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mybatis框架<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div></li>
</ul>
<blockquote>
<p>list 的提取</p>
</blockquote>
<ul>
<li>
<p>Book类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tth<span class="token punctuation">.</span>spring5learn<span class="token punctuation">.</span>collectiontype</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li>
<li>
<p>bean.xml</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>util</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/util<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 1.提取list集合类型属性注入 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">util:</span>list</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bookList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>图书1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>图书2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">></span></span>图书3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">util:</span>list</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 2.提取的list集合类型属性的使用--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>book<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.tth.spring5learn.collectiontype.Book<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bookList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></li>
</ul>
<h2 id="_2-6-factorybean" tabindex="-1"><a class="header-anchor" href="#_2-6-factorybean" aria-hidden="true">#</a> 2.6 FactoryBean</h2>
<blockquote>
<p>普通bean和FactoryBean的区别：</p>
</blockquote>
<ul>
<li>
<p>普通bean：在配置文件（xml文件）中定义的bean类型就是返回类型</p>
<p><img src="images/Spring5源码/image-20211224180449785.png" alt="image-20211224180449785"></p>
<p><img src="images/Spring5源码/image-20211224180510812.png" alt="image-20211224180510812"></p>
<p><img src="images/Spring5源码/image-20211224180551592.png" alt="image-20211224180551592"></p>
</li>
<li>
<p>FactoryBean：在配置文件（xml文件）中定义的bean类型可以和返回类型不一样</p>
<p><img src="images/Spring5源码/image-20211224180434422.png" alt="image-20211224180434422"></p>
<p><img src="images/Spring5源码/image-20211224180528426.png" alt="image-20211224180528426"></p>
<p><img src="images/Spring5源码/image-20211224180606613.png" alt="image-20211224180606613"></p>
</li>
</ul>
</template>
