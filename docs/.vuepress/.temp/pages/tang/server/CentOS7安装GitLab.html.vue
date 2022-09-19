<template><p>本教程中，防火墙是关闭的。</p>
<h1 id="_1-安装ssh" tabindex="-1"><a class="header-anchor" href="#_1-安装ssh" aria-hidden="true">#</a> 1.安装ssh</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 检查是否安装了ssh服务</span>
systemctl status <span class="token function">ssh</span>

<span class="token comment"># 如果没安装，则安装；安装的话，跳过该命令</span>
yum <span class="token function">install</span> -y <span class="token function">curl</span> policycoreutils-pythonopenssh-server

<span class="token comment"># 设置ssh开机自启</span>
systemctl <span class="token builtin class-name">enable</span> sshd

<span class="token comment"># 启动ssh</span>
systemctl start sshd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="_2-安装-postfix" tabindex="-1"><a class="header-anchor" href="#_2-安装-postfix" aria-hidden="true">#</a> 2.安装 Postfix</h1>
<p>Postfix 是用来发送通知邮件的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 检查是否安装了postfix服务</span>
systemctl status postfix

<span class="token comment"># 如果没安装，则安装；安装的话，跳过该命令</span>
yum <span class="token function">install</span> -y postfix

<span class="token comment"># 设置postfix开机自启</span>
systemctl <span class="token builtin class-name">enable</span> postfix

