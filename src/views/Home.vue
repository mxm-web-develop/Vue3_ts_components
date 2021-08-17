<template>
  <div class="home">
    <div class="playLess">sdlfsdlfkjsdk</div>
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
.playLess{
  color: aqua;
}
</style>