<template>
  <header>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Source+Sans+Pro:wght@200;400&display=swap"
      rel="stylesheet"
    />
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>

/* FONTS */

.text-h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  height: 56px;
  color: #ebecf3;
}

.text-h1-dark {
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  height: 56px;
  color: black;
}

.text-h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  height: 40px;
  color: #ebecf3;
}

.text-h2-dark {
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  height: 40px;
  color: #000000;
}

.text-h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  height: 24px;
  color: #ebecf3;
}

.text-h3-dark {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  height: 24px;
  color: #000000;
}

.text-p {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 24px;
  white-space: normal;
}

.text-p-gray {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 24px;
  white-space: normal;
  color: gray;
}


.text-p-bold {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 24px;
  white-space: normal;
  color: black;
  font-weight: bold;
}

/* BUTTONS */

.btn {
  font-family: "Source Sans Pro", sans-serif;
  padding: 24px 32px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
}

.btn:hover {
  transform: scale(1.0175);
}


.btn:active {
  transform: scale(0.985);
}


.btn-primary {
  background: #e02b57;
}

.btn-black {
    background: rgb(39, 37, 37);
}


/* MARGINS */

.margin-top-60 {
  margin-top: 60px;
}

.margin-top-30{
  margin-top: 30px
}

.margin-top-15{
    margin-top: 15px;
}


.margin-bottom-30 {
  margin-bottom: 30px;
}

.margin-bottom-10 {
  margin-bottom: 10px;
}

.margin-left-10 {
  margin-left: 10px;
}

.margin-left-5 {
  margin-left: 5px;
}

.margin-right-5 {
  margin-right: 5px;
}

/* ANIMATION */

@keyframes moveleft {
  0% {
    transform: translateX(50px);
    visibility: hidden;
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }
}

@keyframes moveright {
  0% {
    transform: translateX(-50px);
    visibility: hidden;
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }
}

</style>
