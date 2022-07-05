<template>
  <div class="navbar-content">
    <button class="btn-nav" :disabled="change">CADASTRO</button>
    <button class="btn-nav" :disabled="!change">LISTAGEM</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      change: false,
    };
  },

  created() {
    this.valideRoute();
  },
  watch: {
    "$route.name": function () {
      this.valideRoute();
    },
  },

  methods: {
    valideRoute() {
      if (this.$route.name == "users") {
        this.change = false;
      } else {
        this.change = true;
      }
    },
  },
};
</script>

<style scoped>
.navbar-content {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
}

.btn-nav {
  padding: 10px 90px;
  text-decoration: none;
  color: #c9cad4;
  font-weight: bold;
  font-size: 18px;
  border: none;
  background: #ffffff;
}

.btn-nav:disabled {
  border-bottom: 2px solid rgb(75 70 70);
  color: #2e2d33;
}
</style>
