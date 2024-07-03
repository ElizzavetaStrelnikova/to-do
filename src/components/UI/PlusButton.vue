<template>
    <div class="header__option">
      <img class='header__icon' src="../../assets/svg/plus_header.svg">
    </div>
</template>

<script>
export default {
  name: 'plus-button',
}
</script>

<style lang="scss" scoped>
.header__option {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header__icon {
  background-color: #1c0e5e;
}
</style>