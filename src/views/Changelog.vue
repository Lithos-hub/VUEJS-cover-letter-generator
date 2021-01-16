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
        {
          version: "1.1.0",
          changes: ["(Cover Letter Generator) Fixes and changes in generator system."],
        },
        {
          version: "1.2.0",
          changes: [
            "(Global) Added error 404 page.",
            "(CV Generator) Early version of the new CV generator. ",
          ],
        },
        { version: "1.2.1", changes: ["(Global) Aesthetic improvements."] },
        {
          version: "1.3.0",
          changes: ["(CV Generator) Added new options in CV generator."],
        },
        {
          version: "1.4.0",
          changes: [
            "(CV Generator) Improvements in CV generator",
            "(CV Generator) Experience form is now dynamic.",
            "(CV Generator) Visual layout of the final document (This will be hidden once version 2.0.0 is released).",
          ],
        },
        {
          version: "1.5.0",
          changes: [
            "(CV Generator) Each education form input can be deleted by the user.",
            "(Global) Dynamic changelog.",
            "(Global) About section updated.",
          ],
        },
        {
          version: "1.7.0",
          changes: [
            "(CV Generator) Each Experience, Education and Complementary Education input can be deleted.",
            "(CV Generator) I Have Experience button is now dynamic.",
            "(CV Generator) Technical skills added.",
            "(CV Generator) Optimiced code.",
            "(CV Generator) Smart behavior in the information generation.",
          ],
        },
        {
          version: "2.0.0",
          changes: [
            "(CV Generator) CV Generator first estable version.",
            "(CV Generator) CV layout improved.",
            "(Cover Letter Generator and CV Generator) User manual added.",
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
