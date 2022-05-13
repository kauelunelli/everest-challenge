<template>
  <div>
    <h1>Lista de Usuários</h1>
    <div class="btn-container">
      <button type="button" @click="register">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    register() {
      this.$router.push({ path: "/register" })
    }
  }
}
</script>

<style scoped>
.btn-container {
  text-align: center;
}
</style>