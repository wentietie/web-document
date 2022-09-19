<template><h1 id="使用yum源安装mysql5-7-centos7安装mysql5-7" tabindex="-1"><a class="header-anchor" href="#使用yum源安装mysql5-7-centos7安装mysql5-7" aria-hidden="true">#</a> 使用yum源安装MySQL5.7 CentOS7安装mysql5.7</h1>
<h2 id="_1-配置yum源" tabindex="-1"><a class="header-anchor" href="#_1-配置yum源" aria-hidden="true">#</a> 1.配置yum源</h2>
<h3 id="_1-1下载yum源" tabindex="-1"><a class="header-anchor" href="#_1-1下载yum源" aria-hidden="true">#</a> 1.1下载yum源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> <span class="token string">'https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2安装yum源" tabindex="-1"><a class="header-anchor" href="#_1-2安装yum源" aria-hidden="true">#</a> 1.2安装yum源</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rpm</span> -Uvh mysql57-community-release-el7-11.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3查看mysql版本" tabindex="-1"><a class="header-anchor" href="#_1-3查看mysql版本" aria-hidden="true">#</a> 1.3查看mysql版本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum repolist all <span class="token operator">|</span> <span class="token function">grep</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装mysql5.7/sever-install-mysql-1.png" alt=""></p>
<h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2.安装</h2>
<p>如果安装5.7.x版本，直接安装即可；如果安装5.6.x版本，需要先修改mysql的repo文件。</p>
<h3 id="_2-1-安装5-7-x版本" tabindex="-1"><a class="header-anchor" href="#_2-1-安装5-7-x版本" aria-hidden="true">#</a> 2.1 安装5.7.x版本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> mysql-community-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-2安装5-6-x版本" tabindex="-1"><a class="header-anchor" href="#_2-2安装5-6-x版本" aria-hidden="true">#</a> 2.2安装5.6.x版本</h3>
<p>修改文件 <code>/etc/yum.repos.d/mysql-community.repo</code> ，如下图所示</p>
<p><img src="@source/tang/server/images/CentOS7安装mysql5.7/sever-install-mysql-2.png" alt=""></p>
<h2 id="_3-启动mysql" tabindex="-1"><a class="header-anchor" href="#_3-启动mysql" aria-hidden="true">#</a> 3.启动mysql</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-登录mysql" tabindex="-1"><a class="header-anchor" href="#_4-登录mysql" aria-hidden="true">#</a> 4.登录mysql</h2>
<h3 id="_4-1查看mysql初始密码" tabindex="-1"><a class="header-anchor" href="#_4-1查看mysql初始密码" aria-hidden="true">#</a> 4.1查看mysql初始密码</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> <span class="token string">'temporary password'</span> /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装mysql5.7/sever-install-mysql-3.png" alt=""></p>
<h3 id="_4-2登录" tabindex="-1"><a class="header-anchor" href="#_4-2登录" aria-hidden="true">#</a> 4.2登录</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql -uroot -p7N4eJhw<span class="token operator">=</span>aty+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-3-修改密码" tabindex="-1"><a class="header-anchor" href="#_4-3-修改密码" aria-hidden="true">#</a> 4.3 修改密码</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>SET PASSWORD <span class="token operator">=</span> PASSWORD<span class="token punctuation">(</span><span class="token string">'Tang123456!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 设置密码永不过期</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">'root'</span>@<span class="token string">'localhost'</span> PASSWORD EXPIRE NEVER<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_4-4设置mysql允许远程访问" tabindex="-1"><a class="header-anchor" href="#_4-4设置mysql允许远程访问" aria-hidden="true">#</a> 4.4设置mysql允许远程访问</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>GRANT ALL PRIVILEGES ON *.* TO <span class="token string">'root'</span>@<span class="token string">'%'</span> IDENTIFIED BY <span class="token string">'Tang123456!'</span> WITH GRANT OPTION<span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
