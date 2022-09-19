<template><h1 id="节点notready" tabindex="-1"><a class="header-anchor" href="#节点notready" aria-hidden="true">#</a> 节点notReady</h1>
<p>今天查看节点状态，发现<code>master</code>节点状态为<code>NotReady</code>。排查步骤如下：</p>
<h1 id="_1-查看master-kubelet状态" tabindex="-1"><a class="header-anchor" href="#_1-查看master-kubelet状态" aria-hidden="true">#</a> 1.查看master kubelet状态</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果状态正常，继续按照如下步骤排查。</p>
<p>我这里在该步骤就不正常了，提示<code>找不到节点“master”</code>。我本来设置的<code>master</code>节点的<code>hostname</code>为<code>bdmaster</code>，因此我又查看了下该服务器的<code>hostname</code>，发现该服务器的hostname变成了<code>master</code>。修改<code>hostname</code>后重启服务器，发现master节点正常了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看hostname</span>
<span class="token function">hostname</span>

<span class="token comment"># 修改hostname</span>
hostnamectl set-hostname bdmaster
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="_2-查看master-kube-proxy状态" tabindex="-1"><a class="header-anchor" href="#_2-查看master-kube-proxy状态" aria-hidden="true">#</a> 2.查看master kube-proxy状态</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl status kube-proxy  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_3-查看master-kube-apiserver状态" tabindex="-1"><a class="header-anchor" href="#_3-查看master-kube-apiserver状态" aria-hidden="true">#</a> 3.查看master kube-apiserver状态</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl status kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_4-查看master-kube-scheduler状态" tabindex="-1"><a class="header-anchor" href="#_4-查看master-kube-scheduler状态" aria-hidden="true">#</a> 4.查看master kube-scheduler状态</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl status kube-scheduler 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_5-查看master-etcd状态" tabindex="-1"><a class="header-anchor" href="#_5-查看master-etcd状态" aria-hidden="true">#</a> 5.查看master etcd状态</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl status etcd 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="_6-查看flannel状态" tabindex="-1"><a class="header-anchor" href="#_6-查看flannel状态" aria-hidden="true">#</a> 6.查看flannel状态</h1>
<p>在kubernetes-dashboard上看到flannel挂掉了，查看日志如下</p>
<p><code>Failed create pod sandbox: rpc error: code = Unknown desc = failed to start sandbox container for pod &quot;kube-flannel-ds-amd64-sc7sr&quot;: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused &quot;process_linux.go:301: running exec setns process for init caused \&quot;signal: broken pipe\&quot;&quot;: unknown</code></p>
<p>而这个问题，通过分析应该是flannel在网络比较大的情况下，内存资源不足了，所以修改flannel的配置，将内存扩大即可。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"resources"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"limits"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"cpu"</span><span class="token operator">:</span> <span class="token string">"300m"</span><span class="token punctuation">,</span>
        <span class="token property">"memory"</span><span class="token operator">:</span> <span class="token string">"200Mi"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"requests"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"cpu"</span><span class="token operator">:</span> <span class="token string">"300m"</span><span class="token punctuation">,</span>
        <span class="token property">"memory"</span><span class="token operator">:</span> <span class="token string">"200Mi"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>修改完成之后，需要重启docker，在删除原来的flannel pod，这样问题就解决拉。</p>
</template>
