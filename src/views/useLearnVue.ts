import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
export default (data: string) => {
  const learn = ref("");
  const route = useRoute();
  const tryChangeRef = () => {
    if (data === "change") {
      learn.value = data;
    } else {
      console.log(route.path, "22");

      learn.value = "没有改变";
    }
  };
  onMounted(tryChangeRef);
  return {
    learn,
  };
};
