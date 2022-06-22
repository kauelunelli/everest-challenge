<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-title">
        <h1 class="text-h1">Detalhes do usuário</h1>
        <a @click="returnPage()"><img :src="xMark" /></a>
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
              <div class='contact-container' v-if='contactIsEmail()'>

                <p>Email ou SMS</p>
              </div>
              <div class='contact-container' v-else>
                <p>Whatsapp</p>
              </div>
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
      user: [],
      xMark: require("../assets/xmark-solid.svg"),
    }
  },
  

  created() {
    axios.get('/api/users/' + this.$route.params.id).then((res) => {
      this.user = res.data.user;
    });
},

  methods: {
    returnPage(){
      this.$router.push("/");
    },

    contactIsEmail() {
      if(this.user.contact == "email") {
           return true;
      } else {
          return false;
      }
     },
  }
}
</script>

