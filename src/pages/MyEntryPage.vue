<template>
  <div class="body">
    <header-entry/>
    <my-submit/>
    <my-footer/>
  </div>
</template>

<script>


import HeaderEntry from "@/components/HeaderEntry.vue";
import MyFooter from "@/components/MyFooter.vue";
import MySubmit from "@/components/MySubmit.vue";

export default {
  components: {MyFooter, HeaderEntry, MySubmit}
}
</script>

<style>
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
