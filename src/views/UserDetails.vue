<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-title">
        <h1 class="text-h1">Detalhes do usuário</h1>
        <h3>X</h3>
      </div>
      <div class='modal-content'>
        <div class="inputs-form">
              <p class="text-p">CPF</p>
              <p class="text-p-bold">{{ user.cpf }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Celular</p>
              <p class="text-p-bold">{{ user.phone }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Nome Completo</p>
              <p class="text-p-bold">{{ user.fullname }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Contato</p>
              <p class="text-p-bold">{{ user.contact }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Nascimento</p>
              <p class="text-p-bold">{{ user.birthDate }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Email</p>
              <p class="text-p-bold">{{ user.email }}</p>
        </div>

      </div>


    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserDetails",

  data() {
    return{
      user: []
    }
  },
  

  created() {
    axios.get('/api/users/' + this.$route.params.id).then((res) => {
      this.user = res.data.user;
    });
}
}
</script>

<style scoped>

.modal{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(58, 56, 56, 0.5);
}

.modal-container{
  max-width: 60vh;
  width: 100%;
  border-radius: 10px;
  background-color: white;
}

.modal-title {
  display: grid;
  padding: 20px;
  text-align: center;
  grid-template-columns: 90% 10%;

}

.modal-content{
  border: 2px dashed rgb(219, 213, 213);
  padding: 60px;
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.inputs-form{
  padding-top: 20px;
}

.text-p-bold {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}


</style>
