<template>
  <div>
    <UserDetails v-if="showDetails" :user="user" @closeDetails="closeModal()" />
    <div class="loader-container" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="button-container">
      <button class="btn">Cadastrar novo usuario</button>
    </div>
    <div class="table">
      <div class="container-title">
        <p>CPF</p>
        <p>Nome Completo</p>
      </div>
      <div
        class="container-list"
        v-for="(user, index) in dataTable"
        :key="index"
      >
        <p>{{ formatCpf(user.cpf) }}</p>
        <p>{{ user.fullname }}</p>
        <div class="container-svg">
          <a @click="showModal(user.id)"><img :src="eyeSVG" /></a>
        </div>
      </div>
      <div class="container-list-empty" v-if="arrayNull">
        <img :src="wumpusSVG" />
        <p id="margin-10">Não tem nada aqui por enquanto, adicione usuarios.</p>
      </div>
    </div>
    <div class="pagination-container">
      <img
        class="pagination-button"
        :src="arrowLeftSVG"
        @click="returnPage()"
      />
      <span
        class="pagination-button"
        v-for="(user, index) in pagination.totalPages"
        :key="user.id"
        :class="{ active: pagination.currentPage == index + 1 }"
        @click="changePage(index + 1)"
        >{{ index + 1 }}</span
      >
      <img
        class="pagination-button"
        :src="arrowRightSVG"
        @click="goNextPage()"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserDetails from "../components/UserDetails.vue";

export default {
  name: "UsersList",
  components: {
    UserDetails,
  },

  data() {
    return {
      users: [],
      pagination: {
        currentPage: 0,
        totalPages: 0,
      },
      dataTable: [],
      arrayNull: false,
      loading: false,
      // SVGS
      eyeSVG: require("../assets/details-eye.svg"),
      wumpusSVG: require("../assets/lista-vazia-wumpus.svg"),
      arrowLeftSVG: require("../assets/arrow-left.svg"),
      arrowRightSVG: require("../assets/arrow-right.svg"),
      // Modal
      showDetails: false,
      user: [],
    };
  },

  created() {
    axios.get("/api/users").then((res) => {
      this.users = res.data.users;
      this.paginate(1, this.users.length);
      if (this.users.length == 0) this.arrayNull = true;
    });
  },

  methods: {
    showModal(id) {
      console.log(id);
      this.loading = true;
      axios
        .get("/api/users/" + id)
        .then((res) => {
          this.user = res.data.user;
        })
        .finally(() => {
          this.showDetails = true;
          this.loading = false;
        });
    },

    closeModal() {
      this.showDetails = false;
    },

    formatCpf(cpf) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },

    paginate(currentPage, totalUsers) {
      this.pagination = {
        currentPage,
        totalPages: Math.ceil(totalUsers / 7),
      };
      this.generateDataTable(this.pagination.currentPage);
    },

    generateDataTable(currentPage) {
      this.dataTable = this.users.slice((currentPage - 1) * 7, currentPage * 7);
    },

    changePage(pageNumber) {
      console.log(pageNumber);
      this.paginate(pageNumber, this.users.length);
    },

    returnPage() {
      if (this.pagination.currentPage > 1)
        this.paginate(this.pagination.currentPage - 1, this.users.length);
    },

    goNextPage() {
      if (this.pagination.currentPage < this.pagination.totalPages)
        this.paginate(this.pagination.currentPage + 1, this.users.length);
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

.active {
  color: white;
  border-radius: 4px;
  font-weight: 400 !important;
  background: black !important;
}

.container-svg {
  text-align: end;
}

.container-list-empty {
  display: grid;
  justify-content: center;
  text-align: center;
  justify-items: center;
  margin: 30px;
}

.button-container {
  text-align: end;
}

.btn {
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

#td-eye {
  text-align: end;
  padding: 20px;
}

.pagination-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  width: 100%;
}

.pagination-button {
  font-size: 18px;
  padding: 10px;
  width: 30px;
  font-weight: 400;
}

.pagination-button:hover {
  background: #e3e4eb;
  border-radius: 4px;
  font-weight: 600;
}

.pagination-container:hover {
  cursor: pointer;
}

#margin-10 {
  margin: 10px;
}

.loader-container {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
