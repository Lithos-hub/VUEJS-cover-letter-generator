<template>
  <div class="home">
    <div id="clouds">
      <v-img src="../assets/img/clouds.png" width="40%" class="cloud clouds1"></v-img>
      <v-img src="../assets/img/clouds.png" width="10%" class="cloud clouds2"></v-img>
      <v-img src="../assets/img/clouds.png" width="20%" class="cloud clouds3"></v-img>
      <v-img src="../assets/img/clouds.png" width="30%" class="cloud clouds4"></v-img>
      <v-img src="../assets/img/clouds.png" width="60%" class="cloud clouds5"></v-img>
      <v-img src="../assets/img/clouds.png" width="20%" class="cloud clouds6"></v-img>
      <v-img src="../assets/img/clouds.png" width="35%" class="cloud clouds7"></v-img>
      <v-img src="../assets/img/clouds.png" width="10%" class="cloud clouds8"></v-img>
    </div>
    <div class="container">
      <v-row no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="6" class="align-center">
          <div id="center-elements">
            <h1 id="title">CV / Cover Letter Generator</h1>

            <v-row class="pa-2 rounded">
              <h4 class="white--text">Start making a</h4>
              <v-col cols="3"></v-col>
              <v-col cols="3">
                <router-link to="/cv-generator" style="text-decoration: none">
                  <v-btn class="cv-gen-btn d-inline btn-animated">Curriculum Vitae</v-btn>
                </router-link>
              </v-col>
              <v-col cols="3">
                <router-link to="/cover-letter-generator" style="text-decoration: none">
                  <v-btn class="cl-gen-btn d-inline btn-animated">Cover Letter</v-btn>
                </router-link>
              </v-col>
              <v-col cols="3"></v-col>
            </v-row>

            <div class="d-block">
              <router-link to="/about" style="text-decoration: none">
                <v-btn class="error mt-15 ma-auto btn-animated">About</v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
    </div>
    <v-footer height="60" class="transparent text-right" id="footer">
      {{ year }} - Carlos Segura García
    </v-footer>
    <p id="version" class="ma-auto align-content-end">
      <router-link to="/changelog" style="text-decoration: none">
        <v-btn color="green" dark class="font-weight-bold" id="changelog-btn"
          >Changelog</v-btn
        >
      </router-link>

      <a
        href="https://github.com/Lithos-hub/VUEJS-cover-letter-generator"
        style="text-decoration: none"
      >
        <v-btn color="secondary darken-2" class="mx-2">
          <v-icon style="color: white">mdi-github</v-icon>
        </v-btn>
      </a>

      Version: {{ version }}.{{ subversion }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      year: new Date().getFullYear(),
      version: 1,
      subversion: 2,
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

body {
  overflow: hidden;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  .home {
    width: 100%;
    height: 100%;
    background: url("../assets/img/background.jpg");
    background-size: cover;
    background-position: center;
  }

  .container {
    position: relative;
    text-align: center;
  }

  #title {
    font-size: 3em;
    background-image: url("../assets/img/home-title.jpg");
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #center-elements {
    margin-top: 10%;
  }

  #footer {
    position: absolute;
    font-weight: 100;
    bottom: 0px;
    color: aquamarine;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.445);
    width: 100%;
  }

  #version {
    position: absolute;
    color: white;
    right: 10px;
    bottom: 10px;
  }

  #start-btn,
  #about-btn {
    text-decoration: none;
    transition: 0.5s;
  }

  .btn-animated:hover {
    transform: scale(1.2);
  }

  #clouds {
    position: absolute;
    top: 0px;
    bottom: 0px;
  }

  .clouds1 {
    position: absolute;
    top: 0px;
    left: -200px;

    -webkit-animation: motion 20s infinite linear;
    -moz-animation: motion 20s infinite linear;
    -o-animation: motion 20s infinite linear;
  }

  .clouds2 {
    position: absolute;
    top: -200px;
    left: 200px;

    opacity: 0.2;

    -webkit-animation: motion 50s infinite linear;
    -moz-animation: motion 50s infinite linear;
    -o-animation: motion 50s infinite linear;
  }
  .clouds3 {
    position: absolute;
    top: -300px;
    left: 0px;

    opacity: 0.5;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }
  .clouds4 {
    position: absolute;
    top: -900px;
    left: 500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds5 {
    position: absolute;
    top: 0px;
    left: -500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds6 {
    position: absolute;
    top: -800px;
    left: 800px;

    opacity: 0.3;

    -webkit-animation: motion 15s infinite linear;
    -moz-animation: motion 15s infinite linear;
    -o-animation: motion 15s infinite linear;
  }
  .clouds7 {
    position: absolute;
    top: -600px;
    left: -1000px;

    opacity: 0.2;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds8 {
    position: absolute;
    top: -300px;
    left: 1000px;

    opacity: 0.1;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }

  @keyframes motion {
    0% {
      margin-right: 1000px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      margin-left: 1000px;
      opacity: 0;
    }
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  .home {
    width: 100%;
    height: 100%;
    background: url("../assets/img/background.jpg");
    background-size: cover;
    background-position: center;
  }

  .container {
    position: relative;
    text-align: center;
  }

  #title {
    font-size: 6em;
    background-image: url("../assets/img/home-title.jpg");
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #center-elements {
    margin-top: 10%;
  }

  #footer {
    position: absolute;
    font-weight: 100;
    bottom: 0px;
    color: white;
    font-family: $style3;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.445);
    width: 100%;
  }

  #version {
    position: absolute;
    color: white;
    right: 10px;
    bottom: 10px;
  }

  .btn-animated {
    text-decoration: none;
    transition: 0.5s;
  }

  .btn-animated:hover {
    transform: scale(1.2);
  }

  #clouds {
    position: absolute;
    top: 100px;
  }

  .clouds1 {
    position: relative;
    top: 0px;
    left: -200px;

    -webkit-animation: motion 20s infinite linear;
    -moz-animation: motion 20s infinite linear;
    -o-animation: motion 20s infinite linear;
  }

  .clouds2 {
    position: relative;
    top: -200px;
    left: 200px;

    opacity: 0.2;

    -webkit-animation: motion 50s infinite linear;
    -moz-animation: motion 50s infinite linear;
    -o-animation: motion 50s infinite linear;
  }
  .clouds3 {
    position: relative;
    top: -300px;
    left: 0px;

    opacity: 0.5;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }
  .clouds4 {
    position: relative;
    top: -900px;
    left: 500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds5 {
    position: relative;
    top: 0px;
    left: -500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds6 {
    position: relative;
    top: -800px;
    left: 800px;

    opacity: 0.3;

    -webkit-animation: motion 15s infinite linear;
    -moz-animation: motion 15s infinite linear;
    -o-animation: motion 15s infinite linear;
  }
  .clouds7 {
    position: relative;
    top: -600px;
    left: -1000px;

    opacity: 0.2;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds8 {
    position: relative;
    top: -300px;
    left: 1000px;

    opacity: 0.1;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }

  @keyframes motion {
    0% {
      margin-right: 1000px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      margin-left: 1000px;
      opacity: 0;
    }
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  .home {
    width: 100%;
    height: 100%;
    background: url("../assets/img/background.jpg");
    background-size: cover;
    background-position: center;
  }

  .container {
    position: relative;
    text-align: center;
  }

  #title {
    font-size: 8em;
    background-image: url("../assets/img/home-title.jpg");
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 100px;
  }

  .cv-gen-btn {
    background-image: url("../assets/img/gradient1.jpg");
    background-position: center;
    background-size: cover;
    color: white !important;
    font-weight: bold !important;
  }

  .cl-gen-btn {
    background-image: url("../assets/img/gradient2.jpg");
    background-position: bottom;
    background-size: cover;
    color: white !important;
    font-weight: bold !important;
  }

  #center-elements {
    margin-top: 10%;
  }

  #footer {
    position: absolute;
    font-family: $style3;
    font-weight: 100;
    bottom: 0px;
    color: white;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.445);
    width: 100%;
  }

  #version {
    position: absolute;
    color: white;
    right: 10px;
    bottom: 10px;
  }

  .btn-animated {
    text-decoration: none;
    transition: 0.5s;
  }

  .btn-animated:hover {
    transform: scale(1.2);
  }

  #clouds {
    position: absolute;
    top: 100px;
  }

  .clouds1 {
    position: relative;
    top: 0px;
    left: -200px;

    -webkit-animation: motion 20s infinite linear;
    -moz-animation: motion 20s infinite linear;
    -o-animation: motion 20s infinite linear;
  }

  .clouds2 {
    position: relative;
    top: -200px;
    left: 200px;

    opacity: 0.2;

    -webkit-animation: motion 50s infinite linear;
    -moz-animation: motion 50s infinite linear;
    -o-animation: motion 50s infinite linear;
  }
  .clouds3 {
    position: relative;
    top: -300px;
    left: 0px;

    opacity: 0.5;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }
  .clouds4 {
    position: relative;
    top: -900px;
    left: 500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds5 {
    position: relative;
    top: 0px;
    left: -500px;

    opacity: 0.7;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds6 {
    position: relative;
    top: -800px;
    left: 800px;

    opacity: 0.3;

    -webkit-animation: motion 15s infinite linear;
    -moz-animation: motion 15s infinite linear;
    -o-animation: motion 15s infinite linear;
  }
  .clouds7 {
    position: relative;
    top: -600px;
    left: -1000px;

    opacity: 0.2;

    -webkit-animation: motion 40s infinite linear;
    -moz-animation: motion 40s infinite linear;
    -o-animation: motion 40s infinite linear;
  }
  .clouds8 {
    position: relative;
    top: -300px;
    left: 1000px;

    opacity: 0.1;

    -webkit-animation: motion 25s infinite linear;
    -moz-animation: motion 25s infinite linear;
    -o-animation: motion 25s infinite linear;
  }

  @keyframes motion {
    0% {
      margin-right: 1000px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      margin-left: 1000px;
      opacity: 0;
    }
  }
}
</style>
