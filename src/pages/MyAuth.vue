<template>
 <div class="body">
   <header-entry/>
   <my-submit/>
   <my-footer/>
 </div>
</template>

<script>


import MySubmit from "@/components/MySubmit.vue";
import MyFooter from "@/components/MyFooter.vue";
import HeaderEntry from "@/components/HeaderEntry.vue";

export default {
  components: {HeaderEntry, MyFooter, MySubmit}
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>