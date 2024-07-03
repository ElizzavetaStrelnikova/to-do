<template>
  <main>
    <div class="body">
      <router-view/>
    </div>
  </main>
</template>

<script>



export default {
  name: 'App',
}
</script>

<style>
* {
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2b1887;
  color: white;
  min-height: 100vh;
  min-width: 380px;
}
</style>
