<template><h4 id="父子组件" tabindex="-1"><a class="header-anchor" href="#父子组件" aria-hidden="true">#</a> 父子组件</h4>
<p>父组件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>template>
  &lt;div>
    &lt;input type="text" v-model="currentValue">
    &lt;customInput
    	ref="child"
      :params-test="currentValue"
      @changeFatherValue="changeFatherValue"
    />
  &lt;/div>
&lt;/template>

&lt;script>
import customInput from './test'
export default {
  name: "second",
  components: {
    customInput
  },
  data(){
    return{
      currentValue: ''
    }
  },
  methods:{
    changeFatherValue(value){
      this.currentValue = value
    },
    
    // 调用子组件方法
    exeChildFunc(){
    	this.$refs.child.otherFunc()
    }
  }
}
&lt;/script>

&lt;style scoped>

&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>子组件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>
&lt;div class="">
  &lt;input type="text" @input="inputFunc" v-model="value">
&lt;/div>
&lt;/template>

&lt;script>
export default {
  name: "test",
  props: ['paramsTest'],
  data(){
    return{
      value:''
    }
  },
  methods:{
    inputFunc(){
    
    	// 调用父组件方法
      this.$emit('changeFatherValue', this.value)
    },
    otherFunc(){}
  },
}
&lt;/script>

&lt;style scoped>

&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
