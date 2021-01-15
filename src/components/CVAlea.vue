<template>
  <div id="document">
    <v-row>
      <!-- MAIN CONTENT -->
      <v-col cols="8" id="main-col">
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
        <div v-if="info_json.haveExperience && info_json.experience.length > 0">
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
        </div>
        <!-- ADITIONAL INFORMATION -->
        <div
          v-if="
            info_json.lang_selected.length > 0 ||
            info_json.softskills_selected.length > 0 ||
            info_json.otherskills_selected.length > 0
          "
        >
          <h4 class="white--color">Aditional information</h4>
          <div id="aditional-info-section" class="pt-5">
            <div v-if="info_json.lang_selected.length > 0">
              <h6 class="cyan--text">Spoken languages:</h6>
              <v-row no-gutters>
                <v-col
                  cols="4"
                  v-for="(item, i) in info_json.lang_selected"
                  :key="'C' + i"
                >
                  <p id="spoken-languages">
                    {{ item.name }}
                  </p>
                </v-col>
              </v-row>
            </div>
            <div v-if="info_json.softskills_selected.length > 0">
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
            </div>
            <div v-if="info_json.otherskills_selected.length > 0">
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
          </div>
        </div>
        <!-- COMPLEMENTARY EDUCATION -->
        <div v-if="info_json.comp_education.length > 0">
          <h4 class="white--color">Complementary education</h4>
          <ul style="list-style: none">
            <li v-for="(item, i) in info_json.comp_education" :key="'D' + i">
              <p id="comp_education_list">
                <v-icon class="mr-2">mdi-check-bold</v-icon>{{ item }}
              </p>
            </li>
          </ul>
          <div class="divider"></div>
        </div>
        <!-- SIDE COLUMN CONTENT -->
      </v-col>
      <v-col cols="3" id="side-col">
        <!-- IMAGE -->
        <v-img
          v-if="info_json.image"
          :src="info_json.imageUrl"
          aspect-ratio="1"
          id="cv-image"
        ></v-img>
        <!-- MAIN INFORMATION -->
        <div id="sidemenu-main-information">
          <div id="sidemenu-superior-info">
            <div>{{ info_json.name }} {{ info_json.lastName }}</div>
            <div>Birthdate: {{ info_json.birthdate }}</div>
          </div>
          <hr />
          <!-- CONTACT -->
          <h5>Contact</h5>
          <div v-for="(item, i) in info_json.contact_info" :key="i">
            <v-icon class="side-menu-icons">{{ item.icon }}</v-icon>
            <div>{{ item.info }}</div>
          </div>
          <hr />
          <!-- TECHNICAL SKILLS -->
          <div v-if="info_json.technicalskills.length > 0">
            <h5>Technical Skills</h5>
            <div id="technical-skills">
              <div v-for="(item, i) in info_json.technicalskills" :key="'E' + i">
                {{ item }}
              </div>
            </div>
          </div>
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
  height: 10px;
  background: $alea_primary;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 15px;
}

span:first-child {
  font-weight: normal;
}

#main-col {
  position: relative;
  margin: 30px;
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
  background: #313131;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
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

#technical-skills {
  text-align: center;
}
</style>
