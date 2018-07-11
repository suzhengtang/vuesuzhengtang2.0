<template>
<div class="Jul4">
  <p>{{msg}}</p>
  <div class="btn">
    <button @click="btnHref1()">{{btn1}}</button>
    <button @click="btnHref2()" class="current">{{btn2}}</button>
    <button @click="btnHref3()">{{btn3}}</button>
    <button @click="btnHref4()">{{btn4}}</button>
    <button @click="btnHref5()">{{btn5}}</button>
  </div>
</div>
</template>

<script>
    export default {
        name: "Jul4",
        data(){
            return {
              msg: "今天开始学习小程序开发,所以进度有点慢，不过没关系，我会全方面的学习！",
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
      methods:{
        btnHref1() {
          const { href } = this.$router.resolve({path: this.href1});
          window.open(href);
        },
        btnHref2() {
          // const { href } = this.$router.resolve({path: this.href1});
          // window.open(href);
          this.$router.push({path: this.href2});
          alert('我就是当前页')
        },
        btnHref3() {
          const { href } = this.$router.resolve({path: this.href3});
          window.open(href);
        },
        btnHref4() {
          const { href } = this.$router.resolve({path: this.href4});
          window.open(href);
        },
        btnHref5() {
          const { href } = this.$router.resolve({path: this.href5});
          window.open(href);
        }
      }
    }
</script>

<style scoped lang="less">
  .Jul4{
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
