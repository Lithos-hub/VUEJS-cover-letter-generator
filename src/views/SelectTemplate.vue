<template>
  <div class="select-template">
    <NavbarCL :sectionName="sectionName" />

    <v-container class="mt-15 text-center">
      <comeback-btn />

      <h1 class="title">Select a template</h1>

      <v-row>
        <v-col></v-col>
        <v-col cols="3">
          <!-- TEMPLATE 1 - ALEA -->
          <router-link to="/cv-generator/alea" style="text-decoration: none">
            <div class="template-1">
              <v-sheet elevation="10" width="100%" height="100%">
                <v-img src="../assets/img/template1.jpg" class="template-image"></v-img>
              </v-sheet>
              <h4 class="text-center template-name"><i>Alea</i></h4>
            </div>
          </router-link>
          <!-- ******************* -->
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";
import NavbarCL from "../components/NavbarCL";

export default {
  data() {
    return {
      sectionName: "CV generator",
    };
  },
  components: {
    NavbarCL,
    ComebackBtn,
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.select-template {
  animation: fadeIn 1s ease-in-out;
}
.title {
  margin-top: 50px;
  margin-bottom: 100px;
  font-family: $style3 !important;
  font-size: 2em !important;
}
.template-name {
  transition: 0.5s ease-in-out;
  margin-top: 20px;
}
.template-image,
.template-1 {
  height: 500px !important;
  width: 350px !important;
  margin: 0 auto;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0px 0px 5px gray;
    border-radius: 10px;

    .template-name {
      margin-top: 50px;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
