<template>
  <div class="table">
    <div class="container-title">
      <p>CPF</p>
      <p>Nome Completo</p>
    </div>
    <div class="container-list" v-for="(user, index) in dataTable" :key="index">
      <p>{{ user.cpf | maskCpf }}</p>
      <p>{{ user.fullname }}</p>
      <div class="container-svg">
        <a @click="sendID(user.id)"><img :src="eyeSVG" /></a>
      </div>
    </div>
    <div class="container-list-empty" v-if="arrayNull">
      <img :src="wumpusSVG" />
      <p id="margin-10">Não tem nada aqui por enquanto, adicione usuarios.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableList",

  props: {
    dataTable: {
      type: Array,
      required: true,
    },

    arrayNull: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      eyeSVG: require("../assets/details-eye.svg"),
      wumpusSVG: require("../assets/lista-vazia-wumpus.svg"),
    };
  },

  filters: {
    maskCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
  },

  methods: {
    sendID(id) {
      this.$emit("sendID", id);
    },
  },
};
</script>
<style scoped>
.table {
  border-bottom: 1px solid #b9b5b5;
  border-top: 1px solid #b9b5b5;
}

.container-title {
  font-weight: bold;
  font-size: 18px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 4vh;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #b9b5b5;
}

.container-list {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 5vh;
  align-items: center;
  padding: 10px;
}

.container-svg {
  text-align: end;
  cursor: pointer;
}

.container-list-empty {
  display: grid;
  justify-content: center;
  text-align: center;
  justify-items: center;
  margin: 30px;
}
</style>
