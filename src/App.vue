<template>
  <div>
  <!-- <div id='linkModal' class="fixed w-full h-full">
    <div class='gray-cover bg-font-dark-blue h-full w-full '></div>
  </div> -->

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
    </div>
</template>
<style lang="less" scoped>
.gray-cover{
  z-index: 999999999999999;
}
</style>