<template>
    <div class="Jul11">
      <p>{{msg}}</p>
      <button @click="number">查看结果</button>
    </div>
</template>

<script>
    export default {
        name: "Jul11",
      data() {
          return{
            msg: '测试上班遇到的问题, 打开F12查看结果',
          }
      },
      created() {
          this.test();
      },
      methods: {
        test() {   //计算数组每项之和
          let arr = ['1', '2', '3', '4'];
          let all = 0;
          for (let i = 0; i < arr.length; i++) {
            all += Number(arr[i]);
          }
          console.log(all);
        },
        number() {
          alert("打开F12查看结果！");
          let arr = [
            {name: '张三', age: '22', sex: '男'},
            {name: '李四', age: '24', sex: '女'},
            {name: '王五', age: '25', sex: '妖'},
            {name: '赵六', age: '26', sex: '男'},
            {name: '李七', age: '28', sex: '妖'},
            {name: '张三', age: '27', sex: '妖'},
            {name: '张三', age: '30', sex: '妖'},
          ];
          let cuu = ['张三', '李四', '王五'];
          // let msgArr = [];
          let msgObj = {};
          for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < cuu.length; j++) {
              if (arr[i].name == cuu[j]) {
                //msgArr.push(arr[i].age);
                if (msgObj[arr[i].name])
                  msgObj[arr[i].name] = (parseInt(msgObj[arr[i].name]) + parseInt(arr[i].age)).toString();
                else
                  msgObj[arr[i].name] = arr[i].age
              }
            }
          }
          //console.log(msgArr);   //["22", "24", "25", "27"]
          //我想打印的结果是 ["49", "24", "25"]，也就是如果有相同的名字，那就取他们年龄的和，该怎么做呢？
          console.log(msgObj);
        },
      }
    }
</script>

<style scoped lang="less">

</style>
