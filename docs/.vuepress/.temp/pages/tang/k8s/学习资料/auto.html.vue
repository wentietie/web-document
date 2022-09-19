<template><h1 id="自动部署" tabindex="-1"><a class="header-anchor" href="#自动部署" aria-hidden="true">#</a> 自动部署</h1>
<h1 id="_1-插件准备" tabindex="-1"><a class="header-anchor" href="#_1-插件准备" aria-hidden="true">#</a> 1.插件准备</h1>
<p>在jenkins管理界面，点击<code>Manage Jenkins</code>，选择<code>Manage Plugins</code>，点击<code>可选插件</code>，搜索<code>GitLab Plugin</code>、<code>Docker Plugin</code>，直接安装。</p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-1.png" alt="1614741687301"></p>
<h1 id="_2-服务器环境配置" tabindex="-1"><a class="header-anchor" href="#_2-服务器环境配置" aria-hidden="true">#</a> 2.服务器环境配置</h1>
<h2 id="_2-1安装git" tabindex="-1"><a class="header-anchor" href="#_2-1安装git" aria-hidden="true">#</a> 2.1安装git</h2>
<p>因是每次git上项目有更新，都会自动制作镜像、升级服务镜像，故装有jenkins的服务器需要安装git用来下载gitlab上的项目。</p>
<h2 id="_2-2安装docker" tabindex="-1"><a class="header-anchor" href="#_2-2安装docker" aria-hidden="true">#</a> 2.2安装docker</h2>
<p>制作镜像的时候，需要用到docker，因此装有jenkins的服务器需要安装docker来实现镜像的制作与推送等操作。</p>
<h1 id="_3-jenkins全局工具配置" tabindex="-1"><a class="header-anchor" href="#_3-jenkins全局工具配置" aria-hidden="true">#</a> 3.jenkins全局工具配置</h1>
<p>在jenkins管理界面，点击<code>Manage Jenkins</code>，选择<code>Global Tool Configuration</code>，点击<code>可选插件</code>，搜索<code>GitLab Plugin</code>、<code>Docker Plugin</code>，直接安装。</p>
<h2 id="_3-1配置git" tabindex="-1"><a class="header-anchor" href="#_3-1配置git" aria-hidden="true">#</a> 3.1配置git</h2>
<p>在jenkins管理界面，点击<code>Manage Jenkins</code>，选择<code>Global Tool Configuration</code>，找到<code>Git</code>，点击<code>Add Git</code>，对git进行配置。</p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-2.png" alt="1614743317137"></p>
<h2 id="_3-2配置docker" tabindex="-1"><a class="header-anchor" href="#_3-2配置docker" aria-hidden="true">#</a> 3.2配置docker</h2>
<h3 id="_3-2-1docker基本配置" tabindex="-1"><a class="header-anchor" href="#_3-2-1docker基本配置" aria-hidden="true">#</a> 3.2.1docker基本配置</h3>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-10.png" alt="1614843920373"></p>
<h3 id="_3-2-2docker配置失败的解决方法" tabindex="-1"><a class="header-anchor" href="#_3-2-2docker配置失败的解决方法" aria-hidden="true">#</a> 3.2.2docker配置失败的解决方法</h3>
<p>如果点击【Test Connection】按钮报如下错误，可按照以下步骤解决。</p>
<p>报错如下：</p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-11.png" alt="1614844086777"></p>
<p>解决步骤：</p>
<p><strong>Step1.输入<code>systemctl status docker</code>查看docker端口号</strong></p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-12.png" alt="1614844258679"></p>
<p><strong>Step2. 修改docker tcp端口号</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-13.png" alt="1614844441143"></p>
<p><strong>Step3.重启docker</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-14.png" alt="161484499599"></p>
<p><strong>Step4.jenkins测试是否连接成功</strong></p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-15.png" alt="1614844727424"></p>
<h1 id="_4-创建项目" tabindex="-1"><a class="header-anchor" href="#_4-创建项目" aria-hidden="true">#</a> 4.创建项目</h1>
<h2 id="_4-1-新建item" tabindex="-1"><a class="header-anchor" href="#_4-1-新建item" aria-hidden="true">#</a> 4.1 新建Item</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-3.png" alt="1614821818967"></p>
<h2 id="_4-2项目源码设置" tabindex="-1"><a class="header-anchor" href="#_4-2项目源码设置" aria-hidden="true">#</a> 4.2项目源码设置</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-4.png" alt="1614828619072"></p>
<h2 id="_4-3-构建触发器" tabindex="-1"><a class="header-anchor" href="#_4-3-构建触发器" aria-hidden="true">#</a> 4.3 构建触发器</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-5.png" alt="1614828848872"></p>
<h2 id="_4-4编写构建脚本" tabindex="-1"><a class="header-anchor" href="#_4-4编写构建脚本" aria-hidden="true">#</a> 4.4编写构建脚本</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-6.png" alt="1614829216956"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">pro_version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $1}'</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token operator">|</span> <span class="token function">uniq</span> -c <span class="token operator">|</span> <span class="token function">sort</span> -k1,1nr<span class="token variable">)</span></span>
<span class="token assign-left variable">pro_image</span><span class="token operator">=</span><span class="token number">10.1</span>.93.164:5000/python-test:v<span class="token variable">${pro_version<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">/</span>}</span>
<span class="token function">docker</span> build -t <span class="token variable">${pro_image}</span> <span class="token builtin class-name">.</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-------------------------镜像build成功？"</span> <span class="token variable">$?</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token function">docker</span> push <span class="token variable">${pro_image}</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"-------------------------镜像push成功？"</span> <span class="token variable">$?</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span>
    <span class="token keyword">then</span>
        <span class="token assign-left variable">update_image_cmd</span><span class="token operator">=</span><span class="token string">"kubectl patch deployment test1 -n tth-test --patch '{<span class="token entity" title="\&quot;">\"</span>spec<span class="token entity" title="\&quot;">\"</span>: {<span class="token entity" title="\&quot;">\"</span>template<span class="token entity" title="\&quot;">\"</span>: {<span class="token entity" title="\&quot;">\"</span>spec<span class="token entity" title="\&quot;">\"</span>: {<span class="token entity" title="\&quot;">\"</span>containers<span class="token entity" title="\&quot;">\"</span>: [{<span class="token entity" title="\&quot;">\"</span>name<span class="token entity" title="\&quot;">\"</span>: <span class="token entity" title="\&quot;">\"</span>test1-c<span class="token entity" title="\&quot;">\"</span>,<span class="token entity" title="\&quot;">\"</span>image<span class="token entity" title="\&quot;">\"</span>:<span class="token entity" title="\&quot;">\"</span><span class="token variable">${pro_image}</span><span class="token entity" title="\&quot;">\"</span>}]}}}}'"</span>
        <span class="token builtin class-name">echo</span> 
        <span class="token function">ssh</span> root@10.1.93.160 <span class="token variable">${update_image_cmd}</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"-------------------------服务升级成功？"</span> <span class="token variable">$?</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_4-5保存项目信息" tabindex="-1"><a class="header-anchor" href="#_4-5保存项目信息" aria-hidden="true">#</a> 4.5保存项目信息</h2>
<p>项目信息编写完成后，点击【保存】按钮即可。</p>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-7.png" alt="1614829313001"></p>
<h1 id="_5-部署项目" tabindex="-1"><a class="header-anchor" href="#_5-部署项目" aria-hidden="true">#</a> 5.部署项目</h1>
<h2 id="_5-1-运行" tabindex="-1"><a class="header-anchor" href="#_5-1-运行" aria-hidden="true">#</a> 5.1 运行</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-8.png" alt="1614829530686"></p>
<h2 id="_5-2查看项目构建日志" tabindex="-1"><a class="header-anchor" href="#_5-2查看项目构建日志" aria-hidden="true">#</a> 5.2查看项目构建日志</h2>
<p><img src="@source/tang/k8s/images/借助jenkins完成python项目的自动部署/k8s-jenkins-auto-python-9.png" alt=""></p>
</template>
