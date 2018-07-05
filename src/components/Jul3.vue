<template>
  <div class="Jul3">
    <h1>{{msg}}</h1>
    <h2>{{title}}</h2>
    <button @click="onClick()">{{btn}}</button>
  </div>
</template>

<script>
export default {
  name: 'Jul3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Su Zhengtang开始学习vue',
      btn: '学习'
    }
  },
  created() {
    this.ceshi();
  },
  methods:{
    ceshi() {
      let title = "今天开始学习vue！";
      console.log(title);
    },
    onClick() {
      alert("学习知识需要不断的积累，要有一颗持之以恒的心！")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Jul3{
  button{
    width: 100px;
    height: 40px;
    background-color: #608fff;
    color: #fff;
    outline: none;
    border: none;
  }
}
</style>
