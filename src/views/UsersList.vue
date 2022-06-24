<template>
  <div>
    <UserDetails v-if="showDetails" :user="user" @closeDetails="closeModal()" />
    <Loader v-if="loading" />
    <Button :title="title" />
    <TableList
      :dataTable="dataTable"
      :arrayNull="arrayNull"
      @sendID="showModal($event)"
    />
    <Pagination v-if="loadPagination" :users="users" @changePage="changePage($event)" />
  </div>
</template>

<script>
import axios from "axios";
import UserDetails from "../components/UserDetails.vue";
import TableList from "@/components/TableList.vue";
import Loader from "@/components/Loader.vue";
import Pagination from "../components/Pagination.vue";
import Button from "../components/Button.vue";


export default {
  name: "UsersList",
  components: {
    UserDetails,
    TableList,
    Loader,
    Pagination,
    Button,
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
      title: 'Cadastra Novo Usuario'
    };
  },

  created() {
    axios.get("/api/users").then((res) => {
      this.users = res.data.users;
      if (this.users.length == 0) this.arrayNull = true;
    }).finally(() => {
      this.loadPagination = true
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

    changePage(dataTable){
      this.dataTable = dataTable
      console.log(dataTable)
    }
  },
};
</script>

<style scoped>


</style>
