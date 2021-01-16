<template>
  <div>
    <v-btn block color="red darken-2" dark large @click="savePDF" class="my-2"
      >Generate PDF</v-btn
    >
    <v-sheet
      width="100%"
      height="100%"
      elevation="15"
      class="pa-5 secondary darken-2 rounded"
      id="CV-formulary"
    >
      <v-row class="white--text">
        <!-- LEFT COLUMN -->
        <v-col>
          <!-- ****************************** MAIN INFORMATION ****************************** -->
          <h4>Main information</h4>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Name"
                v-model="info_json.name"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Last Name"
                v-model="info_json.lastName"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Birthdate (year)"
                v-model="info_json.birthdate"
                type="number"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Position (e.g. web developer)"
                v-model="info_json.position"
                class="input cyan--text"
                dark
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Mobile"
                v-model="info_json.contact_info[0].info"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Telephone"
                v-model="info_json.contact_info[1].info"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Email"
                :rules="emailRules"
                v-model="info_json.contact_info[2].info"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Website"
                v-model="info_json.contact_info[3].info"
                class="input cyan--text"
                dark
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- ****************************** USER IMAGE ****************************** -->
          <h4>User image</h4>
          <v-file-input
            @click="onUpload"
            label="Select image"
            prepend-icon="mdi-camera"
            class="input cyan--text"
            dark
          ></v-file-input>
          <input
            @change="onFileSelected"
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
          />
          <!-- ****************************** ADITIONAL INFORMATION ****************************** -->
          <h4>Aditional information</h4>
          <h5 class="text-left cyan--text">Languages:</h5>
          <v-combobox
            v-model="info_json.lang_selected"
            :items="info_json.languages"
            item-text="name"
            label="Select spoken languages"
            multiple
            chips
            dark
          >
          </v-combobox>
          <h5 class="text-left cyan--text">Soft skills:</h5>
          <v-combobox
            v-model="info_json.softskills_selected"
            :items="info_json.softskills"
            label="My soft skills"
            multiple
            chips
            dark
          >
          </v-combobox>
          <h5 class="text-left cyan--text">Other skills:</h5>
          <v-row no-gutters>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Driving license"
                label="Driving license"
                dark
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Graphic design"
                label="Graphic design"
                dark
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Document layout"
                label="Document Layout"
                dark
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Office automation"
                label="Office automation"
                dark
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Database management"
                label="Database management"
                dark
              ></v-checkbox>
            </v-col>
            <v-col>
              <v-checkbox
                v-model="info_json.otherskills_selected"
                value="Communication and writing"
                label="Communication and writing"
                dark
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-col>
        <!-- RIGHT COLUMN -->
        <v-col>
          <!-- ****************************** EDUCATION ****************************** -->
          <h4>Education</h4>
          <v-row v-for="(item, i) in info_json.education" :key="i">
            <v-col cols="4">
              <v-text-field
                label="School / University name"
                v-model="item.centerName"
                class="input cyan--text"
                dark
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Studies name"
                v-model="item.studiesName"
                class="input cyan--text"
                dark
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Period (e.g. 2016-2018)"
                v-model="item.period"
                class="input cyan--text"
                dark
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="ma-auto"
              ><v-btn
                color="red"
                icon
                v-on:click="info_json.education.splice(i, 1)"
                v-if="i >= 1"
                ><v-icon>mdi-close</v-icon></v-btn
              ></v-col
            >
          </v-row>
          <!-- ****************************** EXPERIENCE ****************************** -->
          <h4 class="my-5">Experience</h4>
          <v-btn
            block
            @click="info_json.haveExperience = !info_json.haveExperience"
            :class="info_json.haveExperience ? 'd-none' : 'success'"
            >I have experience</v-btn
          >
          <div v-if="info_json.haveExperience && info_json.experience.length > 0">
            <v-row v-for="(item, i) in info_json.experience" :key="'A' + i" no-gutters>
              <v-col cols="4">
                <v-text-field
                  label="Company name"
                  v-model="item.companyName"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Position name"
                  v-model="item.positionName"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Period (e.g. 2016-2018)"
                  v-model="item.period"
                  class="input cyan--text"
                  dark
                ></v-text-field>
              </v-col>

              <v-col cols="11">
                <v-textarea
                  v-model="item.textarea"
                  placeholder="(Max 200 characters)"
                  label="Write information about that job"
                  dark
                  filled
                  counter
                  :rules="textarea_job_rules"
                ></v-textarea>
              </v-col>
              <v-col cols="1">
                <v-btn
                  color="red"
                  icon
                  class="ml-auto"
                  @click="info_json.experience.splice(i, 1)"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </v-col>
            </v-row>
          </div>
          <!-- ****************************** COMPLEMENTARY EDUCATION ****************************** -->
          <h4 class="my-5">Complementary education</h4>
          <small>Online courses, seminars, etc.</small>
          <v-row>
            <v-col cols="10" class="ma-auto">
              <v-text-field
                label="Write here"
                single-line
                dark
                v-model="info_json.comp_education_text"
              ></v-text-field>
            </v-col>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-col cols="1" class="ma-auto">
                  <v-btn color="success" icon @click="addComp" v-bind="attrs" v-on="on"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </v-col>
              </template>
              <span>Add info</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-col cols="1" class="ma-auto"
                  ><v-btn color="red" icon @click="deleteComp()" v-bind="attrs" v-on="on"
                    ><v-icon>mdi-close</v-icon></v-btn
                  ></v-col
                >
              </template>
              <span>Delete all information</span>
            </v-tooltip>
          </v-row>
          <h5 class="text-left cyan--text">Info check out:</h5>
          <v-container
            class="text-left secondary rounded"
            v-if="info_json.comp_education.length > 0"
          >
            <ul style="list-style: none" class="ma-auto">
              <li class="ma-auto" v-for="(item, i) in info_json.comp_education" :key="i">
                {{ item }}
                <v-btn
                  color="red"
                  icon
                  class="ml-auto"
                  @click="info_json.comp_education.splice(i, 1)"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </li>
            </ul>
          </v-container>
          <!-- ****************************** TECHNICAL SKILLS ****************************** -->
          <h4 class="my-5">Technical Skills</h4>
          <small>Software, programming languages, etc.</small>
          <v-row>
            <v-col cols="10" class="ma-auto">
              <v-text-field
                label="Write here"
                single-line
                dark
                v-model="info_json.technicalskills_text"
              ></v-text-field>
            </v-col>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-col cols="1" class="ma-auto">
                  <v-btn
                    color="success"
                    icon
                    @click="addTechnical"
                    v-bind="attrs"
                    v-on="on"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                </v-col>
              </template>
              <span>Add technical skill</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-col cols="1" class="ma-auto"
                  ><v-btn
                    color="red"
                    icon
                    @click="deleteTechnical()"
                    v-bind="attrs"
                    v-on="on"
                    ><v-icon>mdi-close</v-icon></v-btn
                  ></v-col
                >
              </template>
              <span>Delete all information</span>
            </v-tooltip>
          </v-row>
          <h5 class="text-left cyan--text">Info check out:</h5>
          <v-container
            class="text-left secondary rounded"
            v-if="info_json.technicalskills.length > 0"
          >
            <ul style="list-style: none" class="ma-auto">
              <li class="ma-auto" v-for="(item, i) in info_json.technicalskills" :key="i">
                {{ item }}
                <v-btn
                  color="red"
                  icon
                  class="ml-auto"
                  @click="info_json.technicalskills.splice(i, 1)"
                  ><v-icon>mdi-close</v-icon></v-btn
                >
              </li>
            </ul>
          </v-container>
        </v-col>
      </v-row>
    </v-sheet>

    <div class="row">
      <div class="col"></div>
      <div class="col" id="document-col">
        <vue-html2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="false"
          :preview-modal="true"
          :paginate-elements-by-height="1125"
          filename="My CV"
          :pdf-quality="2"
          :manual-pagination="true"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          ref="html2Pdf"
        >
          <section slot="pdf-content">
            <CVAlea :info_json="info_json" />
          </section>
        </vue-html2pdf>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CVAlea from "../components/CVAlea";
