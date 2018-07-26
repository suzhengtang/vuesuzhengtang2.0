<template>
    <div class="Jul26">
      <div>{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "Jul26",
      data() {
          return {
            msg: "我是测试的文字1"
          }
      }
    }
</script>

<style scoped lang="less">
  .Jul26{
    width: 200px;
    height: 200px;
    border: 1px solid red;
    margin: 0 auto;
    div{
      width: 100px;
      height: 100px;
      background: #ccc;
    }
  }
</style>
