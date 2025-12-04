<script setup>
import ModalCreateStandings from "../components/ModalCreateStandings.vue";
import { ref } from "vue";

const isLeagueCreate = ref(false);
</script>
<template>
  <div class="wrap-content">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <IconMdiFlagVariant />
          Football Standings Calculation</a
        >
      </div>
    </nav>
    <div class="card-nothing-content">
      <IconMdiNullOff class="createLeague-icon" />
      <p>There is not clubs in a standings, please input club</p>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCreateStandings"
      >
        Input Club
      </button>
    </div>
    <ModalCreateStandings />
  </div>
</template>
<style scoped>
.navbar {
  padding: 5px 10px;
}
.wrap-content {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

.card-nothing-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-nothing-content p {
  font-size: 20px;
  font-weight: 500;
}

.createLeague-icon {
  color: "#00000";
  font-size: 40px;
  cursor: pointer;
}
</style>
