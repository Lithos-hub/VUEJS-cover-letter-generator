<template>
  <div id="document">
    <div class="row no-gutters">
      <!-- MAIN CONTENT -->
      <div class="col-lg-8" id="main-col">
        <!-- NAME -->
        <h1 id="fullname">{{ info_json.name }} {{ info_json.lastName }}</h1>
        <h2 id="position-h1">{{ info_json.position }}</h2>
        <!-- EDUCATION -->
        <div v-if="info_json.education.length > 0">
          <div class="divider"></div>
          <h4>Education</h4>
          <div v-for="(item, i) in info_json.education" :key="'A' + i">
            <div class="period">{{ item.period }}</div>
            <h5>
              {{ item.centerName }} -
              <span id="studies_name">{{ item.studiesName }}</span>
            </h5>
          </div>
        </div>
        <!-- EXPERIENCE -->
        <div v-if="info_json.haveExperience && info_json.experience.length > 0">
          <div class="divider"></div>
          <h4>Experience</h4>
          <div v-for="(item, i) in info_json.experience" :key="'B' + i">
            <div class="period">{{ item.period }}</div>
            <h5>
              {{ item.companyName }} -
              <span id="position_name">{{ item.positionName }}</span>
            </h5>
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
          <h4>Aditional information</h4>
          <div id="aditional-info-section">
            <div v-if="info_json.lang_selected.length > 0">
              <h6 class="aditional-h6">Spoken languages:</h6>
              <div class="row no-gutters">
                <div
                  class="col-lg-4"
                  v-for="(item, i) in info_json.lang_selected"
                  :key="'C' + i"
                >
                  <p id="spoken-languages">
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </div>
            <div v-if="info_json.softskills_selected.length > 0">
              <h6 class="aditional-h6">Soft skills:</h6>
              <div class="row no-gutters">
                <div
                  class="col-lg-4"
                  v-for="(item, i) in info_json.softskills_selected"
                  :key="'D' + i"
                >
                  <p id="soft-skills">
                    {{ item }}
                  </p>
                </div>
              </div>
            </div>
            <div v-if="info_json.otherskills_selected.length > 0">
              <h6 class="aditional-h6">Other skills:</h6>

              <div class="other-skills">
                <div class="row no-gutters">
                  <div
                    class="col-lg-4"
                    v-for="(item, i) in info_json.otherskills_selected"
                    :key="'D' + i"
                  >
                    <p id="other-skills">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- COMPLEMENTARY EDUCATION -->
        <div v-if="info_json.comp_education.length > 0">
          <h4>Complementary education</h4>
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
      </div>
      <div class="col-lg-3" id="side-col">
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
            <v-icon class="side-menu-icons" v-if="item.info.length > 0">{{
              item.icon
            }}</v-icon>
            <div id="contact-text">{{ item.info }}</div>
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
      </div>
    </div>
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

<style lang="scss" scoped>
@import "src/scss/variables";

#document {
  position: relative;
  height: 1120px;
  width: 800px;
}

div {
  text-align: center;
}

h4 {
  text-align: center;
  font-size: 1.2em;
  color: $primary;
}

h5 {
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}

p {
  text-align: center;
  margin: 0 auto;
  font-size: 12px;
}

.period {
  text-align: center;
  font-size: 10px;
}

.divider {
  height: 10px;
  background: $alea_primary;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
}

.aditional-h6 {
  color: cyan;
  text-align: center;
}

span:first-child {
  font-weight: normal;
}

#main-col {
  position: relative;
  margin: 20px;
}

#fullname {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  color: $alea_primary;
  font-family: $style5;
}
#position-h1 {
  text-align: center;
  font-size: 1em;
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
  font-size: 14px;
  color: white;
  text-align: center;
}

.other-skills {
  font-size: 14px;
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
  padding: 10px;
}

#cv-image {
  margin: 5px;
  border-radius: 5px;
  text-align: center;
}

#sidemenu-main-information {
  margin-top: 50px;
  color: white;
  font-size: 14px;
  text-align: center;
  font-family: $style5;

  div {
    display: block;
  }

  h5 {
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 5px;
    margin-bottom: 20px;
    color: $primary;
  }
}

#sidemenu-superior-info {
  font-size: 18px;
}

#contact-text {
  font-size: 12px;
}

.side-menu-icons {
  color: $primary !important;
  font-size: 18px !important;
  margin-top: 20px;
  margin-bottom: 20px;
}

#technical-skills {
  text-align: center;
  font-size: 12px;
}
</style>
