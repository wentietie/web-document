<template><h1 id="在linux上安装node" tabindex="-1"><a class="header-anchor" href="#在linux上安装node" aria-hidden="true">#</a> 在linux上安装node</h1>
<h2 id="解压缩方式" tabindex="-1"><a class="header-anchor" href="#解压缩方式" aria-hidden="true">#</a> 解压缩方式</h2>
<ol>
<li>下载node安装包。<a href="https://npmmirror.com/mirrors/node/v16.15.0/node-v16.15.0-linux-x64.tar.xz" target="_blank" rel="noopener noreferrer">Linux 二进制文件 (x64) v16.15.0<ExternalLinkIcon/></a></li>
<li>将安装包复制到linux上。</li>
<li>解压安装包</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> -xJf node-v6.10.2-linux-x64.tar.xz
<span class="token comment"># 解压后建议重命名为nodejs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4">
<li>建立软连接</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> -s /nodejs/bin/node /usr/local/bin/node
<span class="token function">sudo</span> <span class="token function">ln</span> -s /nodejs/bin/npm /usr/local/bin/npm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="常用linux命令" tabindex="-1"><a class="header-anchor" href="#常用linux命令" aria-hidden="true">#</a> 常用linux命令</h2>
<h3 id="压缩文件" tabindex="-1"><a class="header-anchor" href="#压缩文件" aria-hidden="true">#</a> 压缩文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 创建压缩文件</span>
<span class="token function">zip</span> -r *.zip *
<span class="token comment"># 解压文件</span>
<span class="token function">unzip</span> *.zip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="查看文件夹" tabindex="-1"><a class="header-anchor" href="#查看文件夹" aria-hidden="true">#</a> 查看文件夹</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#查看文件列表</span>
ll
<span class="token comment">#查看所有文件</span>
<span class="token function">ls</span> -a
<span class="token comment">#查看隐藏文件</span>
l.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="修改环境变量" tabindex="-1"><a class="header-anchor" href="#修改环境变量" aria-hidden="true">#</a> 修改环境变量</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
