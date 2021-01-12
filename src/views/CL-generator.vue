<template>
  <div class="generator fade-medium">
    <NavbarCL :sectionName="sectionName" />
    <v-row>
      <!-- ***************** MAIN CONTENT ***************** -->
      <v-col cols="9">
        <Maingenerator
          :colorBackground="color"
          :backgroundimg="imagepicked"
          :backimgbtn="backgroundbtn"
          :textcolor="textcolor"
        />
      </v-col>
      <!-- ***************** SIDEBAR MENU ***************** -->
      <v-col cols="3">
        <v-navigation-drawer right width="400" id="sidemenu">
          <v-sheet height="100%" width="100%" class="pa-5 cyan--text" color="#212529">
            <h3>Customing options</h3>

            <!-- ***************** BACKGROUND COLOR PICKER ***************** -->
            <v-card color="secondary darken-2" class="pa-2 my-4">
              <p class="font-weight-bold my-5">Background color</p>
              <v-text-field v-model="color" hide-details class="ma-0 pa-0" solo>
                <template v-slot:append>
                  <v-menu
                    v-model="menu"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ on }">
                      <div :style="swatchStyle" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="color" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </v-card>
            <!-- ***************** BACKGROUND IMAGE PICKER ***************** -->
            <v-card color="secondary darken-2" class="pa-2 my-4">
              <p class="font-weight-bold my-5">Background image</p>
              <v-container>
                <v-row>
                  <v-col cols="4" v-for="(image, i) in images" :key="i">
                    <v-img
                      :src="image.img"
                      id="image-picker"
                      @click="pickBackground(image.img)"
                    ></v-img>
                  </v-col>

                  <v-btn
                    :class="on ? 'primary' : 'white'"
                    v-on:click="
                      backgroundbtn = !backgroundbtn;
                      on = !on;
                    "
                    id="on-off-btn"
                    large
                    >On / Off <br />image background</v-btn
                  >
                </v-row>
              </v-container>
            </v-card>

            <!-- ***************** TEXT COLOR INPUT ***************** -->
            <v-card color="secondary darken-2" class="pa-2 my-4">
              <p class="font-weight-bold my-5">Main text color</p>
              <label class="cyan--text"
                >Write a color <br /><span class="white--text"
                  >(Text, Hex and RGB are available)</span
                ></label
              >
              <input
                type="text"
                v-model="textcolor"
                placeholder="Write here"
                class="form-control"
              />
            </v-card>
          </v-sheet>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Maingenerator from "../components/Maingenerator";
import NavbarCL from "../components/NavbarCL";

export default {
  components: {
    Maingenerator,
    NavbarCL,
  },
  data() {
    return {
      sectionName: "Cover Letter Generator",
      backgroundbtn: false,
      imagepicked: require("../assets/img/pickbackground0.jpg"),
      textcolor: "black",
      color: "#FFFFFF",
      menu: false,
      on: false,
      images: [
        { img: require("../assets/img/pickbackground0.jpg"), id: 0 },
        { img: require("../assets/img/pickbackground1.jpg"), id: 1 },
        { img: require("../assets/img/pickbackground2.jpg"), id: 2 },
        { img: require("../assets/img/pickbackground3.jpg"), id: 3 },
        { img: require("../assets/img/pickbackground4.jpg"), id: 4 },
        { img: require("../assets/img/pickbackground5.jpg"), id: 5 },
        { img: require("../assets/img/pickbackground6.jpg"), id: 6 },
        { img: require("../assets/img/pickbackground7.jpg"), id: 7 },
        { img: require("../assets/img/pickbackground8.jpg"), id: 8 },
      ],
    };
  },
  computed: {
    swatchStyle() {
      const { color, menu } = this;
      return {
        backgroundColor: color,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        border: "1px solid gray",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
  },
  methods: {
    pickBackground(img) {
      this.imagepicked = img;
      console.log(img);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";
@import "src/css/fade";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  .generator {
    width: 100%;
    height: 100%;
    background: url("../assets/img/generator.jpg");
    background-size: cover;
    background-position: center;
  }

  #sidemenu {
    position: absolute;
    max-width: 250px;
    height: 1000px;
    top: 0px;
    right: 0px;
    bottom: 0px;
  }

  h3 {
    text-align: center;
    color: white;
    font-size: 15px;
  }

  p {
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 16px;
  }

  #color-picker {
    border: 1px solid black;
  }

  #image-picker {
    width: 50px;
    height: 70px;
    transition: 0.5s;

    box-shadow: 0px 3px 10px rgb(0, 0, 0);
    border-radius: 2px;
  }

  #image-picker:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  #on-off-btn {
    font-size: 15px !important;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  .generator {
    width: 100%;
    height: 100%;
    background: url("../assets/img/generator.jpg");
    background-size: cover;
    background-position: center;
  }

  #sidemenu {
    position: fixed;
    max-width: 350px;
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
  }

  h3 {
    text-align: center;
    color: white;
  }

  p {
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5em;
    text-align: center;
  }

  #color-picker {
    border: 1px solid black;
  }

  #image-picker {
    width: 80px;
    height: 100px;
    transition: 0.5s;
    box-shadow: 0px 3px 10px rgb(0, 0, 0);
    border-radius: 2px;
  }

  #image-picker:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
