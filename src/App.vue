<template>
  <div id="app">
    <Header/>
    <Navbar/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Header from "./components/Header.vue"



export default {
  name: 'App',
  data() {
    return {
      headerTitle: "Usuários"
    }
  },
  components: {
    Header,
    Navbar,

}
}
</script>

<style>
/* SINTA-SE A VONTADE PARA ALTERAR ESSAS ESTILIZAÇÕES BASICAS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.view-container{
  margin: auto;
  max-width: 1000px;

}


</style>
