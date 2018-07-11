<template>
  <div class="Jul3">
    <h1>{{msg}}</h1>
    <h2>{{title}}</h2>
    <button @click="onClick()">{{btn}}</button>
    <div class="btn">
      <button @click="btnHref1()" class="current">{{btn1}}</button>
      <button @click="btnHref2()">{{btn2}}</button>
      <button @click="btnHref3()">{{btn3}}</button>
      <button @click="btnHref4()">{{btn4}}</button>
      <button @click="btnHref5()">{{btn5}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jul3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Su Zhengtang开始学习vue',
      btn: '学习',
      btn1: 'Jul3学习',
      btn2: 'Jul4学习',
      btn3: 'Jul5学习',
      btn4: 'Jul7学习',
      btn5: 'Jul10学习',
      href1: '/',
      href2: '/Jul4',
      href3: '/Jul5',
      href4: '/Jul7',
      href5: '/Jul10',
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
    },
    btnHref1() {    //新开窗口跳转
      // const {href} = this.$router.resolve({path: this.href1});
      // window.open(href);
      this.$router.push({path:this.href1});
      alert("我就是当前页面")
    },
    btnHref2() {    //本窗口跳转
      const {href} = this.$router.resolve({path: this.href2});
      window.open(href);
      // this.$router.push({path: this.href2});
    },
    btnHref3() {
      const {href} = this.$router.resolve({path: this.href3});
      window.open(href);
      // this.$router.push({path: this.href3});
    },
    btnHref4() {
      const {href} = this.$router.resolve({path: this.href4});
      window.open(href);
      // this.$router.push({path: this.href4});
    },
    btnHref5() {
      const {href} = this.$router.resolve({path: this.href5});
      window.open(href);
      // this.$router.push({path: this.href5});
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
  .btn{
    padding-top: 50px;
    button{
      padding: 10px 20px;
      background-color: #6790ff;
      outline: none;
      border: none;
      color: #fff;
      margin: 0 10px;
      cursor: pointer;
    }
    .current{
      background-color: orangered;
    }
  }
}
</style>
