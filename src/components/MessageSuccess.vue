<template>
  <div class="modal-message">
    <div class="message">
      <img :src="sucessSVG" />
      <h3 class="text-message">Cadastro realizado com sucesso!</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageSucess",

  props: {},

  data() {
    return {
      sucessSVG: require("../assets/success.svg"),
      eyeSVG: require("../assets/details-eye.svg"),
    };
  },
};
</script>
<style scoped>
.modal-message {
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

.message {
  animation: scale-up-center 1s;
  background: rgb(255, 255, 255);
  padding: 15px;
  border-radius: 5px;
  display: grid;
  justify-content: center;
  text-align: center;
  justify-items: center;
  margin: 30px;
}

.text-message {
  margin-top: 10px;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
