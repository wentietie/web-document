<template><h1 id="nacos的使用" tabindex="-1"><a class="header-anchor" href="#nacos的使用" aria-hidden="true">#</a> Nacos的使用</h1>
<center style="font-size: 30px; font-weight: 900">Nacos的使用</center>
<p>Nacos官方文档：https://nacos.io/zh-cn/docs/quick-start.html</p>
<h1 id="_1-windows环境启动nacos" tabindex="-1"><a class="header-anchor" href="#_1-windows环境启动nacos" aria-hidden="true">#</a> 1.windows环境启动Nacos</h1>
<ul>
<li>环境准备： 64 bit JDK 1.8+ 、 Maven 3.2.x+</li>
<li>Nacos有两种启动方式。一种是下载源码，进行编译后再启动；另一种是直接下载<code>nacos-server-$version.zip</code>解压后再启动。本文介绍使用下载zip文件的方式进行启动。</li>
<li>目前稳定版本是1.4.1，推荐使用该版本，下载地址：https://github.com/alibaba/nacos/releases/download/1.4.1/nacos-server-1.4.1.zip。我这里使用的是最新版2.0.0。</li>
</ul>
<h2 id="_1-1解压" tabindex="-1"><a class="header-anchor" href="#_1-1解压" aria-hidden="true">#</a> 1.1解压</h2>
<p><img src="@source/tang/mservice/images/nacos的使用/1616641821310.png" alt="1616641821310"></p>
<h2 id="_1-2创建数据库" tabindex="-1"><a class="header-anchor" href="#_1-2创建数据库" aria-hidden="true">#</a> 1.2创建数据库</h2>
<p>在mysql中创建nacos数据库，导入<code>D:\Nacos\nacos\conf\nacos-mysql.sql</code>:</p>
<p><img src="@source/tang/mservice/images/nacos的使用/1616642793574.png" alt="1616642793574"></p>
<h2 id="_1-3修改配置文件" tabindex="-1"><a class="header-anchor" href="#_1-3修改配置文件" aria-hidden="true">#</a> 1.3修改配置文件</h2>
<p>用记事本打开<code>D:\Nacos\nacos\conf\application.properties</code>文件进行修改。</p>
<p><img src="@source/tang/mservice/images/nacos的使用/1616642006422.png" alt="1616642006422"></p>
<h2 id="_1-4启动" tabindex="-1"><a class="header-anchor" href="#_1-4启动" aria-hidden="true">#</a> 1.4启动</h2>
<p>cmd进入<code>D:\Nacos\nacos\bin</code>路径，执行<code>startup.cmd -m standalone</code>命令。</p>
<p><img src="@source/tang/mservice/images/nacos的使用/1616643085380.png" alt="1616643085380"></p>
<h2 id="_1-5访问" tabindex="-1"><a class="header-anchor" href="#_1-5访问" aria-hidden="true">#</a> 1.5访问</h2>
<p>浏览器输入http://localhost:8848/nacos/ 进行访问。登录账号/密码为：nacos/nacos</p>
<p><img src="@source/tang/mservice/images/nacos的使用/1616643201018.png" alt="1616643201018"></p>
<h1 id="_2-云平台部署nacos" tabindex="-1"><a class="header-anchor" href="#_2-云平台部署nacos" aria-hidden="true">#</a> 2.云平台部署Nacos</h1>
<p>一个yaml文件搞定~</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8848</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>server
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8848</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
<span class="token key atrule">data</span><span class="token punctuation">:</span> <span class="token comment"># 根据自己的数据库信息进行配置</span>
  <span class="token key atrule">mysql.db.name</span><span class="token punctuation">:</span> <span class="token string">"ry-config"</span>
  <span class="token key atrule">mysql.port</span><span class="token punctuation">:</span> <span class="token string">"3306"</span>
  <span class="token key atrule">mysql.user</span><span class="token punctuation">:</span> <span class="token string">"root"</span>
  <span class="token key atrule">mysql.password</span><span class="token punctuation">:</span> <span class="token string">"bd@20!Cloud#123"</span>
  <span class="token key atrule">mysql.host</span><span class="token punctuation">:</span> <span class="token string">"10.1.93.168"</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> pano<span class="token punctuation">-</span>dev <span class="token comment"># 此处改成自己的namespace</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">pod.alpha.kubernetes.io/initialized</span><span class="token punctuation">:</span> <span class="token string">"true"</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">affinity</span><span class="token punctuation">:</span>
        <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span>
          <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
                <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
                  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">"app"</span>
                    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
                    <span class="token key atrule">values</span><span class="token punctuation">:</span>
                      <span class="token punctuation">-</span> nacos
              <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> <span class="token string">"kubernetes.io/hostname"</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> k8snacos
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
          <span class="token key atrule">image</span><span class="token punctuation">:</span> nacos/nacos<span class="token punctuation">-</span>server<span class="token punctuation">:</span>latest
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8848</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> client
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_REPLICAS
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"1"</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_DB_NAME
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.db.name
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_PORT
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.port
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_USER
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.user
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_PASSWORD
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.password
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> MYSQL_SERVICE_HOST
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> nacos<span class="token punctuation">-</span>cm
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> mysql.host
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_SERVER_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"8848"</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_APPLICATION_PORT
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"8848"</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PREFER_HOST_MODE
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"hostname"</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NACOS_SERVERS
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">"nacos-0.nacos-headless.default.svc.cluster.local:8848"</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nacos
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kubectl apply -f nacos.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>访问的话，需要去查询service的端口号进行访问：http://IP:端口号/nacos。</p>
</template>
