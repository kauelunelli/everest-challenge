<template>
  <div class="form">
    <MessageSucess v-if="showMessageSuccess" />
    <h2>Dados de Contato</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nos</p>
    <div class="form-content">
      <div class="input-name-container">
        <label class="text-label" for="">Nome</label>
        <input
          class="input"
          v-model="form.fullname"
          @blur="$v.form.fullname.$touch"
          type="text"
        />
        <MessageAlertInput
          v-if="$v.form.fullname.$error"
          message="Este campo é requerido"
        />
      </div>
      <div class="input-email-container">
        <label class="text-label" for="">Email</label>
        <input
          class="input"
          v-model="form.email"
          @blur="$v.form.email.$touch"
          type="text"
        />
        <MessageAlertInput
          v-if="$v.form.email.email && $v.form.email.$error"
          message="Este campo é requerido"
        />
        <MessageAlertInput
          v-if="!$v.form.email.email"
          message="Este email não é válido"
        />
      </div>
      <div class="input-confirmEmail-container">
        <label class="text-label" for="">Confirmar Email</label>
        <input
          class="input"
          v-model="form.confirmEmail"
          @blur="$v.form.confirmEmail.$touch"
          type="text"
        />
        <MessageAlertInput
          v-if="$v.form.confirmEmail.sameAs && $v.form.confirmEmail.$error"
          message="Este campo é requerido"
        />
        <MessageAlertInput
          v-if="!$v.form.confirmEmail.sameAs"
          message="Os emails não se coincidem"
        />
      </div>
      <div class="input-cpf-container">
        <label class="text-label" for="">Cpf</label>
        <input
          class="input"
          v-maska="['###.###.###-##', '###.###.###-##']"
          @maska="form.cpf = $event.target.dataset.maskRawValue"
          type="text"
        />
        <MessageAlertInput
          v-if="$v.form.cpf.$error"
          message="Este campo é requerido"
        />
        <MessageAlertInput
          v-if="!validateCpf() && !$v.form.cpf.$error"
          message="Este Cpf é invalido"
        />
      </div>
      <div class="input-phone-container">
        <label class="text-label" for="">Telefone</label>
        <input
          class="input"
          @blur="$v.form.phone.$touch"
          v-maska="['(##) #####-####', '(##) #####-####']"
          @maska="form.phone = $event.target.dataset.maskRawValue"
          type="text"
        />
        <MessageAlertInput
          v-if="$v.form.phone.$error"
          message="Este campo é requerido"
        />
      </div>
      <div class="input-bday-container">
        <label class="text-label" for="">Data de Nascimento</label>
        <input
          class="input"
          v-model="form.birthDate"
          @blur="$v.form.birthDate.$touch"
          type="date"
        />
        <MessageAlertInput
          v-if="$v.form.birthDate.$error"
          message="Este campo é requerido"
        />
      </div>
    </div>
    <p class="text-p-form">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="text-p-form">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="checkbox">
      <div class="checkbox-container">
        <input
          type="radio"
          name="radioption"
          value="email"
          v-model="form.contact"
        />
        <label class="checkbox-label" for="email">Email ou SMS</label>
      </div>
      <div class="checkbox-container">
        <input
          type="radio"
          name="radioption"
          value="whatsapp"
          v-model="form.contact"
        />
        <label class="checkbox-label" for="whats">Whatsapp</label>
      </div>
      <MessageAlertInput
        v-if="$v.form.contact.$error"
        message="Este campo é requerido"
      />
    </div>
    <button
      class="btn"
      @click="$v.$touch"
      :disabled="submitting"
      @click.prevent="validateForm()"
    >
      Salvar
    </button>
  </div>
</template>

<script>
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
import MessageAlertInput from "@/components/MessageAlertInput.vue";
import axios from "axios";
import MessageSucess from "@/components/MessageSuccess.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: "Register",

  components: { MessageAlertInput, MessageSucess, Loader },

  data() {
    return {
      form: {
        fullname: "",
        email: "",
        confirmEmail: "",
        cpf: "",
        phone: "",
        birthDate: "",
        contact: "",
      },
      showMessageSuccess: false,
      submitting: false,
    };
  },
  validations: {
    form: {
      fullname: { required, minLength: minLength(5) },
      email: { required, email },
      confirmEmail: {
        required,
        sameAs: sameAs("email"),
      },
      cpf: { required, minLength: minLength(8) },
      phone: { required, minLengthValue: minLength(10) },
      birthDate: { required },
      contact: { required },
    },
  },
  methods: {
    validateCpf() {
      var cpf;
      cpf = this.form.cpf;
      var Soma;
      var Resto;
      var i;
      i = 0;
      Soma = 0;
      Resto = 0;
      if (cpf == "") return true;
      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) return false;
      if (Resto != parseInt(cpf.substring(9, 10))) return false;
      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(cpf.substring(10, 11))) return false;
      return true;
    },

    validateForm() {
      this.submitting = true;
      if (this.validateCpf() && !this.$v.$error) {
        axios
          .post("/api/users", this.form)
          .then((res) => {
            console.log(res);
          })
          .finally(() => {
            this.showMessageSuccess = true;
            this.submitting = false;
            setTimeout(() => {
              (this.showMessageSucess = false), this.$router.push("/");
            }, 2000);
          });
      } else {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 50px;
}

.input {
  border: 2px solid #2e2d33;
  border-radius: 4px;
  background-color: white;
  height: 56px;
  padding: 10px;
  width: 100%;
}
.text-label {
  display: flex;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  font-size: 11px;
  height: 21px;
  text-transform: uppercase;
}

.text-p-form {
  font-weight: bold;
  margin: 25px 0;
}

.form-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 15px;
  margin-top: 25px;
}

.input-name-container {
  grid-area: 1 / 1 / 2 / 3;
}

.btn {
  cursor: pointer;
  margin: 40px;
  padding: 20px 40px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  background: #e02b57;
}

.btn:hover {
  transform: scale(1.0175);
}

.btn:active {
  transform: scale(0.985);
}

.checkbox {
  margin: 25px 0;
}

.checkbox-label {
  font-family: "Source Sans Pro", sans-serif;
  margin-left: 15px;
}

.checkbox-container {
  margin: 20px 0px;
}
</style>