<span class="token comment"># 启动postfix</span>
systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="_3-安装-policycoreutils-python" tabindex="-1"><a class="header-anchor" href="#_3-安装-policycoreutils-python" aria-hidden="true">#</a> 3.安装 policycoreutils-python</h1>
<p>policycoreutils-python 是gitlab的一个依赖。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>yum <span class="token function">install</span> policycoreutils-python
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_4-安装gitlab" tabindex="-1"><a class="header-anchor" href="#_4-安装gitlab" aria-hidden="true">#</a> 4.安装GitLab</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 添加gitlab镜像源</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># 安装</span>
<span class="token function">rpm</span> -i gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>安装过程需要些时间，如果出现下图，则说明安装成功。</p>
<p><img src="@source/tang/server/images/CentOS7安装GitLab/sever-install-gitlab-1.png" alt=""></p>
<h1 id="_5-配置gitlab" tabindex="-1"><a class="header-anchor" href="#_5-配置gitlab" aria-hidden="true">#</a> 5.配置GitLab</h1>
<p>GitLab相关参数配置都在 <code>/etc/gitlab/gitlab.rb</code> 文件里，每次配置完成之后需要执行<code>gitlab-ctl reconfigure</code>，重新配置才能生效。</p>
<h2 id="_5-1配置-external-url" tabindex="-1"><a class="header-anchor" href="#_5-1配置-external-url" aria-hidden="true">#</a> 5.1配置 external_url</h2>
<p>修改 external_url ‘[http://ip:address]‘为真实的服务器IP和端口。</p>
<p><img src="@source/tang/server/images/CentOS7安装GitLab/sever-install-gitlab-2.png" alt=""></p>
<h2 id="_5-2配置邮件服务" tabindex="-1"><a class="header-anchor" href="#_5-2配置邮件服务" aria-hidden="true">#</a> 5.2配置邮件服务</h2>
<p>以qq邮箱向外发送gitlab的相关邮件为例。</p>
<h3 id="_5-2-1-开启qq邮箱的stmp服务" tabindex="-1"><a class="header-anchor" href="#_5-2-1-开启qq邮箱的stmp服务" aria-hidden="true">#</a> 5.2.1 开启qq邮箱的STMP服务</h3>
<p><img src="@source/tang/server/images/CentOS7安装GitLab/sever-install-gitlab-4.png" alt=""></p>
<p><img src="C:\Users\bdCloud\AppData\Roaming\Typora\typora-user-images\1614311492743.png" alt="1614311492743"></p>
<h3 id="_5-2-2-修改gitlab配置" tabindex="-1"><a class="header-anchor" href="#_5-2-2-修改gitlab配置" aria-hidden="true">#</a> 5.2.2 修改gitlab配置</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 进入配置文件</span>
<span class="token function">vim</span> /etc/gitlab/gitlab.rb

<span class="token comment"># 可以在文件中查找这些内容进行修改，由于这些内容是注释的，也可以直接添加</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_enable'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_address'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"smtp.qq.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_port'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">465</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_user_name'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"邮箱@qq.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_password'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"开通smtp时返回的授权码"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_domain'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"qq.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_authentication'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"login"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_enable_starttls_auto'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'smtp_tls'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>

user<span class="token punctuation">[</span><span class="token string">'git_user_email'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"邮箱@qq.com"</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">'gitlab_email_from'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'邮箱@qq.com'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_5-3重启gitlab" tabindex="-1"><a class="header-anchor" href="#_5-3重启gitlab" aria-hidden="true">#</a> 5.3重启gitlab</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 使修改的配置生效</span>
gitlab-ctl reconfigure

<span class="token comment"># 重启</span>
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong><code>gitlab-ctl reconfigure</code>（等待时间较长） 若安装过程遇到<code>“ ruby_block[wait for redis service socket] action run”</code>处卡住，可通过<code>ctrl+c</code>退出，并执行<code>systemctl restart gitlab-runsvdir</code>，再继续执行g<code>itlab-ctl reconfigure</code>，如安装过程遇到报错信息，可重复执行<code>gitlab-ctl reconfigure</code>。</strong></p>
<h2 id="_5-4测试邮件是否生效" tabindex="-1"><a class="header-anchor" href="#_5-4测试邮件是否生效" aria-hidden="true">#</a> 5.4测试邮件是否生效</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 打开gitlab控制台</span>
gitlab-rails console

<span class="token comment"># 发送邮件</span>
Notify.test_email<span class="token punctuation">(</span><span class="token string">'接收方邮件地址'</span>,<span class="token string">'邮件标题'</span>,<span class="token string">'邮件内容'</span><span class="token punctuation">)</span>.deliver_now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="@source/tang/server/images/CentOS7安装GitLab/sever-install-gitlab-6.png" alt=""></p>
<h2 id="_5-5-设置root账号密码" tabindex="-1"><a class="header-anchor" href="#_5-5-设置root账号密码" aria-hidden="true">#</a> 5.5 设置root账号密码</h2>
<p>打开浏览器，输入gitlab的ip+端口号，如果未设置root账号的密码，会自动跳转到如下界面，在该界面里便可设置root账号密码。</p>
<p><img src="@source/tang/server/images/CentOS7安装GitLa/sever-install-gitlab-3.png" alt=""></p>
<h1 id="_6-gitlab的迁移" tabindex="-1"><a class="header-anchor" href="#_6-gitlab的迁移" aria-hidden="true">#</a> 6.gitlab的迁移</h1>
<h2 id="_6-1-gitlab版本的升级" tabindex="-1"><a class="header-anchor" href="#_6-1-gitlab版本的升级" aria-hidden="true">#</a> 6.1 gitlab版本的升级</h2>
<p>gitlab迁移，需要保证两台服务器gitlab版本一致。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看gitlab版本号</span>
<span class="token function">cat</span> /opt/gitlab/embedded/service/gitlab-rails/VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果版本号不一致，则需要对gitlab进行升级。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 在带有低版本gitlab的服务器上下载相应高版本的镜像源</span>
<span class="token function">wget</span> https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># 关闭部分gitlab服务</span>
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq
gitlab-ctl stop nginx

<span class="token comment"># 升级</span>
<span class="token function">rpm</span> -Uvh gitlab-ce-12.3.5-ce.0.el7.x86_64.rpm

<span class="token comment"># 重新加载gitlab配置</span>
gitlab-ctl reconfigure

<span class="token comment"># 重启gitlab</span>
gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_6-2-开始迁移" tabindex="-1"><a class="header-anchor" href="#_6-2-开始迁移" aria-hidden="true">#</a> 6.2 开始迁移</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 备份就数据库数据</span>
gitlab-rake gitlab:backup:create

<span class="token comment"># 使用scp命令从本地旧服务器复制文件到新服务器</span>
<span class="token function">scp</span> /var/opt/gitlab/backups/1614564759_2021_02_28_12.3.5_gitlab_backup.tar root@xxx.xxx.xxx.xxx:/var/opt/gitlab/backups/


<span class="token comment"># 新服务器恢复GitLab</span>
<span class="token comment"># 将备份文件权限修改为777，避免出现权限不够的问题</span>
<span class="token builtin class-name">cd</span> /var/opt/gitlab/backups
chomd <span class="token number">777</span> 1614564759_2021_02_28_12.3.5_gitlab_backup.tar 

<span class="token comment"># 停止数据连接服务</span>
gitlab-ctl stop unicorn
gitlab-ctl stop sidekiq

<span class="token comment"># 恢复备份文件到GitLab</span>
gitlab-rake gitlab:backup:restore <span class="token assign-left variable">BACKUP</span><span class="token operator">=</span>备份文件编号
<span class="token comment">#例如：备份文件名为1614564759_2021_02_28_12.3.5_gitlab_backup.tar，则编号为1614564759_2021_02_28_12.3.5。在提示中敲入“yes”继续。</span>

<span class="token comment"># 启动</span>
gitlab-ctl start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="_7-卸载gitlab" tabindex="-1"><a class="header-anchor" href="#_7-卸载gitlab" aria-hidden="true">#</a> 7.卸载gitlab</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 停止gitlab</span>
gitlab-ctl stop

<span class="token comment"># 卸载</span>
<span class="token function">rpm</span> -e gitlab-ce

<span class="token comment"># 查看gitlab进程</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> gitlab

<span class="token comment"># 杀掉第一个进程（就是带有好多.............的进程）</span>
<span class="token function">kill</span> -9 XXXXX

<span class="token comment"># 删除所有包含gitlab文件</span>
<span class="token function">find</span> / -name gitlab <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> -rf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
