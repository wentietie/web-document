<template><h1 id="docker搭建私有镜像仓库" tabindex="-1"><a class="header-anchor" href="#docker搭建私有镜像仓库" aria-hidden="true">#</a> docker搭建私有镜像仓库</h1>
<h2 id="_1-下载镜像仓库镜像-并启动镜像仓库容器" tabindex="-1"><a class="header-anchor" href="#_1-下载镜像仓库镜像-并启动镜像仓库容器" aria-hidden="true">#</a> 1.下载镜像仓库镜像，并启动镜像仓库容器</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> pull registry
<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run -d -p <span class="token number">5000</span>:5000 --name registry docker.io/registry
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-虚拟机配置私有仓库地址" tabindex="-1"><a class="header-anchor" href="#_2-虚拟机配置私有仓库地址" aria-hidden="true">#</a> 2.虚拟机配置私有仓库地址</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 编辑daemon.json</span>
<span class="token function">vim</span> /etc/docker/daemon.json
<span class="token comment"># 给insecure-registries 参数加上镜像仓库地址及端口号</span>
<span class="token string">"insecure-registries"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"110.1.93.194:5000"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-虚拟机重启docker" tabindex="-1"><a class="header-anchor" href="#_3-虚拟机重启docker" aria-hidden="true">#</a> 3.虚拟机重启docker</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 重新装载配置</span>
systemctl daemon-reload
<span class="token comment"># 重启docker</span>
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_4-搭建成果展示" tabindex="-1"><a class="header-anchor" href="#_4-搭建成果展示" aria-hidden="true">#</a> 4.搭建成果展示</h2>
</template>
