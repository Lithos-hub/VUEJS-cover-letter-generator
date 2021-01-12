<template>
  <v-container>
    <h2 class="error404">
      Error 4 <v-icon class="error-icon">mdi-emoticon-sad-outline</v-icon> 4
    </h2>
    <h1 class="text-center error-title">
      Oops. You are in the wrong place. <br />
      That page doesn't exist.
      <v-row no-gutters>
        <v-col></v-col>
        <v-col cols="4">
          <v-img src="../assets/img/disconnected.jpg" class="error-img"></v-img>
        </v-col>
        <v-col></v-col>
      </v-row>
    </h1>
    <v-row class="text-center">
      <v-col></v-col>
      <v-col cols="1">
        <comeback-btn class="d-block mt-10" />
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";
export default {
  components: { ComebackBtn },
};
</script>

<style lang="scss">
@import "src/scss/variables";

.error404 {
  font-size: 10em !important;
  margin-top: 50px;
  font-family: $style3;
  background-image: url("../assets/img/gradient1.jpg");
  background-size: cover;
  background-position: top;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.error-icon {
  font-size: 1em !important;
  background-image: url("../assets/img/gradient1.jpg");
  background-size: cover;
  background-position: top;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.error-title {
  margin-top: 50px;
  color: black;
}

.error-img {
  position: relative;
}
</style>
