<template><h1 id="无法推送镜像" tabindex="-1"><a class="header-anchor" href="#无法推送镜像" aria-hidden="true">#</a> 无法推送镜像</h1>
<p>https://blog.csdn.net/haodiaoer/article/details/94835649</p>
<h1 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息" aria-hidden="true">#</a> 错误信息：</h1>
<p><strong>Get https://10.1.93.164:5000/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)</strong></p>
<p><img src="@source/tang/k8s/images/无法推送镜像/k8s-push-image-refused.png" alt=""></p>
<h1 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因" aria-hidden="true">#</a> 错误原因：</h1>
<p>docker私有仓库服务器，<strong>默认是基于https传输的</strong>，所以我们需要在客户端做相关设置，不使用https传输</p>
<h1 id="解决步骤" tabindex="-1"><a class="header-anchor" href="#解决步骤" aria-hidden="true">#</a> 解决步骤：</h1>
<h2 id="step1-编辑-etc-docker-daemon-json文件" tabindex="-1"><a class="header-anchor" href="#step1-编辑-etc-docker-daemon-json文件" aria-hidden="true">#</a> step1.编辑/etc/docker/daemon.json文件</h2>
<div class="language-linux ext-linux line-numbers-mode"><pre v-pre class="language-linux"><code>vi /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="step2-将下面的代码放进去保存并退出" tabindex="-1"><a class="header-anchor" href="#step2-将下面的代码放进去保存并退出" aria-hidden="true">#</a> step2.将下面的代码放进去保存并退出</h2>
<div class="language-linux ext-linux line-numbers-mode"><pre v-pre class="language-linux"><code>&quot;insecure-registries&quot;:[&quot;镜像服务器IP:镜像容器端口号&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>结果如下：</p>
<p><img src="@source/tang/k8s/images/无法推送镜像/k8s-push-image-refused-2.png" alt=""></p>
<h2 id="step3-重新启动docker" tabindex="-1"><a class="header-anchor" href="#step3-重新启动docker" aria-hidden="true">#</a> step3.重新启动docker</h2>
<div class="language-linux ext-linux line-numbers-mode"><pre v-pre class="language-linux"><code>systemctl daemon-reload
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
