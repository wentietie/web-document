<template><h1 id="下载镜像提示没有磁盘空间" tabindex="-1"><a class="header-anchor" href="#下载镜像提示没有磁盘空间" aria-hidden="true">#</a> 下载镜像提示没有磁盘空间</h1>
<p>1.查看docker根目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker info | grep -i "docker root dir"</span>
 Docker Root Dir: /docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2.查看目录剩余空间</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -hl /docker</span>
文件系统                 容量  已用  可用 已用% 挂载点
/dev/mapper/centos-root  <span class="token number">6</span>.2G  <span class="token number">5</span>.5G  803M   <span class="token number">88</span>% /
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>磁盘空间只剩803M可用，可以将他放到一个更大的目录中去。</p>
<p>3.创建目标目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /etc/systemd/system/docker.service.d/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4.创建配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/systemd/system/docker.service.d/devicemapper.conf</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd  --graph<span class="token operator">=</span>/docker-root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>5.重启docker</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
