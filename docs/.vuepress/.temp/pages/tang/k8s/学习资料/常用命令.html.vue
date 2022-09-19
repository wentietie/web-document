<template><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1>
<h1 id="_1-node相关" tabindex="-1"><a class="header-anchor" href="#_1-node相关" aria-hidden="true">#</a> 1.node相关</h1>
<h2 id="_1-1-设置node是否可调度" tabindex="-1"><a class="header-anchor" href="#_1-1-设置node是否可调度" aria-hidden="true">#</a> 1.1 设置node是否可调度</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 暂停调度</span>
kubectl cordon 节点名
<span class="token comment"># 回复调度</span>
kubectl uncordon 节点名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_1-2-删除node" tabindex="-1"><a class="header-anchor" href="#_1-2-删除node" aria-hidden="true">#</a> 1.2 删除node</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl delete <span class="token function">node</span> 节点名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
