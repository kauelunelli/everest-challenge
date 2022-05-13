<template>
  <div class="container">
    <div class="form-container">
      <form>
        <h1 class="text-title">Cadastrar usuário</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt, alias commodi doloremque eos nemo eaque earum aut itaque soluta error.</p>
        <div class="form-control">
          <label for="fullname">Nome completo</label>
          <input type="text" name="fullname" id="fullname">
        </div>
        <div class="form-control input-double">
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
          </div>
          <div>
            <label for="confirmEmail">Confirmar email</label>
            <input type="email" name="confirmEmail" id="confirmEmail">
          </div>
        </div>
        <div class="form-control input-double">
          <div>
            <label for="cpf">Cpf</label>
            <input type="text" name="cpf" id="cpf">
          </div>
          <div>
            <label for="phone">Celular</label>
            <input type="text" name="phone" id="phone">
          </div>
        </div>
        <div class="form-control date-control">
          <label for="birthDate">Data de nascimento</label>
          <div>
            <div>
              <img src="../assets/calendar.svg" alt="">
            </div>
            <input type="text" name="date" id="date" maxlength="10">
          </div>
        </div>
        <div class="btn-control">
          <button type="button">Salvar</button>
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
  width: 580px;
  display: block;
  margin: 0 auto;
}

form > h1 {
  font-size: 50px;
  margin-bottom: 20px;
}

form > p {
  color: #4A4B52;
  margin-bottom: 20px;
  line-height: 22px;
}

.form-control {
  margin: 30px 0;
}

label, input {
  display: block;
}

label {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: #4A4B52;
}

input {
  height: 55px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #9599A6;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
  color: #4A4B52;
}

.input-double {
  display: flex;
  gap: 10px;
}

.input-double div {
  width: 50%;
}

.date-control label {
  font-weight: 400;
  text-transform: initial;
}

.date-control > div {
  margin-top: 10px;
  border: 1px solid #9599A6;
  border-radius: 5px;
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
}

.date-control input {
  border: none;
  height: 40px;
  font-size: 16px;
}

.date-control input:focus {
  outline: none;
}

.btn-control button {
  height: 45px;
  width: 120px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #e02b57;
  border: none;
  color: #fff;
  border-radius: 5px;
  opacity: 0.8;
  transition: transform 0.2s;
}

.btn-control button:hover {
  opacity: 1;
  transform: scale(1.03);
}

.strip {
  height: 100%;
  background-color: #e02b57;
  /* background-color: #e02b57; */
}
</style>