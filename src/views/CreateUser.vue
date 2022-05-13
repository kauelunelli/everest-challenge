<template>
  <div class="container">
    <div class="form-container">
      <form>
        <h1 class="text-title">Cadastrar usuário</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt, alias commodi doloremque eos nemo eaque earum aut itaque soluta error.</p>
        <div>
          <label for="fullname">Nome completo</label>
          <input type="text" name="fullname" id="fullname">
        </div>
        <div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
          </div>
          <div>
            <label for="confirmEmail">Confirmar email</label>
            <input type="email" name="confirmEmail" id="confirmEmail">
          </div>
        </div>
        <div>
          <label for="cpf">Cpf</label>
          <input type="text" name="cpf" id="cpf">
        </div>
        <div>
          <label for="birthDate">Data de nascimento</label>
          <input type="text" name="date" id="date">
        </div>
      </form>
    </div>
    <div class="strip"></div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser'
  // TODO
}
</script>

<style scoped>
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 2fr 1fr;
  color: #2F2F33;
}

.form-container {
  padding: 50px 0;
}

form {
  width: 620px;
  display: block;
  margin: 0 auto;
}

form > h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

form > p {
  margin-bottom: 20px;
  line-height: 22px;
}

.strip {
  height: 100%;
  background-color: #e02b57;
  /* background-color: #e02b57; */
}
</style>