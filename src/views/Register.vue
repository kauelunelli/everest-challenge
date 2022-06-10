<template>
  <div class="form-container">
    <h2>Dados de Contato</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nos</p>
    <div class="form-content">
      <input class="input" type="text">
      <input class="input" type="text">
      <input class="input" type="text">




    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style scoped>

.form-content{
  display: grid;
  grid-template-rows: 2fr 2fr 2fr;
  grid-template-columns: 1fr 2fr;

  
}

</style>