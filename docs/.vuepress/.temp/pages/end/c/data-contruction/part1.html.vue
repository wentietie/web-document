<template><h1 id="第一章-绪论" tabindex="-1"><a class="header-anchor" href="#第一章-绪论" aria-hidden="true">#</a> 第一章 绪论</h1>
<h2 id="_1-1-什么是数据结构" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是数据结构" aria-hidden="true">#</a> 1.1 什么是数据结构</h2>
<p>数据结构是一门研究非数值计算的程序设计问题中计算机的<strong>操作对象以及他们之间的关系和操作</strong>等的学科</p>
<h2 id="_1-2-基本概念和术语" tabindex="-1"><a class="header-anchor" href="#_1-2-基本概念和术语" aria-hidden="true">#</a> 1.2 基本概念和术语</h2>
<ul>
<li><strong>数据（data）</strong>：对客观事物的符号表示，在计算机科学中指所有能输入到计算机中并被计算机程序处理的符号的总称。</li>
<li><strong>数据元素（data element）</strong>：数据的基本单位，在计算机程序中通常作为一个整体进行考虑和处理。</li>
<li><strong>数据对象（data object）</strong>：性质相同的数据元素的集合，是数据的一个子集。</li>
</ul>
<ul>
<li><strong>数据结构（data structure）</strong>：相互之间存在一种或多种特定关系的数据元素的集合。
<ul>
<li><strong>结构</strong>：数据元素相互之间的关系</li>
<li><strong>线性结构</strong>：一对一的关系</li>
<li><strong>树形结构</strong>：一对多的关系</li>
<li><strong>图状结构</strong>：多对多的关系</li>
</ul>
</li>
</ul>
<ul>
<li><strong>物理结构</strong>：数据结构在计算机中的表示（映像），又称为<strong>存储结构</strong>
<ul>
<li><strong>位</strong>：计算机中表示信息的最小单位，是二进制数的一位。</li>
<li><strong>元素</strong>：用若干个位组合形成的串表示一个数据元素</li>
</ul>
</li>
<li><strong>数据类型</strong>：表示操作对象的类型</li>
<li></li>
</ul>
<h2 id="_1-3-抽象数据类型的表示与实现" tabindex="-1"><a class="header-anchor" href="#_1-3-抽象数据类型的表示与实现" aria-hidden="true">#</a> 1.3 抽象数据类型的表示与实现</h2>
<h2 id="_1-4-算法和算法分析" tabindex="-1"><a class="header-anchor" href="#_1-4-算法和算法分析" aria-hidden="true">#</a> 1.4 算法和算法分析</h2>
<h3 id="_1-4-1-算法" tabindex="-1"><a class="header-anchor" href="#_1-4-1-算法" aria-hidden="true">#</a> 1.4.1 算法</h3>
<p><strong>算法</strong>：对特定问题求解步骤的一种描述。</p>
<h4 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h4>
<ul>
<li>有穷性：必须在执行有穷步后结束，且每一步在有穷的时间内完成。</li>
<li>确定性：每一条指令必须有确切的含义。</li>
<li>可行性：算法种描述的操作是可以通过已经实现的基本运算执行有限次来实现的</li>
<li>输入：有零个或多个输入。</li>
<li>输出：有一个或多个输出。这些输出与输入有某种特定的联系。</li>
</ul>
<h3 id="_1-4-2-设计要求" tabindex="-1"><a class="header-anchor" href="#_1-4-2-设计要求" aria-hidden="true">#</a> 1.4.2 设计要求</h3>
<p>通常一个好的算法应考虑一下目标</p>
<ul>
<li>正确性：大体分以下四个层次
<ul>
<li>程序不含语法错误。</li>
<li>对于一些输入能够得出满足要求的结果。</li>
<li>对于一些精心选择、典型苛刻的输入能够得出满足要求的结果。</li>
<li>对于一切合法输入都能得到满足要求的结果。</li>
</ul>
</li>
<li>可读性：人对算法的理解。</li>
<li>健壮性：当输入非法时，能够作出反应或者进行处理。</li>
<li>效率与低储存需求：效率通俗的讲，就是程序的执行时间。存储需求则是程序在执行过程中需要的最大存储空间。</li>
</ul>
<h3 id="_1-4-3-算法效率的度量" tabindex="-1"><a class="header-anchor" href="#_1-4-3-算法效率的度量" aria-hidden="true">#</a> 1.4.3 算法效率的度量</h3>
<p>算法执行时间的度量通常有以下两种：</p>
<ul>
<li>事后统计法：直接执行程序来进行统计。
缺陷：1. 必须先运行。2. 计算结果依赖计算机硬件等环境因素。</li>
<li>事前分析估计：
一个高级程序语言编写的程序运行的时间取决于一下几种因素：
<ul>
<li>算法的策略</li>
<li>问题的规模</li>
<li>程序语言，语言级别越高，执行效率越低</li>
<li>编译程序产生的机器代码的质量</li>
<li>机器执行指令的速度</li>
</ul>
</li>
</ul>
</template>
