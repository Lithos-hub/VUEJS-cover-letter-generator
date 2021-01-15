<template>
  <div id="document">
    <v-row>
      <!-- MAIN CONTENT -->
      <v-col cols="9" id="main-col">
        <!-- NAME -->
        <h1 id="fullname">{{ info_json.name }} {{ info_json.lastName }}</h1>
        <h2 id="position-h1">{{ info_json.position }}</h2>
        <!-- EDUCATION -->
        <h4>Education</h4>
        <div class="divider"></div>
        <div v-for="(item, i) in info_json.education" :key="'A' + i">
          <h5>
            {{ item.centerName }} -
            <span id="studies_name">{{ item.studiesName }}</span>
          </h5>
          <small>{{ item.period }}</small>
        </div>
        <!-- EXPERIENCE -->
        <h4>Experience</h4>
        <div class="divider"></div>
        <div v-for="(item, i) in info_json.experience" :key="'B' + i">
          <h5>
            {{ item.companyName }} -
            <span id="studies_name">{{ item.positionName }}</span>
          </h5>
          <small>{{ item.period }}</small>
          <p>{{ item.textarea }}</p>
        </div>
        <!-- ADITIONAL INFORMATION -->
        <h4 class="white--color">Aditional information</h4>
        <div id="aditional-info-section" class="pt-5">
          <h6 class="cyan--text">Spoken languages:</h6>
          <v-row no-gutters>
            <v-col cols="4" v-for="(item, i) in info_json.lang_selected" :key="'C' + i">
              <p id="spoken-languages">
                {{ item.name }}
              </p>
            </v-col>
          </v-row>
          <h6 class="cyan--text">Soft skills:</h6>
          <v-row no-gutters>
            <v-col
              cols="4"
              v-for="(item, i) in info_json.softskills_selected"
              :key="'D' + i"
            >
              <p id="soft-skills">
                {{ item }}
              </p>
            </v-col>
          </v-row>
          <h6 class="cyan--text">Other skills:</h6>

          <v-row class="other-skills">
            <v-col
              cols="4"
              v-for="(item, i) in info_json.otherskills_selected"
              :key="'D' + i"
            >
              <p id="other-skills">
                {{ item }}
              </p>
            </v-col>
          </v-row>
        </div>
        <!-- COMPLEMENTARY EDUCATION -->
        <h4 class="white--color">Complementary education</h4>
        <ul style="list-style: none">
          <li v-for="(item, i) in info_json.comp_education" :key="'D' + i">
            <p id="comp_education_list">
              <v-icon class="mr-2">mdi-check-bold</v-icon>{{ item }}
            </p>
          </li>
        </ul>
        <!-- SIDE COLUMN CONTENT -->
      </v-col>
      <v-col cols="3" id="side-col">
        <!-- CV CANDIDATE IMAGE -->
        <v-img
          v-if="info_json.image"
          :src="info_json.imageUrl"
          aspect-ratio="1"
          id="cv-image"
        ></v-img>
        <div id="sidemenu-main-information">
          <div id="sidemenu-superior-info">
            <div>{{ info_json.name }} {{ info_json.lastName }}</div>
            <div>Birthdate: {{ info_json.birthdate }}</div>
          </div>
          <hr />
          <h5>Contact</h5>
          <v-icon class="side-menu-icons">mdi-cellphone</v-icon>
          <div>{{ info_json.mob_number }}</div>
          <v-icon class="side-menu-icons">mdi-phone</v-icon>
          <div>{{ info_json.tel_number }}</div>
          <v-icon class="side-menu-icons">mdi-at</v-icon>
          <div>{{ info_json.email }}</div>
          <v-icon class="side-menu-icons">mdi-web</v-icon>
          <div>{{ info_json.website }}</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["info_json"],
  name: "CVAlea",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#document {
  position: relative;
  margin: 0 auto;
  height: 1750px;
  width: 1240px;
  background: white;
  border: 1px solid black;
  padding-bottom: 250px;
}

h4 {
  text-align: center;
  font-size: 2em;
  color: $primary;
}

h5 {
  font-weight: bold;
}

p {
  text-align: justify;
  margin-left: 50px;
  margin-right: 50px;
}

.divider {
  height: 5px;
  background: $alea_primary;
  width: 100%;
  margin-bottom: 20px;
}

span:first-child {
  font-weight: normal;
}

#main-col {
  position: absolute;
  top: 20px;
  left: 0px;
}

#fullname {
  font-size: 5em;
  font-weight: bold;
  text-transform: uppercase;
  color: $alea_primary;
  font-family: $style5;
}
#position-h1 {
  font-size: 3em;
  font-weight: bold;
  text-transform: uppercase;
  font-family: $style3;
  letter-spacing: 5px;
  color: black;
}

#aditional-info-section {
  background: $alea_primary;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

#spoken-languages,
#soft-skills {
  font-size: 18px;
  color: white;
  text-align: center;
}

.other-skills {
  font-size: 18px;
  color: white;
  text-align: center;
}
#side-col {
  background-color: #313131;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
}

#sidemenu-main-information {
  margin-top: 50px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: $style5;

  div {
    display: block;
  }

  h5 {
    font-size: 1.5em;
    font-weight: normal;
    letter-spacing: 5px;
    margin-bottom: 20px;
    color: $primary;
  }
}

#sidemenu-superior-info {
  font-size: 25px;
}

.side-menu-icons {
  color: white !important;
  font-size: 1.5em !important;
  margin-top: 20px;
}
</style>
