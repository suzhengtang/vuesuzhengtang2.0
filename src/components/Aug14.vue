<template>
    <div class="Aug14">
        <p @click="move()">{{dataMsg}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataMsg: "开始接单做"
        }
    },
    methods: {
        move() {
            alert("试一下！");
        }
    }
}
</script>

<style lang="less" scoped>

</style>


