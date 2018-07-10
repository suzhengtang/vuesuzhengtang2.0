<template>
    <div class="Jul10">
      <a href="http://www.51zxw.net/list.aspx?cid=657" :title="hover">{{title}}</a>
    </div>
</template>

<script>
    export default {
        name: "Jul10",
        data(){
          return{
            title: '微信小程序学习视频',
            hover: '点击查看学习视频'
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
  }
</style>
