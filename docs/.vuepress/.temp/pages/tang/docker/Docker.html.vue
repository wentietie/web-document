<template><h1 id="docker-进阶" tabindex="-1"><a class="header-anchor" href="#docker-进阶" aria-hidden="true">#</a> Docker 进阶</h1>
<h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker Compose</h2>
<p><code>[DaoCloud | Docker 极速下载](http://get.daocloud.io/)</code></p>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>通过YAML文件，定义、运行多个容器。</p>
<blockquote>
<p>使用Docker Compose的三步骤：</p>
</blockquote>
<p>1.定义Dockerfile文件。</p>
<p>2.编写docker-compose.yaml文件</p>
<p>3.启动项目</p>
<blockquote>
<p>狂神说</p>
</blockquote>
<p>Compose是Docker官方开源项目，需要安装！</p>
<p>Compose重要概念：</p>
<ul>
<li>服务Services：单个的容器/应用</li>
<li>项目Project：一组关联的容器</li>
</ul>
<p><code>大神福利看</code></p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>1.下载</p>
<p>可以在http://get.daocloud.io/ 网站中找到国内下载地址</p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210926173948018.png" alt="image-20210926173948018"></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -L https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> -s<span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> -m<span class="token variable">`</span></span> <span class="token operator">></span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.授权</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.验证是否安装成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker-compose</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/docker/images/Docker进阶/image-20210926174422445.png" alt="image-20210926174422445"></p>
<h3 id="体验" tabindex="-1"><a class="header-anchor" href="#体验" aria-hidden="true">#</a> 体验</h3>
<ul>
<li>官方python计数器应用。<a href="https://docs.docker.com/compose/gettingstarted/" target="_blank" rel="noopener noreferrer">Get started with Docker Compose | Docker Documentation<ExternalLinkIcon/></a></li>
<li>搭建WordPress博客应用。<a href="https://docs.docker.com/samples/wordpress/" target="_blank" rel="noopener noreferrer">Quickstart: Compose and WordPress | Docker Documentation<ExternalLinkIcon/></a></li>
</ul>
<h2 id="docker-swarm" tabindex="-1"><a class="header-anchor" href="#docker-swarm" aria-hidden="true">#</a> Docker Swarm</h2>
<p><a href="https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/" target="_blank" rel="noopener noreferrer">How nodes work | Docker Documentation<ExternalLinkIcon/></a></p>
<h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 准备好4台虚拟机（centos7.8系统），3台用作master节点（10.1.93.40, 10.1.93.42, 10.1.93.43），一台用作node节点（10.1.93.44）</span>

<span class="token comment"># 关闭虚拟机防火墙</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop firewalld</span>
<span class="token comment"># 开机不启动防火墙</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl disable firewalld</span>
Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.

<span class="token comment"># 设置主机名分别为master1、master2、master3、node（以master1为例）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname master1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># hostname</span>
master1


<span class="token comment"># 查看docker swarm 帮助文档</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm --help</span>

Usage:  <span class="token function">docker</span> swarm COMMAND

Manage Swarm

Commands:
  ca          Display and rotate the root CA
  init        Initialize a swarm <span class="token comment"># 初始化docker swarm</span>
  <span class="token function">join</span>        Join a swarm as a <span class="token function">node</span> and/or manager <span class="token comment"># 在docker swarm集群中假如一个node（工作）节点或者manager（管理）节点</span>
  join-token  Manage <span class="token function">join</span> tokens <span class="token comment"># 管理加入swarm集群的token</span>
  leave       Leave the swarm <span class="token comment"># 离开swarm集群</span>
  unlock      Unlock swarm
  unlock-key  Manage the unlock key
  update      Update the swarm

Run <span class="token string">'docker swarm COMMAND --help'</span> <span class="token keyword">for</span> <span class="token function">more</span> information on a command.

<span class="token comment"># 查看swarm初始化命令的帮助文档</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm init --help</span>

Usage:  <span class="token function">docker</span> swarm init <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

Initialize a swarm

Options:
      --advertise-addr string                  Advertised address <span class="token punctuation">(</span>format: <span class="token operator">&lt;</span>ip<span class="token operator">|</span>interface<span class="token operator">></span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 节点的ip</span>
      --autolock                               Enable manager autolocking <span class="token punctuation">(</span>requiring an unlock key to start a stopped manager<span class="token punctuation">)</span>
      --availability string                    Availability of the <span class="token function">node</span> <span class="token punctuation">(</span><span class="token string">"active"</span><span class="token operator">|</span><span class="token string">"pause"</span><span class="token operator">|</span><span class="token string">"drain"</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default <span class="token string">"active"</span><span class="token punctuation">)</span>
      --cert-expiry duration                   Validity period <span class="token keyword">for</span> <span class="token function">node</span> certificates <span class="token punctuation">(</span>ns<span class="token operator">|</span>us<span class="token operator">|</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 2160h0m0s<span class="token punctuation">)</span>
      --data-path-addr string                  Address or interface to use <span class="token keyword">for</span> data path traffic <span class="token punctuation">(</span>format: <span class="token operator">&lt;</span>ip<span class="token operator">|</span>interface<span class="token operator">></span><span class="token punctuation">)</span>
      --data-path-port uint32                  Port number to use <span class="token keyword">for</span> data path traffic <span class="token punctuation">(</span><span class="token number">1024</span> - <span class="token number">49151</span><span class="token punctuation">)</span>. If no value is <span class="token builtin class-name">set</span> or is <span class="token builtin class-name">set</span> to <span class="token number">0</span>, the default port <span class="token punctuation">(</span><span class="token number">4789</span><span class="token punctuation">)</span> is used.
      --default-addr-pool ipNetSlice           default address pool <span class="token keyword">in</span> CIDR <span class="token function">format</span> <span class="token punctuation">(</span>default <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      --default-addr-pool-mask-length uint32   default address pool subnet mask length <span class="token punctuation">(</span>default <span class="token number">24</span><span class="token punctuation">)</span>
      --dispatcher-heartbeat duration          Dispatcher heartbeat period <span class="token punctuation">(</span>ns<span class="token operator">|</span>us<span class="token operator">|</span>ms<span class="token operator">|</span>s<span class="token operator">|</span>m<span class="token operator">|</span>h<span class="token punctuation">)</span> <span class="token punctuation">(</span>default 5s<span class="token punctuation">)</span>
      --external-ca external-ca                Specifications of one or <span class="token function">more</span> certificate signing endpoints
      --force-new-cluster                      Force create a new cluster from current state
      --listen-addr node-addr                  Listen address <span class="token punctuation">(</span>format: <span class="token operator">&lt;</span>ip<span class="token operator">|</span>interface<span class="token operator">></span><span class="token punctuation">[</span>:port<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>default <span class="token number">0.0</span>.0.0:2377<span class="token punctuation">)</span>
      --max-snapshots uint                     Number of additional Raft snapshots to retain
      --snapshot-interval uint                 Number of log entries between Raft snapshots <span class="token punctuation">(</span>default <span class="token number">10000</span><span class="token punctuation">)</span>
      --task-history-limit int                 Task <span class="token function">history</span> retention limit <span class="token punctuation">(</span>default <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ip a s</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: enp0s3: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 08:00:27:12:b7:b0 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.1</span>.93.12/24 brd <span class="token number">10.1</span>.93.255 scope global noprefixroute dynamic enp0s3
       valid_lft 28641sec preferred_lft 28641sec
    inet <span class="token number">10.1</span>.93.40/24 brd <span class="token number">10.1</span>.93.255 scope global secondary noprefixroute enp0s3
       valid_lft forever preferred_lft forever
    inet6 fe80::8f66:341c:c632:dbe/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed
       valid_lft forever preferred_lft forever
    inet6 fe80::11b0:6c7b:f3d5:528/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed
       valid_lft forever preferred_lft forever
    inet6 fe80::a259:11c5:d707:87d6/64 scope <span class="token function">link</span> tentative noprefixroute dadfailed
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: docker0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">></span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default
    link/ether 02:42:13:36:ad:88 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
       
<span class="token comment"># 初始化swarm集群</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm init --advertise-addr 10.1.93.40</span>
Swarm initialized: current <span class="token function">node</span> <span class="token punctuation">(</span>u0bt4gq1cjcbrr5sm75w7btmg<span class="token punctuation">)</span> is now a manager. <span class="token comment"># swarm初始化，当前节点是一个manager节点</span>

To <span class="token function">add</span> a worker to this swarm, run the following command: <span class="token comment"># 如果想要加入一个worker（工作）节点，就执行下面的命令</span>

    <span class="token function">docker</span> swarm <span class="token function">join</span> --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-bp090fqdn83y8tu0340xjty5n <span class="token number">10.1</span>.93.40:2377

To <span class="token function">add</span> a manager to this swarm, run <span class="token string">'docker swarm join-token manager'</span> and follow the instructions. <span class="token comment"># 如果想要加入一个manager节点，执行该命令来获取令牌。</span>

<span class="token comment"># 获取worker节点令牌 docker swarm join-token worker</span>

<span class="token comment"># 获取manager节点令牌 docker swarm join-token manager</span>


<span class="token comment"># 加入node节点（在node节点中执行）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-bp090fqdn83y8tu0340xjty5n 10.1.93.40:2377</span>
This <span class="token function">node</span> joined a swarm as a worker.
<span class="token comment"># 查看node节点是否加入成功（在master1节点中执行）</span>
root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker node ls</span>
ID                            <span class="token environment constant">HOSTNAME</span>   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
u0bt4gq1cjcbrr5sm75w7btmg *   master1    Ready     Active         Leader           <span class="token number">20.10</span>.8
ygfjk8z1o38ojxcp9bmh8djxs     <span class="token function">node</span>       Ready     Active                          <span class="token number">20.10</span>.8
<span class="token comment"># 新增node，node节点加入成功</span>

<span class="token comment"># 加入manager节点</span>
<span class="token comment"># 获取manager节点令牌（在master节点中执行）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm join-token manager</span>
To <span class="token function">add</span> a manager to this swarm, run the following command:

    <span class="token function">docker</span> swarm <span class="token function">join</span> --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g <span class="token number">10.1</span>.93.40:2377
<span class="token comment"># 加入master2（在master2中执行）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g 10.1.93.40:2377</span>
This <span class="token function">node</span> joined a swarm as a manager.
<span class="token comment"># 加入master3（在master3中执行）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm join --token SWMTKN-1-0sal3yuz8pf9fqku0q284jpwonbulc1auelurkcikqhyqhk91q-5ruytdhj863jahojyzd0h031g 10.1.93.40:2377</span>
This <span class="token function">node</span> joined a swarm as a manager.
<span class="token comment"># 查看manager节点是否加入成功（在master1节点中执行）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker node ls</span>
ID                            <span class="token environment constant">HOSTNAME</span>   STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
u0bt4gq1cjcbrr5sm75w7btmg *   master1    Ready     Active         Leader           <span class="token number">20.10</span>.8
eumyzjkk6y8hy3qiw1fdiu6nm     master2    Ready     Active         Reachable        <span class="token number">20.10</span>.8
jjcybt4dhej1tfl9zmhatnvzi     master3    Ready     Active         Reachable        <span class="token number">20.10</span>.8
ygfjk8z1o38ojxcp9bmh8djxs     <span class="token function">node</span>       Ready     Active                          <span class="token number">20.10</span>.8
<span class="token comment"># 新增master2， master3，两个master节点加入成功</span>
<span class="token comment"># 至此，集群搭建完毕</span>
<span class="token comment"># 只有管理节点才能执行docker swarm命令.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br></div></div><h3 id="raft协议" tabindex="-1"><a class="header-anchor" href="#raft协议" aria-hidden="true">#</a> Raft协议</h3>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927143258137.png" alt="image-20210927143258137"></p>
<blockquote>
<p>定义：保证大多数节点存活才可以使用。</p>
</blockquote>
<p>如果两主两从，挂了一个主节点，另外一个主节点也不能用了。</p>
<p>如果三住一从，挂了一个主节点，另外两个可以使用；如果挂了两个主节点，另外一个也不能用了。</p>
<h3 id="体会" tabindex="-1"><a class="header-anchor" href="#体会" aria-hidden="true">#</a> 体会</h3>
<p>可以类比k8s。</p>
<p>命令：<code>docker service</code></p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927151040966.png" alt="image-20210927151040966"></p>
<h4 id="创建服务" tabindex="-1"><a class="header-anchor" href="#创建服务" aria-hidden="true">#</a> 创建服务</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 启动nginx服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service create -p 8888:80 --name my-nginx nginx</span>
3ab10q4uk6ujhiukrelj8i804
overall progress: <span class="token number">1</span> out of <span class="token number">1</span> tasks
<span class="token number">1</span>/1: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
verify: Service converged

<span class="token comment"># 查看服务列表</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service ls</span>
ID             NAME       MODE         REPLICAS   IMAGE          PORTS
3ab10q4uk6uj   my-nginx   replicated   <span class="token number">1</span>/1        nginx:latest   *:8888-<span class="token operator">></span><span class="token number">80</span>/tcp

<span class="token comment"># 查看服务运行状态</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service ps my-nginx</span>
ID             NAME         IMAGE          NODE      DESIRED STATE   CURRENT STATE           ERROR     PORTS
89duy7m0qs22   my-nginx.1   nginx:latest   master1   Running         Running <span class="token number">4</span> minutes ago
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>dokcer run 和 docker service 对比：</p>
</blockquote>
<ul>
<li>docker run：容器启动，单机版，不具有扩缩容功能</li>
<li>docker service：服务启动，集群操作，具有扩缩容功能</li>
</ul>
<p>==docker swarm创建的服务随机分配到各个节点上，包括master节点和node节点==</p>
<blockquote>
<p>副本服务与全局服务</p>
</blockquote>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927164301904.png" alt="image-20210927164301904"></p>
<ul>
<li>副本服务：只运行在worker节点上</li>
<li>全局服务：既可运行在worker节点上，又可运行在manager节点上。默认为全局服务</li>
</ul>
<p>==可以使用--mode设置服务规则==</p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927164615544.png" alt="image-20210927164615544"></p>
<h4 id="动态扩缩容" tabindex="-1"><a class="header-anchor" href="#动态扩缩容" aria-hidden="true">#</a> 动态扩缩容</h4>
<blockquote>
<p>两种方法</p>
</blockquote>
<ul>
<li>docker service update --replicas</li>
<li>docker service scale</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 使用 docker service update --replicas 将my-nginx扩展为3个副本</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service update --replicas 3 my-nginx</span>
my-nginx
overall progress: <span class="token number">3</span> out of <span class="token number">3</span> tasks
<span class="token number">1</span>/3: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">2</span>/3: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">3</span>/3: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
verify: Service converged

<span class="token comment"># 查看服务列表</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service ls</span>
ID             NAME       MODE         REPLICAS   IMAGE          PORTS
3ab10q4uk6uj   my-nginx   replicated   <span class="token number">3</span>/3        nginx:latest   *:8888-<span class="token operator">></span><span class="token number">80</span>/tcp

<span class="token comment"># 使用docker service scale 将my-nginx扩展为5个副本</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service scale my-nginx=5</span>
my-nginx scaled to <span class="token number">5</span>
overall progress: <span class="token number">5</span> out of <span class="token number">5</span> tasks
<span class="token number">1</span>/5: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">2</span>/5: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">3</span>/5: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">4</span>/5: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
<span class="token number">5</span>/5: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>
verify: Service converged

<span class="token comment"># 查看服务列表</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service ls</span>
ID             NAME       MODE         REPLICAS   IMAGE          PORTS
3ab10q4uk6uj   my-nginx   replicated   <span class="token number">5</span>/5        nginx:latest   *:8888-<span class="token operator">></span><span class="token number">80</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>动态更新</p>
<p>灰度发布（金丝雀发布）</p>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<blockquote>
<p>task：容器内的命令，细节任务！</p>
</blockquote>
<p>一个service可创建多个副本，每个副本都是一个task任务，每个task任务中运行一个容器。</p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927163554140.png" alt="image-20210927163554140"></p>
<h3 id="内部原理" tabindex="-1"><a class="header-anchor" href="#内部原理" aria-hidden="true">#</a> 内部原理</h3>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927163700269.png" alt="image-20210927163700269"></p>
<h3 id="网络模式" tabindex="-1"><a class="header-anchor" href="#网络模式" aria-hidden="true">#</a> 网络模式</h3>
<ul>
<li>
<p>Overlay：使得各个节点能够ping通，变成一个集群。</p>
</li>
<li>
<p>ingress：特殊的Overlay，具有负载均衡的功能。</p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927165146601.png" alt="image-20210927165146601"></p>
</li>
</ul>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927165458817.png" alt="image-20210927165458817"></p>
<h2 id="docker-stack" tabindex="-1"><a class="header-anchor" href="#docker-stack" aria-hidden="true">#</a> Docker Stack</h2>
<p>docker-compose 单击部署项目。</p>
<p>Docker Stack 集群部署项目。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 单击部署</span>
<span class="token function">docker-compose</span> up -d wordpress

<span class="token comment"># 集群部署</span>
<span class="token function">docker</span> stack deploy wordpress.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="docker-secret" tabindex="-1"><a class="header-anchor" href="#docker-secret" aria-hidden="true">#</a> Docker Secret</h2>
<p>安全！配置密码，证书</p>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927170033213.png" alt="image-20210927170033213"></p>
<h2 id="docker-config" tabindex="-1"><a class="header-anchor" href="#docker-config" aria-hidden="true">#</a> Docker Config</h2>
<p><img src="@source/tang/docker/images/Docker进阶/image-20210927170100944.png" alt="image-20210927170100944"></p>
<h2 id="扩展到k8s" tabindex="-1"><a class="header-anchor" href="#扩展到k8s" aria-hidden="true">#</a> 扩展到K8S</h2>
<p><strong>云原生时代</strong></p>
<p>超过10台服务器，首选k8s，而非docker swarm！</p>
<p>先掌握go语言，在学习k8s会更好。</p>
<p>java就是用go语言写的。</p>
<p>go的效率接近于c语言。</p>
</template>
