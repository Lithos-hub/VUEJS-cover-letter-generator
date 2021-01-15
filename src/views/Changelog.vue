<template>
  <div class="changelog">
    <v-container>
      <comeback-btn />
      <v-sheet width="100%" height="100%" class="pa-5 mt-5" elevation="10">
        <h1 class="mb-5 text-center">Changelog</h1>

        <v-row class="list-row" v-for="(item, i) in changelog" :key="i">
          <v-col class="ma-auto">
            <div class="version">{{ item.version }}</div>
          </v-col>
          <v-col class="ma-auto">
            <li
              class="list-changes d-block"
              v-for="(item, i) in item.changes"
              :key="'B' + i"
            >
              {{ item }}
            </li>
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
  data() {
    return {
      changelog: [
        { version: "1.1.0", changes: ["Fixes and changes in generator system."] },
        {
          version: "1.2.0",
          changes: ["Added error 404 page. Early version of the new CV generator. "],
        },
        { version: "1.2.1", changes: ["Aesthetic improvements."] },
        { version: "1.2.2", changes: ["Added new options in CV generator."] },
        {
          version: "1.2.3",
          changes: [
            "Improvements in CV generator",
            "Experience form is now dynamic.",
            "Visual layout of the final document (This will be hidden once version 2.0.0 is released).",
          ],
        },
        {
          version: "1.2.4",
          changes: [
            "Each education form input can be deleted by the user.",
            "Dynamic changelog.",
            "About section updated.",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

h1 {
  color: $primary;
}

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
