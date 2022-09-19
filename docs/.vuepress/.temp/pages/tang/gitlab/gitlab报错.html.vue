<template><h1 id="_1-gitlab报503错误" tabindex="-1"><a class="header-anchor" href="#_1-gitlab报503错误" aria-hidden="true">#</a> 1.gitlab报503错误</h1>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <img src="@source/tang/gitlab/images/gitlab报错/gitlab_error_1.png" alt="gitlab_error_1"></h1>
<p>解决步骤：</p>
<p>1.查看gitlab状态</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gitlab-ctl status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/tang/gitlab/images/gitlab报错/gitlab_error_1_step_1.png" alt=""></p>
<p>2.从1中看到是gitaly down了，删掉/var/opt/gitlab/gitaly/gitaly.pid文件，重启即可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#删掉/var/opt/gitlab/gitaly/gitaly.pid文件</span>
<span class="token function">rm</span> /var/opt/gitlab/gitaly/gitaly.pid
<span class="token comment">#重启gitlab</span>
gitlab-ctl restart
<span class="token comment">#再次查看gitlab状态</span>
gitlab-ctl status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="@source/tang/gitlab/images/gitlab报错/gitlab_error_1_step_2.png" alt=""></p>
</template>
