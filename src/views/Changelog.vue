<template>
  <div class="changelog">
    <v-container>
      <comeback-btn />
      <v-sheet width="100%" height="100%" class="pa-5 mt-5" elevation="10">
        <h1 class="mb-5">Changelog</h1>

        <v-row class="list-row">
          <v-col class="ma-auto">
            <div class="version">Version 1.1.0</div>
          </v-col>
          <v-col class="ma-auto">
            <li class="list-changes d-inline">Fixes and changes in generator system.</li>
          </v-col>
        </v-row>

        <v-row class="list-row">
          <v-col class="ma-auto">
            <div class="version">Version 1.2.0</div>
          </v-col>
          <v-col class="ma-auto">
            <li class="list-changes">Added error 404 page.</li>
            <li class="list-changes">Early version of the new CV generator.</li>
          </v-col>
        </v-row>

        <v-row class="list-row">
          <v-col class="ma-auto">
            <div class="version">Version 1.2.1</div>
          </v-col>
          <v-col class="ma-auto">
            <li class="list-changes">Aesthetic improvements.</li>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";
export default {
  components: { ComebackBtn },
};
</script>

<style lang="scss">
@import "src/scss/variables";

.changelog {
  background-image: url("../assets/img/changelog.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}

.version {
  font-size: 1.2em;
  list-style: none;
  font-weight: bold;
  color: $primary;
}
.list-changes {
  font-size: 1em;
  list-style: none;
}

.list-row {
  border-bottom: 1px solid rgba(0, 78, 151, 0.522);
}
</style>
