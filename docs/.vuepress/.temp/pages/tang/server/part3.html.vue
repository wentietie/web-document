<template><h1 id="centos7安装jdk1-8" tabindex="-1"><a class="header-anchor" href="#centos7安装jdk1-8" aria-hidden="true">#</a> CentOS7安装jdk1.8</h1>
<h1 id="_1-官网下载jdk" tabindex="-1"><a class="header-anchor" href="#_1-官网下载jdk" aria-hidden="true">#</a> 1.官网下载jdk</h1>
<p>https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</p>
<p><img src="@source/tang/server/images/CentOS7安装jdk1.8/sever-install-jdk-1.png" alt=""></p>
<h1 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2.安装</h1>
<p>创建<code>/usr/java8</code>文件夹，将压缩包上传至该文件夹内，进行解压。</p>
<p><img src="@source/tang/server/images/CentOS7安装jdk1.8/sever-install-jdk-2.png" alt=""></p>
<h1 id="_3-配置jdk" tabindex="-1"><a class="header-anchor" href="#_3-配置jdk" aria-hidden="true">#</a> 3.配置JDK</h1>
<p>编辑 <code>/etc/profile</code>文件，进行全局变量的设置，在文件末尾添加如下内容即可：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#java environment</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/java8/jdk1.8.0_281
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">${JAVA_HOME}</span>/jre/lib/rt.jar:<span class="token variable">${JAVA_HOME}</span>/lib/dt.jar:<span class="token variable">${JAVA_HOME}</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">${JAVA_HOME}</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装jdk1.8/sever-install-jdk-3.png" alt=""></p>
<h1 id="_4-让环境变量生效" tabindex="-1"><a class="header-anchor" href="#_4-让环境变量生效" aria-hidden="true">#</a> 4.让环境变量生效</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_5-检查是否安装成功" tabindex="-1"><a class="header-anchor" href="#_5-检查是否安装成功" aria-hidden="true">#</a> 5.检查是否安装成功</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java -version
javac -version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装jdk1.8/sever-install-jdk-4.png" alt=""></p>
</template>
