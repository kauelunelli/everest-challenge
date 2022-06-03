<template>
  <div>
    <ul v-for="user in users" >
      {{ user.fullname }}

    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersList',

data() {
  return {
    users: [],

  }

},

created(){
  axios.get('/api/users').then(res => {
     this.users = res.data.users;
   });
},


}
</script>

<style scoped></style>