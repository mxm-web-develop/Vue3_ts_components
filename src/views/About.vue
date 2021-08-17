<template>
  <div>
    <Tiptap></Tiptap>
  </div>
</template>

<script lang="ts">
import { defineComponent,defineAsyncComponent } from "vue";
// import Tiptap from '@/components/RichInput/index.vue'
const Tiptap = defineAsyncComponent(()=>import('@/components/RichInput/index.vue'))
export default defineComponent({
  components:{
    'Tiptap':Tiptap
  },
  data(){
    return{
      richiText:''
    }
  },
    methods:{
    getValue(data:any){
      console.log(data);
      
    }
  },
});
</script>
