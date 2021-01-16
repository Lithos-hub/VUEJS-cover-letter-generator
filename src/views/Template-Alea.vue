<template>
  <div class="select-template">
    <NavbarCL :sectionName="sectionName" />

    <v-container class="mt-15 text-center">
      <comeback-btn class="comeback-btn d-inline" />

      <v-dialog v-model="dialog" width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="d-inline ml-5"
            large
            color="orange darken-2"
            dark
            v-bind="attrs"
            v-on="on"
            >User manual</v-btn
          >
        </template>

        <v-card>
          <v-card-title class="headline orange darken-2 white--text">
            CV Generator
          </v-card-title>

          <v-card-text>
            <p class="pa-5 text-justify" id="manualuser-text">
              The CV Generator allows you to create a CV based on a previously selected
              template. Fill in the form with the information you wish to generate in the
              document.
              <br /><br />
              You can delete some inputs in Education, Experience, Complementary education
              and Technical Skills sections, so you may use only those you need. In these
              last two you can delete all the information by clicking on the red cross to
              the right of the input.
              <br /><br />
              When you are ready, generate the CV in PDF format with a modal window and
              download it if you wish.
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-2" dark block @click="dialog = false">Ok!</v-btn>
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

#manualuser-text {
  font-size: 25px;
  font-family: $style3;
  line-height: 35px;
}
</style>
