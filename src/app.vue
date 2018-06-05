<template>
    <div>hello {{ name }}</div>
</template>

<script>
    export default {
        data: () => {
            return {
                name: 'world 12'
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    div {
        color: #3d3d3d;
    }
</style>