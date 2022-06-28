<template>
<div>
  <h2>Dados de Contato</h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nos</p>
  <div class="form-content">
    <input class="input" id="input-name-container" type="text" />
  </div>
  <div class="form-content">
    <input class="input" type="text" />
  </div>
  <div class="form-content">
    <input class="input" type="text" />
  </div>
  <div class="form-content">
    <input class="input" type="text" />
  </div>
  <div class="form-content">
    <input class="input" type="text" />
  </div>
 </div>

</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped>
.input {
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  height: 56px;
  padding: 10px;
}

.form-content {
  display: inline-table;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
}

#input-name-container {
  display: flex;
  width: 90%;
  margin-top: 30px;
}
</style>
