<template>
  <div class="container header__container">
    <h1 class="header__title">Kanban Board</h1>
  </div>
</template>
<script>


export default {

}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px;
  margin: 0 auto;
}
.header__container {
  background-color: #1c0e5e;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  min-width: 1280px;
  padding: 10px;
  margin-top: 10px;
}
.header__title {
  font-weight: 300;
  background-color: #1c0e5e;
  color: #d9d9d9;
}
</style>