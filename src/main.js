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
    server.create("user", { id: 1, fullname: "Ciquinha Gonzaga", cpf: "56717034093", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'whatsapp' })
    server.create("user", { id: 2, fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'whatsapp' })
    server.create("user", { id: 3, fullname: "Heitor Villa-Lobos", cpf: "93525294056", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'email' })
    server.create("user", { id: 4, fullname: "Ciquinha Gonzaga", cpf: "27963826057", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'whatsapp' })
    server.create("user", { id: 5, fullname: "Augustin Barrios", cpf: "14938840006", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'email' })
    server.create("user", { id: 6, fullname: "Heitor Villa-Lobos", cpf: "75504166055", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'whatsapp' })
    server.create("user", { id: 7, fullname: "Ciquinha Gonzaga", cpf: "96068560031", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'email' })
    server.create("user", { id: 8, fullname: "Augustin Barrios", cpf: "03903659045", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'email' })
    server.create("user", { id: 9, fullname: "Heitor Villa-Lobos", cpf: "56567482001", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'whatsapp' })
    server.create("user", { id: 10, fullname: "Ciquinha Gonzaga", cpf: "56717034093", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'whatsapp' })
    server.create("user", { id: 11, fullname: "Augustin Barrios", cpf: "35383938001", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'whatsapp' })
    server.create("user", { id: 12, fullname: "Heitor Villa-Lobos", cpf: "93525294056", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'whatsapp' })
    server.create("user", { id: 13, fullname: "Ciquinha Gonzaga", cpf: "27963826057", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'whatsapp' })
    server.create("user", { id: 14, fullname: "Augustin Barrios", cpf: "14938840006", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'whatsapp' })
    server.create("user", { id: 15, fullname: "Heitor Villa-Lobos", cpf: "75504166055", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'whatsapp' })
    server.create("user", { id: 16, fullname: "Ciquinha Gonzaga", cpf: "96068560031", phone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17", contact: 'whatsapp' })
    server.create("user", { id: 17, fullname: "Augustin Barrios", cpf: "03903659045", phone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05", contact: 'whatsapp' })
    server.create("user", { id: 18, fullname: "Heitor Villa-Lobos", cpf: "56567482001", phone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05", contact: 'whatsapp'})
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
    }, { timing: 2000 } )
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')