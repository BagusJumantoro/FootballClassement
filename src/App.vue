<script setup>
// 🟦 Import CSS Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// 🟦 Import JS Bootstrap (opsional, hanya kalau kamu mau komponen seperti modal, dropdown, tooltip, dll)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div class="container mt-5">
    <h1 class="text-center text-primary">Hello Bootstrap + Vue + Vite!</h1>
    <button class="btn btn-success">Klik Saya</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
