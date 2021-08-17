<template>
  <div>
  <div id="nav" class=" bg-font-dark-blue text-white py-5 px-2">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">RichInput</router-link>
  </div>
  <router-view />
  </div>
</template>
<style lang="less" scoped>
.gray-cover{
  z-index: 999999999999999;
}
</style>