<template>
  <div class="home">
    <div>
      <div class='text-xl'>改框架适配Vue+TS+Tailwind,如果不安装tailwind和Less预编工具有些样式会失效</div>
      <ol class=" text-sm opacity-75 pl-5">
        <li @click="$router.push('/richInput')" class=" cursor-pointer">
          - 富文本编辑工具
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useLearnVue from "./useLearnVue";

export default defineComponent({
  setup(props, context) {
    const { learn } = useLearnVue("k");
    return {
      learn,
    };
  },

  mounted() {
    console.log(this.learn);
  },
});
</script>

<style lang="less" scoped>

</style>