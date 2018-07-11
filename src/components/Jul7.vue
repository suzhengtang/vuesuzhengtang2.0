<template>
    <div class="Jul7">
      <p>练习使我快速成长！</p>
      <ol>
        <li>微信小程序的认识；</li>
        <li>微信小程序结构目录的划分；</li>
        <li>微信小程序属性的认识。</li>
      </ol>
      <div class="btn">
        <button @click="btnHref1()">{{btn1}}</button>
        <button @click="btnHref2()">{{btn2}}</button>
        <button @click="btnHref3()">{{btn3}}</button>
        <button @click="btnHref4()" class="current">{{btn4}}</button>
        <button @click="btnHref5()">{{btn5}}</button>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Jul7",
      data(){
        return{
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
      methods: {
        btnHref1() {    //新开窗口跳转
          const {href} = this.$router.resolve({path: this.href1});
          window.open(href);
        },
        btnHref2() {    //本窗口跳转
          this.$router.push({path: this.href2});
        },
        btnHref3() {
          const {href} = this.$router.resolve({path: this.href3});
          window.open(href);
          // this.$router.push({path: this.href3});
        },
        btnHref4() {
          // const {href} = this.$router.resolve({path: this.href4});
          // window.open(href);
          this.$router.push({path: this.href4});
        },
        btnHref5() {
          const {href} = this.$router.resolve({path: this.href5});
          window.open(href);
          // this.$router.push({path: this.href5});
        }
      }
    }
</script>

<style scoped lang="less">
  .Jul7{
    width: 80%;
    height: auto;
    margin: 0 auto;
    background-color: #ccc;
    p{
      font-size: 20px;
      color: blue;
      font-weight: bold;
    }
    ol{
      li{
        text-align: left;
      }
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
