<!--
 * @Date: 2022-06-13 08:56:40
 * @LastEditors: shen-xu
 * @LastEditTime: 2022-06-16 14:33:56
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <el-button @click="fn">默认按钮</el-button> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    async fn() {
      await this.$http.get("/task/").then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less"></style>
