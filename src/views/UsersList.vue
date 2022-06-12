<template>
  <div>
    <div class="button-container">
      <button class="btn">Cadastrar novo usuario</button> </div>
      <div class="table">
        <div class="container-title">
          <p>CPF</p>
          <p>Nome Completo</p>
        </div>
        <div class="container-list" v-for="(user, index) in dataTable" :key="index">
            <p>{{ user.cpf }}</p>
            <p>{{ user.fullname }}</p>
          <div class="container-svg">
            <a @click="showModal(user.id)"><img :src="eyeSVG"></a>
          </div>
        </div>
            <div class="container-list-empty" v-if="isUsersListEmpty">

                <p>Não tem nada aqui por enquanto</p>
            </div>

          <div class="pagination-container">
            <span  v-for="(user, index) in pagination.totalPages" :key="user.id" @click="goNextPage(index + 1)">{{ index + 1 }}</span>
          </div>
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
      pagination: {
        currentPage: 0,
        totalPages: 0,
      },
      dataTable: [],
      eyeSVG: require("../assets/details-eye.svg"),
      lupaSVG: require("../assets/lupa.svg")
    };
  },

  created() {
    axios.get("/api/users").then((res) => {
      this.users = res.data.users;
      this.paginate(1, this.users.length)
    });
  },
  computed: {
    isUsersListEmpty(){
      if(this.users.length == 0){
        return true
      }
        
    }
  },
  methods: {
    showModal(id) {
      console.log(id)
    },

    paginate(currentPage, totalUsers) {
    this.pagination = {
      currentPage,
      totalPages: Math.ceil(totalUsers / 7),
    }
    this.generateDataTable(this.pagination.currentPage)
  },

  generateDataTable(currentPage) {
    this.dataTable = this.users.slice(
      (currentPage - 1) * 7,
      currentPage * 7
    )
  },

  goNextPage(pageNumber){
    console.log(pageNumber)
    this.paginate(pageNumber, this.users.length)
  } 
    
  }
 
};

</script>

<style scoped>

.table{
  border-bottom: 1px solid #b9b5b5;
  border-top: 1px solid #b9b5b5;
}

.container-title{
  font-weight: bold;
  font-size: 18px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 4vh;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #b9b5b5;
}

.container-list{
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 5vh;
  align-items: center;
  padding: 10px;
}

.container-svg{
  text-align: end;
}

.container-list-empty{
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

.pagination-container{
  display: flex;
  justify-content: center;
  padding: 0px;
  gap: 12px;
  height: 34px;
  

}

.pagination-container:hover{
  cursor: pointer;

}
</style>
