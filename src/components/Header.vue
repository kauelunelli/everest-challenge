<template>
  <header>
    <div class="title">
      <span>{{ getTitle }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerTitle: "Teste"
    }
  },
  computed: {
    getTitle() {
      let title = "Usuários"
      if (this.$route.path === "/register") {
        title = "Cadastro"
      } 
      return title
    }
  }
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