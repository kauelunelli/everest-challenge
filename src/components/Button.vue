<template>
    <div class="button-container">
      <button class="btn">{{title}}</button>
    </div>
</template>
<script>
export default {
    name : 'Button',

    props: {
        title: {
            type: String,
            required: true
        }

    }
}
</script>
<style scoped>
.button-container {
  text-align: end;
}

.btn {
  cursor: pointer;
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

</style>