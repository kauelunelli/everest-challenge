<template>
  <div class="navbar-content">
    <button class="btn-nav" :disabled="change" @click.prevent="changePage()">CADASTRO</button>
    <button class="btn-nav" :disabled="!change" @click.prevent="changePage()">LISTAGEM</button>

  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return{
      change: false,


    }
  },

  methods: {
    changePage(){
      if(!this.change){
        this.change = true
        this.$router.push("/register");
      }else{
        this.change = false
        this.$router.push("/");
        
      }



    }
  }
};




</script>

<style scoped>

.navbar-content{
  display: flex;
  justify-content: center;
  margin-top: 10vh;

}

.btn-nav{
  padding: 10px 90px;
  text-decoration: none;
  color: #C9CAD4;
  font-weight: bold;
  font-size: 18px;
  border: none;
  background: #ffffff;


}

.btn-nav:disabled{
  border-bottom: 2px solid rgb(75 70 70);
  color: #2E2D33;
  

}

</style>
