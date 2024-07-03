<template>
  <my-header :userId = 'userId'/>
  <my-board :userId = 'userId'/>
  <my-footer/>
</template>

<script>

import MyBoard from "@/components/MyBoard.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  components: {MyFooter, MyHeader, MyBoard},
  props: ['userId']
}
</script>

<style lang="scss" scoped>

</style>