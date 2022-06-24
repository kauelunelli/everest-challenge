<template>
  <div class="modal" @click="closeModal()">
    <div class="modal-container" @click.stop>
      <div class="modal-title">
        <h3>Detalhes do usuário</h3>
        <div class="modal-button" UM MESTRE DO VUE>
          <a @click="closeModal()"><img :src="xMarkSVG" /></a>
        </div>
      </div>
      <div class="modal-content">
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
          <div class="contact-container">
            <img :src="selectImage()" />
            <p class="text-p-bold" id="margin-left">
              {{ user.contact | maskContact }}
            </p>
          </div>
        </div>
        <div class="inputs-form">
          <p>Nascimento</p>
          <p class="text-p-bold">{{ user.birthDate | maskDate }}</p>
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
      required: true,
    },
  },

  data() {
    return {
      xMarkSVG: require("../assets/xmark-solid.svg"),
      whatsappSVG: require("../assets/whatsapp.svg"),
      emailSVG: require("../assets/email.svg"),
    };
  },

  filters: {
    maskCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },

    maskPhone(phone) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    },

    maskDate(date) {
      const dateFormat = date.split("-");
      return ` ${dateFormat[2]}/${dateFormat[1]}/${dateFormat[0]} `;
    },
    maskContact(contact) {
      contact = contact.toString();
      return contact.charAt(0).toUpperCase() + contact.slice(1);
    },
  },

  methods: {
    closeModal() {
      this.$emit("closeDetails");
    },

    selectImage() {
      if (this.user.contact === "email") {
        return this.emailSVG;
      } else {
        return this.whatsappSVG;
      }
    },
  },
};
</script>

<style scoped>
.modal {
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

.modal-container {
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

.modal-button {
  cursor: pointer;
}

.modal-content {
  border: 2px dashed rgb(219, 213, 213);
  padding: 60px;
  margin: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.inputs-form {
  padding-top: 20px;
}

.text-p-bold {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}

.contact-container {
  display: flex;
}

#margin-left {
  margin-left: 15px;
}
</style>
