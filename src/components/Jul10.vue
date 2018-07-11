<template>
    <div class="Jul10">
      <a href="http://www.51zxw.net/list.aspx?cid=657" :title="hover">{{title}}</a>

      <div class="btn">
        <button @click="btnHref1()">{{btn1}}</button>
        <button @click="btnHref2()">{{btn2}}</button>
        <button @click="btnHref3()">{{btn3}}</button>
        <button @click="btnHref4()">{{btn4}}</button>
        <button @click="btnHref5()" class="current">{{btn5}}</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Jul10",
        data(){
          return{
            title: '微信小程序学习视频',
            hover: '点击查看学习视频',
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
          const {href} = this.$router.resolve({path: this.href4});
          window.open(href);
          // this.$router.push({path: this.href4});
        },
        btnHref5() {
          // const {href} = this.$router.resolve({path: this.href5});
          // window.open(href);
          this.$router.push({path: this.href5});
        }
      }
    }
</script>

<style scoped lang="less">
  .Jul10{
    padding-top: 80px;
    a{
      font-size: 30px;
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
