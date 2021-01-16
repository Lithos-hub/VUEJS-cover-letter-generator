<template>
  <div class="about">
    <v-img src="../assets/img/balloon.png" width="5%" class="balloon"></v-img>
    <v-img
      src="../assets/img/landscape.png"
      width="100%"
      class="landscape"
      id="landscape"
    ></v-img>

    <v-row no-gutters>
      <v-col id="col-about-left"></v-col>
      <v-col id="col-about">
        <v-sheet
          class="pa-5 ma-auto"
          elevation="15"
          width="100%"
          height="100%"
          id="sheet"
        >
          <v-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ on, attrs }" id="sheets">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="white--text"
                depressed
                color="transparent"
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-btn
              width="100%"
              small
              color="red"
              dark
              @click="sheet = !sheet"
              id="close-btn"
            >
              close
            </v-btn>

            <v-row no-gutters>
              <v-col lg="6" md="12" id="left-col">
                <v-sheet height="100%" width="100%" id="english-sheet">
                  <v-img
                    src="../assets/img/english-icon.jpg"
                    class="ma-auto flag"
                  ></v-img>
                  <p class="text">
                    This application is divided into two modules: a resume generator (CV
                    Generator, available from Version 2.0.0) and a cover letter generator.
                    <br />
                    <br />
                    The user, through a form, enters the information he wants to generate
                    in the document and, once ready, can generate it in PDF format and
                    download it if desired.
                    <br /><br />
                    In next updates, I will add improvements to the code, correcting
                    possible errors and expanding the possibilities of the app with new
                    features.
                    <br /><br />
                    The mobile design will surely do it from scratch with a totally
                    different interface. This new feature I will try to make it ready for
                    the next version 3.0.0.
                  </p>
                </v-sheet>
              </v-col>
              <v-col lg="6" md="12" id="right-col">
                <v-sheet height="100%" width="100%" id="spanish-sheet">
                  <v-img
                    src="../assets/img/spanish-icon.jpg"
                    class="ma-auto flag"
                  ></v-img>
                  <p class="text">
                    Esta aplicación se divide en dos módulos: un generador de Currículums
                    (CV Generator, disponible a partir de la Version 2.0.0) y un generador
                    de Cartas de Presentación (Cover Letter Generator).
                    <br /><br />
                    El usuario, mediante un formulario, introduce la información que desea
                    generar en el documento y, una vez listo, puede generarlo en formato
                    PDF y descargarlo si lo desea.
                    <br /><br />
                    Con futuras actualizaciones, iré añadiendo mejoras en el código,
                    corrigiendo posibles errores y ampliando las posibilidades de la app
                    con nuevas características.
                    <br /><br />
                    El diseño para móviles seguramente lo haga de cero con una interfaz
                    totalmente distinta. Esta nueva característica intentaré que esté
                    lista para la siguiente versión 3.0.0.
                  </p>
                </v-sheet>
              </v-col>
            </v-row>
          </v-bottom-sheet>
        </v-sheet>
      </v-col>

      <v-col id="col-comeback-btn">
        <comeback-btn class="mt-5" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";

export default {
  components: { ComebackBtn },
  data() {
    return {
      sheet: false,
    };
  },
};
</script>
<style lang="scss" scoped>
// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #sheet {
    background: url("../assets/img/iVitae-bar.jpg");
    text-align: center;
  }

  #landscape {
    height: 100%;
  }
  .flag {
    width: 40px;
    height: 20px;
  }
  .text {
    font-size: 10px !important;
  }
  #spanish-sheet,
  #english-sheet {
    padding: 5px !important;
  }
  #comeback-btn {
    text-decoration: none;
  }
  .about {
    width: 100%;
    height: 100%;
    background: url("../assets/img/about-background.jpg");
    background-size: cover;
    background-position: center;
  }

  .balloon {
    display: none;
  }

  .landscape {
    position: absolute;
    top: 30px;
  }

  @keyframes motion {
    0% {
      margin-right: 2000px;
      opacity: 0;
      margin-top: 0px;
    }
    40% {
      opacity: 1;
      margin-top: 300px;
    }
    100% {
      margin-bottom: 200px;
      margin-top: -100px;
      margin-left: 2000px;
      opacity: 0;
    }
  }

  .text {
    margin: 10px;
    font-size: 12px;
    text-align: justify;
  }

  #sheets {
    position: relative;
    justify-content: center;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
  }

  #col-about-left {
    display: none;
  }

  #col-comeback-btn {
    min-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  #comeback-btn {
    display: block !important;
    margin: 0 auto;
    text-align: center;
  }

  #close-btn {
    padding: 20px;
    position: relative;
    top: 0px;
    margin: 0 auto;
    animation: movebtn 0.8s ease-in-out;
  }

  @keyframes movebtn {
    0% {
      margin-left: -5000px;
      opacity: 0;
    }
    100% {
      margin-left: 0px;
      opacity: 1;
    }
  }
}

// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #sheet {
    background: url("../assets/img/iVitae-bar.jpg");
    text-align: center;
  }

  .flag {
    width: 50px;
    height: 30px;
  }
  .text {
    font-size: 16px !important;
  }

  #spanish-sheet,
  #english-sheet {
    padding: 20px !important;
    position: relative;
    margin-bottom: 100px;
  }
  #col-about {
    min-width: 100%;
    display: inline;
  }
  #col-about-left {
    display: inline;
  }

  #left-col,
  #right-col {
    padding-bottom: 100px;
  }

  #col-comeback-btn {
    margin: 0 auto;
    display: inline !important;
    text-align: center;
  }

  #comeback-btn {
    display: inline !important;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .about {
    width: 100%;
    height: 100%;
    background: url("../assets/img/about-background.jpg");
    background-size: cover;
    background-position: center;
  }

  .balloon {
    display: inline;
    position: absolute;
    top: 200px;
    left: -200px;
    filter: grayscale(0.3);

    -webkit-animation: motion 80s infinite linear;
    -moz-animation: motion 80s infinite linear;
    -o-animation: motion 80s infinite linear;
  }

  .landscape {
    position: absolute;
    top: 30px;
  }

  @keyframes motion {
    0% {
      margin-right: 2000px;
      opacity: 0;
      margin-top: 0px;
    }
    40% {
      opacity: 1;
      margin-top: 300px;
    }
    100% {
      margin-bottom: 200px;
      margin-top: -100px;
      margin-left: 2000px;
      opacity: 0;
    }
  }

  .text {
    margin-bottom: 300px;
    font-size: 15px;
    text-align: justify;
  }

  #sheets {
    position: relative;
    justify-content: center;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    padding-bottom: 100px !important;
  }

  #close-btn {
    padding: 40px;
    position: absolute;
    top: 0px;
    margin: 0 auto;
    animation: movebtn 0.8s ease-in-out;
  }

  @keyframes movebtn {
    0% {
      margin-left: -5000px;
      opacity: 0;
    }
    100% {
      margin-left: 0px;
      opacity: 1;
    }
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #sheet {
    background: url("../assets/img/iVitae-bar.jpg");
    text-align: center;
  }

  body {
    overflow: hidden;
  }
  .flag {
    width: 50px;
    height: 30px;
  }
  .text {
    font-size: 22px !important;
  }

  #left-col,
  #right-col {
    padding-bottom: 0px;
  }

  #spanish-sheet,
  #english-sheet {
    padding: 50px !important;
    position: relative;
    margin-bottom: 100px;
  }

  #col-about-left {
    display: inline;
  }

  #comeback-btn {
    display: inline !important;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
  .about {
    width: 100%;
    height: 100%;
    background: url("../assets/img/about-background.jpg");
    background-size: cover;
    background-position: center;
  }

  .balloon {
    display: inline;
    position: absolute;
    top: 200px;
    left: -200px;
    filter: grayscale(0.3);

    -webkit-animation: motion 80s infinite linear;
    -moz-animation: motion 80s infinite linear;
    -o-animation: motion 80s infinite linear;
  }

  .landscape {
    position: absolute;
    top: 30px;
  }

  @keyframes motion {
    0% {
      margin-right: 2000px;
      opacity: 0;
      margin-top: 0px;
    }
    40% {
      opacity: 1;
      margin-top: 300px;
    }
    100% {
      margin-bottom: 200px;
      margin-top: -100px;
      margin-left: 2000px;
      opacity: 0;
    }
  }

  .text {
    margin: 20px;
    font-size: 18px;
    text-align: justify;
  }

  #sheets {
    position: relative;
    justify-content: center;
  }

  #close-btn {
    padding: 55px;
    position: relative;
    top: 0px;
    margin: 0 auto;
    animation: movebtn 0.8s ease-in-out;
  }

  @keyframes movebtn {
    0% {
      margin-left: -5000px;
      opacity: 0;
    }
    100% {
      margin-left: 0px;
      opacity: 1;
    }
  }
}
</style>
