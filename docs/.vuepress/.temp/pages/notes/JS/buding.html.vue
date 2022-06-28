<template><h1 id="npm包打补丁" tabindex="-1"><a class="header-anchor" href="#npm包打补丁" aria-hidden="true">#</a> npm包打补丁</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>参考地址：<a href="https://juejin.cn/post/6944999020943114254" target="_blank" rel="noopener noreferrer">临时修改npm库<ExternalLinkIcon/></a></p>
</div>
<p>使用patch-package和postinstall-postinstall</p>
<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2>
<ol>
<li>添加库
yarn add patch-package postinstall-postinstall -D</li>
<li>修改文件
修改需要修改的文件</li>
<li>创建布丁，package-name是修改的包名
npx patch-package package-name</li>
<li>package.json中scripts添加</li>
</ol>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"patch-package"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
