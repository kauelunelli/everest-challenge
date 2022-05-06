<template>
  <div id="app">
    <!-- remover o trecho abaixo (somente a linha 4) -->
    <h1> ⛰️ Bem-Vindo(a) ao Everest Challenge! ⛰️</h1>
    <!-- a tag abaixo é responsável por renderizar as páginas da aplicação; não remover -->
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app h1 {
  text-align: center;
}
</style>
