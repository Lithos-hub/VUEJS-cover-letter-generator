<template>
  <div>
    <v-sheet
      width="100%"
      height="100%"
      elevation="10"
      class="pa-5 secondary darken-2 rounded"
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
                v-model="info_json.mob_number"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Telephone"
                v-model="info_json.tel_number"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Email"
                :rules="emailRules"
                v-model="info_json.email"
                class="input cyan--text"
                dark
              ></v-text-field>
              <v-text-field
                label="Website"
                v-model="info_json.website"
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
          <v-btn
            block
            @click="info_json.haveExperience = true"
            :class="info_json.haveExperience ? 'd-none' : 'success'"
            >I have experience</v-btn
          >
          <div v-if="info_json.haveExperience">
            <h4 class="my-5">Experience</h4>
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

              <v-col cols="12">
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
            </v-row>
          </div>
          <!-- ****************************** COMPLEMENTARY EDUCATION ****************************** -->
          <h4 class="my-5">Complementary education</h4>
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
                  ><v-btn
                    color="red"
                    icon
                    @click="deleteComp(item)"
                    v-bind="attrs"
                    v-on="on"
                    ><v-icon>mdi-close</v-icon></v-btn
                  ></v-col
                >
              </template>
              <span>Delete list</span>
            </v-tooltip>
          </v-row>
          <h5 class="text-left cyan--text">Info check out:</h5>
          <v-container
            class="text-left secondary rounded"
            v-if="info_json.comp_education.length > 0"
          >
            <ul style="list-style: none" class="ma-auto">
              <li class="ma-auto" v-for="(item, i) in info_json.comp_education" :key="i">
                <v-icon class="d-inline ma-auto" color="green" size="15"
                  >mdi-check-bold</v-icon
                >
                {{ item }}
              </li>
            </ul>
          </v-container>
        </v-col>
      </v-row>
      <v-btn block color="red darken-2" dark large>Generate PDF</v-btn>
    </v-sheet>

    <v-container id="document-container">
      <CVAlea :info_json="info_json" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import CVAlea from "../components/CVAlea";

import _ from "lodash";

export default {
  name: "CVForm",
  components: {
    CVAlea,
  },
  data() {
    return {
      dialog: false,
      sectionName: "CV generator",
      emailRules: [(v) => /.+@.+/.test(v) || "Email must be valid"],
      textarea_job_rules: [(v) => v.length <= 200 || "Max 200 characters"],
      info_json: {
        name: "Lorem",
        lastName: "Ipsum Dolor",
        birthdate: 1992,
        position: "My position",
        mob_number: "000 00 00 00",
        tel_number: "000 00 00 00",
        email: "mymail@example.com",
        website: "www.mywebsiteexample.com",
        imageUrl: "",
        image: null,
        education: [
          { centerName: "Center #1", studiesName: "Studies #1", period: "Period 1" },
          { centerName: "Center #2", studiesName: "Studies #2", period: "Period 2" },
          { centerName: "Center #3", studiesName: "Studies #3", period: "Period 3" },
          { centerName: "Center #4", studiesName: "Studies #4", period: "Period 4" },
        ],
        haveExperience: false,
        experience: [
          {
            companyName: "Company 1",
            positionName: "Position 1",
            period: "Period1",
            textarea:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto veniam cum cumque voluptas qui ipsa molestiae perspiciatis aut reprehenderit, ut illum soluta fugiat id ab labore magni veritatis",
          },
          {
            companyName: "Company 2",
            positionName: "Position 2",
            period: "Period2",
            textarea:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto veniam cum cumque voluptas qui ipsa molestiae perspiciatis aut reprehenderit, ut illum soluta fugiat id ab labore magni veritatis",
          },
          {
            companyName: "Company 3",
            positionName: "Position 3",
            period: "Period3",
            textarea:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto veniam cum cumque voluptas qui ipsa molestiae perspiciatis aut reprehenderit, ut illum soluta fugiat id ab labore magni veritatis",
          },
          {
            companyName: "Company 4",
            positionName: "Position 4",
            period: "Period4",
            textarea:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto veniam cum cumque voluptas qui ipsa molestiae perspiciatis aut reprehenderit, ut illum soluta fugiat id ab labore magni veritatis",
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
      },
    };
  },
  methods: {
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
      console.log(this.info_json.comp_education);
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
  padding-bottom: 200px;
  transform: scale(1);
}
</style>
