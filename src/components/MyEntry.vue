<template>

      <div class="entry-container">
        <div class="entry-text">
          <h2>Планируй задачи - упрощай жизнь</h2>
          <p>Простое решение для сложных задач</p>
        </div>
        <div class="entry-modal">
          <auth-modal/>
        </div>
      </div>

</template>

<script>

import AuthModal from "@/components/AuthModal.vue";

export default {
  components: {AuthModal}

}
</script>

<style lang="scss" scoped>
.entry-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #2b1887;
  color: white;
  min-height: 100vh;
  min-width: 380px;
}
.entry-container {
  display: flex;
  flex-direction: row;
  min-width: 380px;
}
.entry-text {
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  padding-top: 100px;
}
.entry-text h2{
  font-size: 35px;
}
.entry-text p{
  font-size: 25px;
  padding-top: 20px;
}
</style>