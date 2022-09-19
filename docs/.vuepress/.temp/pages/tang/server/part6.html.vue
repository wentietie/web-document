<template><h1 id="centos7安装redis" tabindex="-1"><a class="header-anchor" href="#centos7安装redis" aria-hidden="true">#</a> CentOS7安装redis</h1>
<h1 id="_1-安装gcc" tabindex="-1"><a class="header-anchor" href="#_1-安装gcc" aria-hidden="true">#</a> 1.安装gcc</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum -y <span class="token function">install</span> gcc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_2-创建-usr-local-redis文件夹" tabindex="-1"><a class="header-anchor" href="#_2-创建-usr-local-redis文件夹" aria-hidden="true">#</a> 2.创建/usr/local/redis文件夹</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_3-下载redis安装包并解压" tabindex="-1"><a class="header-anchor" href="#_3-下载redis安装包并解压" aria-hidden="true">#</a> 3.下载redis安装包并解压</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/redis
<span class="token function">wget</span> http://download.redis.io/releases/redis-4.0.6.tar.gz
<span class="token function">tar</span> -zxvf redis-4.0.6.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-1.png" alt=""></p>
<h1 id="_4-开始安装" tabindex="-1"><a class="header-anchor" href="#_4-开始安装" aria-hidden="true">#</a> 4.开始安装</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-4.0.6/
<span class="token function">make</span>
<span class="token builtin class-name">cd</span> src
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>如果执行make的时候报错</strong>： <code>redis编译报致命错误：jemalloc/jemalloc.h：没有那个文件或目录</code> ，将make命令改为<code>make MALLOC=libc</code></p>
<h1 id="_5-设置后台启动redis" tabindex="-1"><a class="header-anchor" href="#_5-设置后台启动redis" aria-hidden="true">#</a> 5.设置后台启动redis</h1>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-2.png" alt=""></p>
<p>将<code>redis-4.0.6/redis.conf</code>文件中的<code>daemonize</code>改为<code>yes</code>，如下图</p>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-3.png" alt=""></p>
<p><strong>启动命令为：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>src/redis-server  redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_6-设置密码" tabindex="-1"><a class="header-anchor" href="#_6-设置密码" aria-hidden="true">#</a> 6.设置密码</h1>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-2-1616296377058.png" alt=""></p>
<p>将<code>redis-4.0.6/redis.conf</code>文件中的<code>requirepass</code>的注释取消，并设置密码，如下图：</p>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-4.png" alt=""></p>
<p><strong>启动命令为：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>src/redis-server  redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_7-设置远程访问" tabindex="-1"><a class="header-anchor" href="#_7-设置远程访问" aria-hidden="true">#</a> 7.设置远程访问</h1>
<p>将<code>redis-4.0.6/redis.conf</code>文件中的<code>bind 127.0.0.1</code>的注释掉，并将<code>protected-mode</code>值改为<code>no</code>，如下图：</p>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-5.png" alt=""></p>
<h1 id="_8-将redis添加为服务" tabindex="-1"><a class="header-anchor" href="#_8-将redis添加为服务" aria-hidden="true">#</a> 8.将redis添加为服务</h1>
<h2 id="_8-1复制redis脚本" tabindex="-1"><a class="header-anchor" href="#_8-1复制redis脚本" aria-hidden="true">#</a> 8.1复制redis脚本</h2>
<p>将脚本文件 <code>redis_init_script</code> 复制到<code>/etc/rc.d/init.d/</code>，并改名为<code>redis</code>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> utils/redis_init_script /etc/rc.d/init.d/redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-6.png" alt=""></p>
<h2 id="_8-2更改redis脚本" tabindex="-1"><a class="header-anchor" href="#_8-2更改redis脚本" aria-hidden="true">#</a> 8.2更改redis脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/rc.d/init.d/redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-7.png" alt=""></p>
<h2 id="_8-3复制redis配置文件" tabindex="-1"><a class="header-anchor" href="#_8-3复制redis配置文件" aria-hidden="true">#</a> 8.3复制redis配置文件</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /etc/redis
<span class="token function">cp</span> redis.conf /etc/redis/6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_8-4注册服务" tabindex="-1"><a class="header-anchor" href="#_8-4注册服务" aria-hidden="true">#</a> 8.4注册服务</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chkconfig</span> --add redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_8-5启动服务" tabindex="-1"><a class="header-anchor" href="#_8-5启动服务" aria-hidden="true">#</a> 8.5启动服务</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 刷新服务单元</span>
systemctl daemon-reload
<span class="token comment"># 启动redis</span>
systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_8-6可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_8-6可能遇到的问题" aria-hidden="true">#</a> 8.6可能遇到的问题</h2>
<p>使用systemctl start redis启动redis时，可能遇到如下问题:</p>
<p><img src="@source/tang/server/images/CentOS7安装redis/sever-install-redis-8.png" alt=""></p>
<p>解决方法：直接删掉<code>/var/run/redis_6379.pid</code>即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> -f /var/run/redis_6379.pid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