import VueHtml2pdf from "vue-html2pdf";

import _ from "lodash";

export default {
  name: "CVForm",
  components: {
    CVAlea,
    VueHtml2pdf,
  },
  data() {
    return {
      dialog: false,
      sectionName: "CV generator",
      emailRules: [(v) => /.+@.+/.test(v) || "Email must be valid"],
      textarea_job_rules: [(v) => v.length <= 200 || "Max 200 characters"],
      info_json: {
        contact_info: [
          { icon: "mdi-cellphone", info: "" },
          { icon: "mdi-phone", info: "" },
          { icon: "mdi-at", info: "" },
          { icon: "mdi-web", info: "" },
        ],
        name: "",
        lastName: "",
        birthdate: "",
        position: "",
        mob_number: "",
        tel_number: "",
        email: "",
        website: "",
        imageUrl: "",
        image: null,
        education: [
          { centerName: "", studiesName: "", period: "" },
          { centerName: "", studiesName: "", period: "" },
          { centerName: "", studiesName: "", period: "" },
          { centerName: "", studiesName: "", period: "" },
        ],
        haveExperience: false,
        experience: [
          {
            companyName: "",
            positionName: "",
            period: "",
            textarea: "",
          },
          {
            companyName: "",
            positionName: "",
            period: "",
            textarea: "",
          },
          {
            companyName: "",
            positionName: "",
            period: "",
            textarea: "",
          },
          {
            companyName: "",
            positionName: "",
            period: "",
            textarea: "",
          },
        ],
        select1: [],
        languages: [],
        lang_selected: [],
        message_error: "",
        softskills: [
          "Imagination",
          "Forward Thinking",
          "Problem Solving",
          "Strategy",
          "Open-mindedness",
          "Analytical Skills",
          "Resilience",
          "Project Management",
          "Stress Management",
          "Problem Sensitivity",
          "Brainstorming",
          "Troubleshooting",
          "Restructuring",
          "Process Improvement",
          "Fast Learner",
          "Adaptability",
          "Resilience",
          "Prioritizing",
          "Quick Thinking",
          "Attention to Detail",
          "Team Building",
          "Collaboration",
          "Decision Making",
          "Mentoring",
          "Encouraging",
          "Integrity",
          "Reaching Consensus",
          "Awareness for Diversity in Religion and Ethnicity",
          "Focus",
          "Engaging",
          "Public Speaking",
          "Articulation",
          "Humor",
          "Sales",
          "Logical Thinking",
          "Emotional Intelligence",
          "Organization",
          "Innovation",
          "Investigation",
        ],
        softskills_selected: [],
        otherskills_selected: [],
        comp_education: [],
        comp_education_text: "",
        technicalskills: [],
        technicalskills_text: "",
      },
    };
  },
  methods: {
    savePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    async getLanguageList() {
      let data = await axios.get("https://restcountries.eu/rest/v2/all");
      let countries_array = [];
      let languages_array = [];

      for (let i = 0; i < data.data.length; i++) {
        countries_array = data.data[i].languages;

        for (let z = 0; z < countries_array.length; z++) {
          languages_array.push(countries_array[z]);
        }
      }

      const removeDuplicated = _.uniqBy(languages_array, "name");

      this.info_json.languages = _.sortBy(removeDuplicated, (item) =>
        item.name.toLowerCase()
      );
    },
    addComp() {
      this.info_json.comp_education.push(this.info_json.comp_education_text);
    },
    deleteComp(item) {
      this.info_json.comp_education.splice(item);
    },
    onFileSelected(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.info_json.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.info_json.image = files[0];
    },
    onUpload() {
      this.$refs.fileInput.click();
    },
    addTechnical() {
      this.info_json.technicalskills.push(this.info_json.technicalskills_text);
    },
    deleteTechnical(item) {
      this.info_json.technicalskills.splice(item);
    },
  },
  mounted() {
    this.getLanguageList();
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

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

#document-container {
  position: relative;
  margin: 0 auto;
  padding-bottom: 20px;
  transform: scale(1);
}

#document-col {
  margin-top: 20px;
}
</style>
