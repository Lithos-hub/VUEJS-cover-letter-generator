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
      <v-row>
        <v-col cols="12" class="align-center">
          <div id="center-elements">
            <h1 class="pa-5" id="title">Cover Letter Generator</h1>
            <router-link to="/main" id="start-btn">
              <v-btn primary dark class="centered btn-animated" large outlined
                >Start</v-btn
              >
            </router-link>
            <div class="d-block">
              <router-link to="/about" id="about-btn">
                <v-btn class="error centered mt-5 ma-auto btn-animated">About</v-btn>
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-footer height="50" class="transparent text-right" id="footer">
      {{ year }} - Carlos Segura García
    </v-footer>
    <p id="version" class="ma-auto align-content-end">
      <a
        href="https://github.com/Lithos-hub/VUEJS-cover-letter-generator"
        style="text-decoration: none"
      >
        <v-btn icon> <v-icon style="color: purple">mdi-github</v-icon> </v-btn>
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
      subversion: 1,
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
    background-image: url("../assets/img/text1.jpg");
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
    background-image: url("../assets/img/text1.jpg");
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
    font-size: 10em;
    background-image: url("../assets/img/text1.jpg");
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
