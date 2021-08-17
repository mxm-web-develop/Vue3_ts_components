<template>
  <div class=" object-cover">
      <!-- <div v-show="type==='png'" >
        <img src="" class="object-cover object-center  " >
      </div> -->
        <svg v-show="type==='svg'" aria-hidden="true" :height="size" :width="size" :fill="color">
          <use :xlink:href="'#'+name" ></use> 
        </svg>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent( {
  props: {
    type: {
      type:String,
      default:'svg'
    },
    size:{
      type:String,
      default:'14px'
    },
    color:{
      type:String,
      default:'#ffffff'
    },
    name:{
      type:String,
      default:'icon-anquanzhongxin89'
    }
  }
})
</script>

