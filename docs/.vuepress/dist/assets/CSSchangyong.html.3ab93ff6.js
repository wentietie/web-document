import{_ as t,c as e}from"./app.a1031244.js";const l={},a=e(`<h1 id="\u4E00\u4E9B\u5E38\u7528css" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u7528css" aria-hidden="true">#</a> \u4E00\u4E9B\u5E38\u7528CSS</h1><h2 id="\u5A92\u4F53\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u67E5\u8BE2" aria-hidden="true">#</a> \u5A92\u4F53\u67E5\u8BE2</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@media not|only mediatype and (mediafeature and|or|not mediafeature) {
  CSS-Code;
}

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (min-width: 900px)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>widescreen.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screen and (max-width: 600px)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>smallscreen.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5A92\u4F53\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u7C7B\u578B" aria-hidden="true">#</a> \u5A92\u4F53\u7C7B\u578B</h3><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">all</td><td style="text-align:left;">\u9ED8\u8BA4\u3002\u7528\u4E8E\u6240\u6709\u5A92\u4F53\u7C7B\u578B\u8BBE\u5907\u3002</td></tr><tr><td style="text-align:left;">print</td><td style="text-align:left;">\u7528\u4E8E\u6253\u5370\u673A\u3002</td></tr><tr><td style="text-align:left;">screen</td><td style="text-align:left;">\u7528\u4E8E\u8BA1\u7B97\u673A\u5C4F\u5E55\u3001\u5E73\u677F\u7535\u8111\u3001\u667A\u80FD\u624B\u673A\u7B49\u3002</td></tr><tr><td style="text-align:left;">speech</td><td style="text-align:left;">\u7528\u4E8E\u6717\u8BFB\u9875\u9762\u7684\u5C4F\u5E55\u9605\u8BFB\u5668\u3002</td></tr></tbody></table><h3 id="\u5A92\u4F53\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5A92\u4F53\u7279\u6027" aria-hidden="true">#</a> \u5A92\u4F53\u7279\u6027</h3><table><thead><tr><th style="text-align:left;">\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">any-hover</td><td style="text-align:left;">\u662F\u5426\u6709\u4EFB\u4F55\u53EF\u7528\u7684\u8F93\u5165\u673A\u5236\u5141\u8BB8\u7528\u6237\uFF08\u5C06\u9F20\u6807\u7B49\uFF09\u60AC\u505C\u5728\u5143\u7D20\u4E0A\uFF1F\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">any-pointer</td><td style="text-align:left;">\u53EF\u7528\u7684\u8F93\u5165\u673A\u5236\u4E2D\u662F\u5426\u6709\u4EFB\u4F55\u6307\u9488\u8BBE\u5907\uFF0C\u5982\u679C\u6709\uFF0C\u5B83\u7684\u7CBE\u5EA6\u5982\u4F55\uFF1F\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">aspect-ratio</td><td style="text-align:left;">\u89C6\u53E3\uFF08viewport\uFF09\u7684\u5BBD\u9AD8\u6BD4\u3002</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u6BCF\u4E2A\u50CF\u7D20\u7684\u6BD4\u7279\u503C\uFF0C\u5E38\u89C1\u7684\u6709 8\u300116\u300132 \u4F4D\u3002\u5982\u679C\u8BBE\u5907\u4E0D\u652F\u6301\u8F93\u51FA\u5F69\u8272\uFF0C\u5219\u8BE5\u503C\u4E3A 0\u3002</td></tr><tr><td style="text-align:left;">color-gamut</td><td style="text-align:left;">\u7528\u6237\u4EE3\u7406\u548C\u8F93\u51FA\u8BBE\u5907\u5927\u81F4\u7A0B\u5EA6\u4E0A\u652F\u6301\u7684\u8272\u57DF\u3002\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">color-index</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u7684\u989C\u8272\u67E5\u8BE2\u8868\uFF08color lookup table\uFF09\u4E2D\u7684\u6761\u76EE\u6570\u91CF\u3002\u5982\u679C\u8BBE\u5907\u4E0D\u4F7F\u7528\u989C\u8272\u67E5\u8BE2\u8868\uFF0C\u5219\u8BE5\u503C\u4E3A 0\u3002</td></tr><tr><td style="text-align:left;">device-aspect-ratio</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u7684\u5BBD\u9AD8\u6BD4\u3002\u5DF2\u5728 Media Queries Level 4 \u4E2D\u88AB\u5F03\u7528\u3002</td></tr><tr><td style="text-align:left;">device-height</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u6E32\u67D3\u8868\u9762\uFF08\u5982\u5C4F\u5E55\uFF09\u7684\u9AD8\u5EA6\u3002\u5DF2\u5728 Media Queries Level 4 \u4E2D\u88AB\u5F03\u7528\u3002</td></tr><tr><td style="text-align:left;">device-width</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u6E32\u67D3\u8868\u9762\uFF08\u5982\u5C4F\u5E55\uFF09\u7684\u5BBD\u5EA6\u3002\u5DF2\u5728 Media Queries Level 4 \u4E2D\u88AB\u5F03\u7528\u3002</td></tr><tr><td style="text-align:left;">display-mode</td><td style="text-align:left;">\u5E94\u7528\u7A0B\u5E8F\u7684\u663E\u793A\u6A21\u5F0F\uFF0C\u5982 web app \u7684 manifest \u4E2D\u7684 display \u6210\u5458\u6240\u6307\u5B9A\u5728 Web App Manifest spec \u88AB\u5B9A\u4E49\u3002</td></tr><tr><td style="text-align:left;">forced-colors</td><td style="text-align:left;">\u68C0\u6D4B\u662F\u7528\u6237\u4EE3\u7406\u5426\u9650\u5236\u8C03\u8272\u677F\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">grid</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u4F7F\u7528\u7F51\u683C\u5C4F\u5E55\u8FD8\u662F\u70B9\u9635\u5C4F\u5E55\uFF1F</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">\u89C6\u53E3\uFF08viewport\uFF09\u7684\u9AD8\u5EA6\u3002</td></tr><tr><td style="text-align:left;">hover</td><td style="text-align:left;">\u4E3B\u8F93\u5165\u673A\u5236\u662F\u5426\u5141\u8BB8\u7528\u6237\u5C06\u9F20\u6807\u60AC\u505C\u5728\u5143\u7D20\u4E0A\uFF1F\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">inverted-colors</td><td style="text-align:left;">\u6D4F\u89C8\u5668\u6216\u8005\u5E95\u5C42\u64CD\u4F5C\u7CFB\u7EDF\u662F\u5426\u53CD\u8F6C\u4E86\u989C\u8272\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">light-level</td><td style="text-align:left;">\u5F53\u524D\u73AF\u5883\u5149\u6C34\u5E73\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">max-aspect-ratio</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E4B\u95F4\u7684\u6700\u5927\u6BD4\u4F8B\u3002</td></tr><tr><td style="text-align:left;">max-color</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u6BCF\u4E2A\u989C\u8272\u5206\u91CF\u7684\u6700\u5927\u4F4D\u6570\u3002</td></tr><tr><td style="text-align:left;">max-color-index</td><td style="text-align:left;">\u8BBE\u5907\u53EF\u4EE5\u663E\u793A\u7684\u6700\u5927\u989C\u8272\u6570\u3002</td></tr><tr><td style="text-align:left;">max-height</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u6700\u5927\u9AD8\u5EA6\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</td></tr><tr><td style="text-align:left;">max-monochrome</td><td style="text-align:left;">\u5355\u8272\uFF08\u7070\u5EA6\uFF09\u8BBE\u5907\u4E0A\u6BCF\u79CD\u201C\u989C\u8272\u201D\u7684\u6700\u5927\u4F4D\u6570\u3002</td></tr><tr><td style="text-align:left;">max-resolution</td><td style="text-align:left;">\u8BBE\u5907\u7684\u6700\u5927\u5206\u8FA8\u7387\uFF0C\u4F7F\u7528 dpi \u6216 dpcm\u3002</td></tr><tr><td style="text-align:left;">max-width</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</td></tr><tr><td style="text-align:left;">min-aspect-ratio</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u4E4B\u95F4\u7684\u6700\u5C0F\u6BD4\u4F8B\u3002</td></tr><tr><td style="text-align:left;">min-color</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u6BCF\u4E2A\u989C\u8272\u5206\u91CF\u7684\u6700\u5C0F\u4F4D\u6570\u3002</td></tr><tr><td style="text-align:left;">min-color-index</td><td style="text-align:left;">\u8BBE\u5907\u53EF\u4EE5\u663E\u793A\u7684\u6700\u5C0F\u989C\u8272\u6570\u3002</td></tr><tr><td style="text-align:left;">min-height</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u6700\u5C0F\u9AD8\u5EA6\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</td></tr><tr><td style="text-align:left;">min-monochrome</td><td style="text-align:left;">\u5355\u8272\uFF08\u7070\u5EA6\uFF09\u8BBE\u5907\u4E0A\u6BCF\u79CD\u201C\u989C\u8272\u201D\u7684\u6700\u5C0F\u4F4D\u6570\u3002</td></tr><tr><td style="text-align:left;">min-resolution</td><td style="text-align:left;">\u8BBE\u5907\u7684\u6700\u4F4E\u5206\u8FA8\u7387\uFF0C\u4F7F\u7528 dpi \u6216 dpcm\u3002</td></tr><tr><td style="text-align:left;">min-width</td><td style="text-align:left;">\u663E\u793A\u533A\u57DF\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u4F8B\u5982\u6D4F\u89C8\u5668\u7A97\u53E3\u3002</td></tr><tr><td style="text-align:left;">monochrome</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u5355\u8272\u5E27\u7F13\u51B2\u533A\u4E2D\u6BCF\u4E2A\u50CF\u7D20\u7684\u4F4D\u6DF1\u5EA6\u3002\u5982\u679C\u8BBE\u5907\u5E76\u975E\u9ED1\u767D\u5C4F\u5E55\uFF0C\u5219\u8BE5\u503C\u4E3A 0\u3002</td></tr><tr><td style="text-align:left;">orientation</td><td style="text-align:left;">\u89C6\u7A97\uFF08viewport\uFF09\u7684\u65CB\u8F6C\u65B9\u5411\uFF08\u6A2A\u5C4F\u8FD8\u662F\u7AD6\u5C4F\u6A21\u5F0F\uFF09\u3002</td></tr><tr><td style="text-align:left;">overflow-block</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u5982\u4F55\u5904\u7406\u6CBF\u5757\u8F74\u6EA2\u51FA\u89C6\u53E3(viewport)\u7684\u5185\u5BB9\u3002\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">overflow-inline</td><td style="text-align:left;">\u6CBF\u5185\u8054\u8F74\u6EA2\u51FA\u89C6\u53E3(viewport)\u7684\u5185\u5BB9\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8\uFF1F\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">pointer</td><td style="text-align:left;">\u4E3B\u8981\u8F93\u5165\u673A\u5236\u662F\u4E00\u4E2A\u6307\u9488\u8BBE\u5907\u5417\uFF1F\u5982\u679C\u662F\uFF0C\u5B83\u7684\u7CBE\u5EA6\u5982\u4F55\uFF1F\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">prefers-color-scheme</td><td style="text-align:left;">\u63A2\u6D4B\u7528\u6237\u503E\u5411\u4E8E\u9009\u62E9\u4EAE\u8272\u8FD8\u662F\u6697\u8272\u7684\u914D\u8272\u65B9\u6848\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">prefers-contrast</td><td style="text-align:left;">\u63A2\u6D4B\u7528\u6237\u662F\u5426\u6709\u5411\u7CFB\u7EDF\u8981\u6C42\u63D0\u9AD8\u6216\u964D\u4F4E\u76F8\u8FD1\u989C\u8272\u4E4B\u95F4\u7684\u5BF9\u6BD4\u5EA6\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">prefers-reduced-motion</td><td style="text-align:left;">\u7528\u6237\u662F\u5426\u5E0C\u671B\u9875\u9762\u4E0A\u51FA\u73B0\u66F4\u5C11\u7684\u52A8\u6001\u6548\u679C\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">prefers-reduced-transparency</td><td style="text-align:left;">\u7528\u6237\u662F\u5426\u503E\u5411\u4E8E\u9009\u62E9\u66F4\u4F4E\u7684\u900F\u660E\u5EA6\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">resolution</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u7684\u5206\u8FA8\u7387\uFF0C\u4F7F\u7528 dpi \u6216 dpcm\u3002</td></tr><tr><td style="text-align:left;">scan</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u7684\u626B\u63CF\u8FC7\u7A0B\uFF08\u9002\u7528\u4E8E\u7535\u89C6\u7B49\uFF09\u3002</td></tr><tr><td style="text-align:left;">scripting</td><td style="text-align:left;">\u63A2\u6D4B\u811A\u672C\uFF08\u4F8B\u5982 JavaScript\uFF09\u662F\u5426\u53EF\u7528\u3002\u5728 Media Queries Level 5 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">update</td><td style="text-align:left;">\u8F93\u51FA\u8BBE\u5907\u66F4\u65B0\u5185\u5BB9\u7684\u6E32\u67D3\u7ED3\u679C\u7684\u9891\u7387\u3002\u5728 Media Queries Level 4 \u4E2D\u88AB\u6DFB\u52A0\u3002</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">\u89C6\u7A97\uFF08viewport\uFF09\u7684\u5BBD\u5EA6\u3002</td></tr></tbody></table><h2 id="\u6587\u5B57\u6E10\u53D8\u8272" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u6E10\u53D8\u8272" aria-hidden="true">#</a> \u6587\u5B57\u6E10\u53D8\u8272</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>background-image: linear-gradient(to right, orange, purple);
-webkit-background-clip: text;
color: transparent;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9);function n(s,d){return a}var r=t(l,[["render",n],["__file","CSSchangyong.html.vue"]]);export{r as default};
