<template>
  <span class="alert-message">
    {{ message }}
  </span>
</template>
<script>
export default {
  name: "MessageAlertInput",

  props: {
    message: String,
  },
};
</script>
<style scoped>
.alert-message {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  color: #ae3956;
  font-weight: bold;
  margin-top: 5px;
  animation: shake-horizontal 0.4s linear both;
}

@keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-5px);
  }
  20%,
  40%,
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
}
</style>
