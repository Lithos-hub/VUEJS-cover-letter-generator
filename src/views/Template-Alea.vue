<template>
  <div class="select-template">
    <NavbarCL :sectionName="sectionName" />

    <v-container class="mt-15 text-center">
      <comeback-btn class="comeback-btn d-inline" />

      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="d-inline ml-5"
            large
            color="orange darken-2"
            dark
            id="readme-btn"
            v-bind="attrs"
            v-on="on"
            >Read me!</v-btn
          >
        </template>

        <v-card>
          <v-card-title class="headline orange darken-2 white--text">
            Curriculum Vitae Generator
          </v-card-title>

          <v-card-text>
            <h4 class="font-weight-bold pa-5">
              CV Generator will be a somewhat more powerful and precise tool than the
              Cover Letter Generator. <br /><br />
              It is still under development, so it does not work yet. I hope to have
              finished it soon, so in the meantime, you can explore the code and the
              different options it will have in the future.
            </h4>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-2" dark @click="dialog = false">Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <h1 class="title">Alea Template Design</h1>
      <CVForm />
    </v-container>
  </div>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";
import NavbarCL from "../components/NavbarCL";
import CVForm from "../components/CVForm";

import axios from "axios";

import _ from "lodash";

export default {
  data() {
    return {
      dialog: false,
      sectionName: "CV generator",
    };
  },
  components: {
    NavbarCL,
    ComebackBtn,
    CVForm,
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";
.title {
  font-size: 2em;
  font-family: $style3 !important;
  margin-top: 20px;
}
.comeback-btn {
  margin: 0 auto;
}
</style>
