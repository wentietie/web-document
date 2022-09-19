<template><h1 id="docker-安装-ftp-服务端" tabindex="-1"><a class="header-anchor" href="#docker-安装-ftp-服务端" aria-hidden="true">#</a> docker 安装 ftp 服务端</h1>
<h1 id="_1-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_1-拉取镜像" aria-hidden="true">#</a> 1.拉取镜像</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull fauria/vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>fauria/vsftpd是官方的FTP服务器镜像</p>
<h2 id="_2-启动docker容器" tabindex="-1"><a class="header-anchor" href="#_2-启动docker容器" aria-hidden="true">#</a> 2.启动docker容器</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -v /home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano <span class="token punctuation">\</span>
-p <span class="token number">20</span>:20 -p <span class="token number">21</span>:21 -p  <span class="token number">21100</span>-21110:21100-21110 <span class="token punctuation">\</span>
-e <span class="token assign-left variable">FTP_USER</span><span class="token operator">=</span>pano -e <span class="token assign-left variable">FTP_PASS</span><span class="token operator">=</span>bd_21_pano <span class="token punctuation">\</span>
-e <span class="token assign-left variable">PASV_ADDRESS</span><span class="token operator">=</span><span class="token number">10.1</span>.93.172 <span class="token punctuation">\</span>
-e <span class="token assign-left variable">PASV_MIN_PORT</span><span class="token operator">=</span><span class="token number">21100</span> -e <span class="token assign-left variable">PASV_MAX_PORT</span><span class="token operator">=</span><span class="token number">21110</span> <span class="token punctuation">\</span>
--name vsftpd1 --restart<span class="token operator">=</span>always fauria/vsftpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>参数说明：</p>
<p><code>-p </code>是将容器中的端口映射到宿主机的端口，冒号前边是宿主机的端口；</p>
<p><code>/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7:/home/vsftpd/pano</code>是将容器中的<code>/home/vsftpd/pano</code>挂载到宿主机的<code>/home/share/pano_sources/pano-dev-sources-pvc-555f9685-2ff8-4932-bcfd-f2ac309925e7</code>路径下；</p>
<p><code>FTP_USER</code>、<code>FTP_PASS</code>分别是FTP登录的用户名和密码；</p>
<p><code>PASV_ADDRESS</code>是宿主机IP；</p>
<p><code>PASV_MIN_PORT</code>、<code>PASV_MAX_PORT</code>分别是给客户端提供下载服务随机的端口号范围，默认是21100-2111。此处要和前面docker端口映射设置成一样。</p>
<p><code>name</code>是容器名称；</p>
<p><code>--restart=always /fauria/vsftpd</code>指定重启策略以及容器镜像。</p>
<h1 id="_3-登录" tabindex="-1"><a class="header-anchor" href="#_3-登录" aria-hidden="true">#</a> 3.登录</h1>
<p>浏览器输入<code>ftp://pano:bd_21_pano@10.1.93.172</code>即可访问</p>
<p>注意：pano用户的根目录为<code>/home/vsftpd/pano/</code></p>
</template>
