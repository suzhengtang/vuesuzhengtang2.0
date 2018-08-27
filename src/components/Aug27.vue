<template>
    <div class="Aug27">
        <div class="box">{{msg}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: "很久没有学习了！"
        }
    }
}
</script>

<style lang="less" scoped>
    .Aug27{
        width: 400px;
        height: 400px;
        background: #eee;
        margin: 20px auto;
        .box{
            color: red;
        }
    }
</style>


