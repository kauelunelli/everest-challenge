<template>
  <header>
    <div class="title">
      <span>Clientes</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background-color: #e02b57;
  color: #fff;
}

.title {
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

header span {
  text-transform: uppercase;
  font-size: small;
  font-weight: bold;
}
</style>