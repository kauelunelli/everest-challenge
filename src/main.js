import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    customer: Model
  },
  seeds(server) {
    server.create("customer", { name: "Xiquinha", lastname: "Gonzaga", state: "RJ", city: "Rio de Janeiro", phone: "80986882515", email: "xgonzaga@mail.com" })
    server.create("customer", { name: "Augustin", lastname: "Barrios", state: "SP", city: "São Paulo", phone: "86986882519", email: "abarrios@mail.com" })
    server.create("customer", { name: "Heitor", lastname: "Villa Lobos", state: "RJ", city: "Rio de Janeiro", phone: "80986882515", email: "hvlobos@mail.com" })
  },
  routes() {
    this.namespace = 'api'
    
    this.get('/customers', (schema, request) => {
      return schema.customers.all()
    }, { timing: 2000 } )

    this.post('/customers', (schema, request) => {
      let customer = JSON.parse(request.requestBody)

      return schema.customers.create(customer)
    })

    this.get('/customer/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let customer = schema.customers.find(id)

      return customer.update(data)
    }, { timing: 2000 })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')