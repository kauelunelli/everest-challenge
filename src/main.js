import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createServer, Model } from 'miragejs'

import VueMask from 'v-mask';
Vue.use(VueMask)

createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "567.170.340-93", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "353.839.380-01", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "935.252.940-56", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "279.638.260-57", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "149.388.400-06", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "755.041.660-55", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "960.685.600-31", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "039.036.590-45", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "565.674.820-01", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
  },
  routes() {
    this.namespace = 'api'
    
    this.get('/users', (schema, request) => {
      return schema.users.all()
    },)

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)

      return schema.users.create(user)
    })

    this.get('/users/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let user = schema.users.find(id)

      return user.update(data)
    },)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')