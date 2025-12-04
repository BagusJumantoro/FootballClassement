<script setup></script>
<template>
  <div
    class="modal fade"
    id="modalCreateStandings"
    tabindex="-1"
    aria-labelledby="modal-create-standings"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title fs-5">Input Club</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"
              ><IconMdiPeopleAdd
            /></span>
            <input
              type="text"
              class="form-control"
              placeholder="Name Player"
              aria-label="namePlayer"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"
              ><IconMdiAlphaFCircle
            /></span>
            <input
              type="text"
              class="form-control"
              placeholder="Club Name"
              aria-label="clubName"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>
