<template>
  <div>
    <div class="button-container">
      <button class="btn">Cadastrar novo usuario</button>
    </div>
    <table class="list">
      <tr id="title-tr">
        <th>CPF</th>
        <th>NOME COMPLETO</th>
      </tr>
      <tr v-for="user in users">
        <td>{{ user.cpf }}</td>
        <td>{{ user.fullname }}</td>
        <td id="td-eye"><a @click="showModal()"><img :src="eyeSVG" alt=""></a></td>
      </tr>
    </table>
    <div class="pagination-container">
      <a href="">1</a>
      <a href="">2</a>
      <a href="">3</a>
      <a href="">4</a>

    
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "UsersList",
  components: {

  },

  data() {
    return {
      users: [],
      eyeSVG: require("../assets/details-eye.svg"),
    };
  },

  created() {
    axios.get("/api/users").then((res) => {
      this.users = res.data.users;
    });
  },
  methods: {
    showModal() {
      console.log('Foi kkk')
    }
    
  }
 
};

</script>

<style scoped>
.button-container {
  text-align: end;
}

.list {
  border-top: 1px solid #b9b5b5;
  border-bottom: 1px solid #b9b5b5;
  border-collapse: collapse;
  width: 100%;
}

.btn {
  margin: 40px;
  font-family: "Source Sans Pro", sans-serif;
  padding: 20px 24px;
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

#title-tr,
th {
  border-bottom: 1px solid#b9b5b5;
  font-weight: 600;
  font-size: 16px;
}

.list td,
.list th {
  padding: 20px;
}

.list th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
}

#td-eye {
  text-align: end;
  padding: 20px;
}

.pagination-container{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

position: relative;
width: 323px;
height: 34px;

}
</style>
