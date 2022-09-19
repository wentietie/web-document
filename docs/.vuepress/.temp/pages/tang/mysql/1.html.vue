<template><h1 id="mysql常见问题的解决" tabindex="-1"><a class="header-anchor" href="#mysql常见问题的解决" aria-hidden="true">#</a> mysql常见问题的解决</h1>
<h2 id="_1-mysql8-0时间与系统时间相差8小时" tabindex="-1"><a class="header-anchor" href="#_1-mysql8-0时间与系统时间相差8小时" aria-hidden="true">#</a> 1.mysql8.0时间与系统时间相差8小时</h2>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code># 查看mysql时间
select now();

# 查看时区
show variables like &quot;%time_zone%&quot;;

# 修改mysql全局时区为北京时间，即东八区
set global time_zone = '+8:00';

# 修改当前会话时间为北京时间
set time_zone = '+8:00';

# 刷新配置立即生效
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
