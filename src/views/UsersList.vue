<template>
  <div>
    <UserDetails v-if="showDetails" :user="user" @closeDetails="closeModal()" />
    <Loader v-if="loading" />
    <div class="button-container">
      <button class="btn" @click="goRegisterPage()">
        Cadastra Novo Usuario
      </button>
    </div>
    <TableList
      :dataTable="dataTable"
      :arrayNull="arrayNull"
      @sendID="showModal($event)"
    />
    <Pagination
      v-if="loadPagination"
      :users="users"
      @changePage="changePage($event)"
    />
  </div>
</template>

<script>
import axios from "axios";
import UserDetails from "../components/UserDetails.vue";
import TableList from "@/components/TableList.vue";
import Loader from "@/components/Loader.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: "UsersList",
  components: {
    UserDetails,
    TableList,
    Loader,
    Pagination,
  },

  data() {
    return {
      users: [],
      dataTable: [],
      arrayNull: false,
      loading: false,
      showDetails: false,
      user: [],
      loadPagination: false,
    };
  },

  created() {
    axios
      .get("/api/users")
      .then((res) => {
        this.users = res.data.users;
        if (this.users.length == 0) this.arrayNull = true;
      })
      .finally(() => {
        this.loadPagination = true;
      });
  },

  methods: {
    showModal(id) {
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

    changePage(dataTable) {
      this.dataTable = dataTable;
    },

    goRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.button-container {
  text-align: end;
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
</style>
