<template><p><strong>本笔记实现的是在服务器A上使用ssh免密登录到服务器B。</strong></p>
<h1 id="_1-在服务器a上生成密钥文件" tabindex="-1"><a class="header-anchor" href="#_1-在服务器a上生成密钥文件" aria-hidden="true">#</a> 1.在服务器A上生成密钥文件</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行过程中一路回车即可。</p>
<p><img src="@source/tang/server/images/CentOS7root账号免密登录/sever-nopass-login-1.png" alt=""></p>
<p>执行完成后，会在<code>/root</code>下生成<code>.ssh</code>文件夹，该文件夹下会生成<code>id_rsa</code>和<code>id_rsa.pub</code>文件。</p>
<h1 id="_2-在服务器a上将密钥发送到服务器b上" tabindex="-1"><a class="header-anchor" href="#_2-在服务器a上将密钥发送到服务器b上" aria-hidden="true">#</a> 2.在服务器A上将密钥发送到服务器B上</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
ssh-copy-id -i id_rsa.pub root@10.1.93.191
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/tang/server/images/CentOS7root账号免密登录/sever-nopass-login-2.png" alt=""></p>
<h1 id="_3-修改服务器b上的文件权限" tabindex="-1"><a class="header-anchor" href="#_3-修改服务器b上的文件权限" aria-hidden="true">#</a> 3.修改服务器B上的文件权限</h1>
<p><strong>修改服务器B上的<code>/root/.ssh</code>文件夹和<code>/root/.ssh/authorized_keys</code>文件权限分别为<code>700</code>、<code>600</code></strong></p>
<h1 id="_4-在服务器a上实现免密登录服务器b" tabindex="-1"><a class="header-anchor" href="#_4-在服务器a上实现免密登录服务器b" aria-hidden="true">#</a> 4.在服务器A上实现免密登录服务器B</h1>
<p><img src="@source/tang/server/images/CentOS7root账号免密登录/sever-nopass-login-3.png" alt=""></p>
</template>
