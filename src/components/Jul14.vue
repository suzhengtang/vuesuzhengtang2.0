<template>
    <div class="Jul14">
      <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Jul15",
      data() {
          return {
            title: '工作中遇到的问题，这里我是测试的页面,打开控制台查看结果'
          }
      },
      created() {
          this.test();
      },
      methods: {
          test() {
            let obj = {name: 22,age: 11, sex: 44, fir: 33, myy: 55, drr: 66};
            let arr = [];
            let arry = [77,66,55,44,33,22,11];
            let myArr = [];
            //  如何将对象键值对里面的值按照age-sex-myy-name-sex-drr的顺序放在数组中？
            let item;
            for(item in obj){
              arr.push(obj[item]);
            }
            console.log(arr);
            for(let i=0;i<arry.length;i++){
              for(let j=0;j<arr.length;j++){
                if(arry[i] == arr[j]){
                  myArr.push(arr[j]);
                }
              }
            }
            console.log(myArr);
          }
      }
    }
</script>

<style scoped lang="less">

</style>
