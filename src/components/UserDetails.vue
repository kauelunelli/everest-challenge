<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-title">
        <h3>Detalhes do usuário</h3>
        <a @click="closeModal()"><img :src="xMarkSVG" /></a>
      </div>
      <div class='modal-content'>
        <div class="inputs-form">
              <p>CPF</p>
              <p class="text-p-bold">{{ user.cpf | maskCpf }}</p>
        </div>
        <div class="inputs-form">
              <p>Celular</p>
              <p class="text-p-bold">{{ user.phone | maskPhone }}</p>
        </div>
        <div class="inputs-form">
              <p class="text-p">Nome Completo</p>
              <p class="text-p-bold">{{ user.fullname }}</p>
        </div>
        <div class="inputs-form">
          <p>Contato</p>
              <div class='contact-container' v-if='contactIsEmail()'>
                <img :src="emailSVG"/>
                <p class="text-p-bold" id="margin-left">Email ou SMS</p>
              </div>
              <div class='contact-container' v-else>
                <img :src="whatsappSVG"/>
                <p class="text-p-bold" id="margin-left">Whatsapp</p>
              </div>
        </div>
        <div class="inputs-form">
              <p>Nascimento</p>
              <p class="text-p-bold">{{ user.birthDate}}</p>
        </div>
        <div class="inputs-form">
              <p>Email</p>
              <p class="text-p-bold">{{ user.email }}</p>
        </div>

      </div>


    </div>
    
  </div>
</template>

<script>
export default {
  name: "UserDetails",

  props: {
    user: {
      type: Object,
      required: true

    }
  },

  data() {
    return{
      xMarkSVG: require("../assets/xmark-solid.svg"),
      whatsappSVG: require('../assets/whatsapp.svg'),
      emailSVG: require('../assets/email.svg'),
    }
  },

  filters: {
    maskCpf: function(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      
    },
    
    maskPhone: function(phone) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    },

  },



   methods: {
    closeModal(){
      this.$emit('closeDetails');
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
  max-width: 65vh;
  width: 100%;
  border-radius: 10px;
  background-color: white;
}

.modal-title {
  display: grid;
  padding: 20px;
  text-align: center;
  align-items: center;
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


.contact-container{
  display: flex;

}

#margin-left{
  margin-left: 15px;
}


</style>

