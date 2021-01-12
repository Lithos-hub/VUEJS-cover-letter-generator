<template>
  <div class="select-template">
    <NavbarCL :sectionName="sectionName" />

    <v-container class="mt-15">
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

      <v-sheet
        width="100%"
        height="100%"
        elevation="10"
        class="pa-5 secondary darken-2 rounded"
      >
        <v-row class="white--text">
          <v-col>
            <!-- ****************************** MAIN INFORMATION ****************************** -->
            <h4>Main information</h4>
            <v-text-field
              label="Name"
              v-model="name"
              class="input cyan--text"
              dark
            ></v-text-field>
            <v-text-field
              label="Last Name"
              v-model="lastName"
              class="input cyan--text"
              dark
            ></v-text-field>
            <v-text-field
              label="Age"
              v-model="age"
              class="input cyan--text"
              dark
            ></v-text-field>
            <v-text-field
              label="Position"
              v-model="position"
              class="input cyan--text"
              dark
            ></v-text-field>
            <!-- ****************************** USER IMAGE ****************************** -->
            <h4>User image</h4>
            <v-file-input
              label="Select image"
              prepend-icon="mdi-camera"
              class="input cyan--text"
              dark
              v-model="userImage"
            ></v-file-input>
            <!-- ****************************** ADITIONAL INFORMATION ****************************** -->
            <h4>Aditional information</h4>
            <h5 class="text-left cyan--text">Languages:</h5>
          </v-col>
          <v-col>
            <!-- ****************************** EDUCATION ****************************** -->
            <h4>Education</h4>

            <v-row v-if="fullEducation >= 0">
              <v-col cols="6">
                <v-text-field
                  label="School / University name"
                  v-model="eduName1"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="eduPeriod1"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="fullEducation >= 1">
              <v-col cols="6">
                <v-text-field
                  label="School / University name"
                  v-model="eduName2"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="eduPeriod2"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullEducation--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="fullEducation >= 2">
              <v-col cols="6">
                <v-text-field
                  label="School / University name"
                  v-model="eduName3"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="eduPeriod3"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullEducation--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="fullEducation >= 3">
              <v-col cols="6">
                <v-text-field
                  label="School / University name"
                  v-model="eduName4"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="eduPeriod4"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullEducation--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-btn
              block
              v-if="fullEducation < 3"
              v-on:click="fullEducation++"
              class="add-more-edu-btn"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
            <!-- ****************************** EXPERIENCE ****************************** -->
            <h4 class="mt-10">Experience</h4>
            <v-row v-if="fullExperience >= 0">
              <v-col cols="3">
                <v-text-field
                  label="Company name"
                  v-model="companyName1"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="Position name"
                  v-model="positionName1"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="expPeriod1"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row v-if="fullExperience >= 1">
              <v-col cols="3">
                <v-text-field
                  label="Company name"
                  v-model="companyName2"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="Position name"
                  v-model="positionName2"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="expPeriod2"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullExperience--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="fullExperience >= 2">
              <v-col cols="3">
                <v-text-field
                  label="Company name"
                  v-model="companyName3"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="Position name"
                  v-model="positionName3"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="expPeriod3"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullExperience--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-row v-if="fullExperience >= 3">
              <v-col cols="3">
                <v-text-field
                  label="Company name"
                  v-model="companyName4"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  label="Position name"
                  v-model="positionName4"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  label="Period (ex. 2016-2018 or 2017-current)"
                  v-model="expPeriod4"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="ma-auto"
                ><v-btn color="red" icon v-on:click="fullExperience--"
                  ><v-icon>mdi-close</v-icon></v-btn
                ></v-col
              >
            </v-row>
            <v-btn
              block
              v-if="fullExperience < 3"
              v-on:click="fullExperience++"
              class="add-more-exp-btn"
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import ComebackBtn from "../components/Comeback-btn.vue";
import NavbarCL from "../components/NavbarCL";

export default {
  data() {
    return {
      dialog: false,
      sectionName: "CV generator",
      name: "",
      lastName: "",
      age: "",
      position: "",
      userImage: null,
      eduName1: "",
      eduPeriod1: "",
      eduName2: "",
      eduPeriod2: "",
      eduName3: "",
      eduPeriod3: "",
      eduName4: "",
      eduPeriod4: "",
      fullEducation: 0,
      fullExperience: 0,
      companyName1: "",
      positionName1: "",
      expPeriod1: "",
      companyName2: "",
      positionName2: "",
      expPeriod2: "",
      companyName3: "",
      positionName3: "",
      expPeriod3: "",
      companyName4: "",
      positionName4: "",
      expPeriod4: "",
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
.title {
  font-size: 2em;
  font-family: $style3 !important;
  margin-top: 20px;
}
.comeback-btn {
  margin: 0 auto;
}

.input {
  padding: 10px;
  border-radius: 15px;
}

.add-more-edu-btn {
  background: url("../assets/img/gradient1.jpg");
  background-position: bottom;
  background-size: cover;
  color: white;
}
.add-more-exp-btn {
  background: url("../assets/img/gradient1.jpg");
  background-position: center;
  background-size: cover;
  color: white;
}

#readme-btn {
  animation: pulse 0.8s linear infinite alternate;
  transition: 1s;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
</style>
