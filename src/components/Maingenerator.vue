<template>
  <v-container fluid id="main-container">
    <nav id="top-bar">
      <router-link to="/" id="come-back-btn">
        <v-btn color="orange" dark tile large
          >Come back <v-icon right dark> mdi-backburger </v-icon></v-btn
        >
      </router-link>
      <v-btn color="red" dark tile large @click="savePDF"
        >Download PDF
        <small>(Beta)</small>
        <v-icon right dark> mdi-download </v-icon>
      </v-btn>
    </nav>
    <v-row>
      <v-col cols="6">
        <!-- *************************************************************** LEFT SHEET *************************************************************** -->
        <v-sheet height="100%" width="100%" class="pa-8" elevation="10" id="left-sheet">
          <!-- ************** TEXT INPUTS ************** -->
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                  type="text"
                  v-model="fullname"
                  label="Full name"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field type="text" v-model="age" label="Age"></v-text-field>
              </v-col>
            </v-row>
            <!-- ************** JOB SELECTOR ************** -->
            <v-select
              :items="selectJobs"
              label="Select your job"
              v-model="job"
              outlined
            ></v-select>
          </v-form>
          <!-- ************** EXPERIENCE SELECTOR ************** -->
          <form>
            <div class="form-group">
              <label>Choose your experience</label>
              <select class="form-control" id="select_experience" v-model="exp_selected">
                <option v-for="(item, i) in experience" :key="i" v-bind:value="item.type">
                  <v-list-item>
                    {{ item.time }}
                  </v-list-item>
                </option>
              </select>
            </div>
          </form>
          <!-- ************** SELECT PLACE ************** -->
          <v-select
            v-model="place_selected"
            :items="places"
            label="Choose your living place"
            outline
          ></v-select>
          <!-- ************** SELECT TECHNOLOGIES ************** -->
          <small class="red--text" v-if="tech_selected.length > 8">
            Oops. You can only choose up to 8 technologies!
          </small>
          <v-combobox
            v-model="tech_selected"
            :items="technologies"
            item-text="language"
            label="Choose your main technologies (Max 10)"
            multiple
            outlined
          ></v-combobox>
          <!-- ************** IMAGE FILE INPUT ************** -->

          <v-btn color="blue" dark @click="onUpload">Upload image</v-btn>
          <input
            @change="onFileSelected"
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
          />

          <p class="mt-5">
            Do you have experience? You can indicate the name of the company and the years
            you worked
          </p>
          <v-row>
            <v-col>
              <v-text-field
                type="text"
                v-model="experience1"
                label="Experience 1"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                type="text"
                v-model="year1"
                label="Years (e.g.: 2015-2018)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                type="text"
                v-model="experience2"
                label="Experience 2"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                type="text"
                v-model="year2"
                label="Years (e.g.: 2015-2018)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                type="text"
                v-model="experience3"
                label="Experience 3"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                type="text"
                v-model="year3"
                label="Years (e.g.: 2015-2018)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                type="text"
                v-model="experience4"
                label="Experience 4"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                type="text"
                v-model="year4"
                label="Years (e.g.: 2015-2018)"
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- ************** SOCIAL MEDIA INPUT ************** -->
          <v-divider></v-divider>

          <v-form>
            <label>You can add your social media (optional):</label>
            <v-row>
              <v-col cols="2" class="ma-auto">
                <v-icon>mdi-linkedin</v-icon>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  type="text"
                  v-model="linkedin"
                  label="Paste here your linkedIn URL"
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="ma-auto">
                <v-icon>mdi-instagram</v-icon>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  type="text"
                  v-model="instagram"
                  label="Paste here your Instagram URL"
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="ma-auto">
                <v-icon>mdi-github</v-icon>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  type="text"
                  v-model="github"
                  label="Paste here your GitHub URL"
                ></v-text-field>
              </v-col>
              <v-col cols="2" class="ma-auto">
                <v-icon>mdi-facebook</v-icon>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  type="text"
                  v-model="facebook"
                  label="Paste here your Facebook URL"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-sheet>
      </v-col>

      <!-- *************************************************************** RIGHT SHEET *************************************************************** -->

      <v-col cols="6" class="mb-15">
        <!-- <label class="secondary white--text pa-2 rounded">Preview</label> -->
        <vue-html2pdf
          :show-layout="true"
          :float-layout="false"
          :enable-download="true"
          :preview-modal="true"
          :paginate-elements-by-height="1100"
          filename="My card"
          :pdf-quality="2"
          :manual-pagination="true"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="680"
          ref="html2Pdf"
        >
          <div slot="pdf-content">
            <v-sheet
              height="1110"
              width="100%"
              class="black--text"
              elevation="10"
              :color="colorBackground"
              id="document"
            >
              <!-- ************** BACKGROUND IMG SELECTED ************** -->
              <v-img
                :src="backgroundimg"
                height="100%"
                width="100%"
                id="background_image"
                v-if="backimgbtn"
              ></v-img>

              <div id="right-sheet-content">
                <v-row no-gutters>
                  <div id="superior-job-wrapper" v-if="job">
                    <h1 id="superior-job" class="text-uppercase">
                      {{ job }}
                    </h1>
                  </div>
                  <v-col cols="9">
                    <div
                      id="custom-color-text-header"
                      v-bind:style="{ color: textcolor }"
                    >
                      <h1 id="superior-name">{{ fullname }}</h1>
                      <!-- ************** SHOWING - MAIN DATA ************** -->
                      <div v-if="fullname.length > 1">
                        <h3 id="text-fullname">
                          Hi! I'm
                          <span class="font-weight-bold"> {{ fullname }}. </span>
                        </h3>
                      </div>
                      <!-- ***********************SEPARATOR************************ -->

                      <h4 id="text-borndate" v-if="age.length > 1">
                        I was born in {{ parseInt(currentYear - age) }} and I'm currently
                        living in {{ place_selected }}.
                      </h4>
                    </div>
                  </v-col>
                  <v-col cols="3">
                    <!-- ************** IMAGE SELECTED ************** -->

                    <div class="row d-inline">
                      <v-img
                        v-if="image"
                        :src="imageUrl"
                        width="170"
                        :aspect-ratio="1"
                        id="user-img"
                      ></v-img>
                    </div>
                  </v-col>
                </v-row>
                <!-- ***********************SEPARATOR************************ -->
                <div id="custom-color-text-body" v-bind:style="{ color: textcolor }">
                  <div
                    v-if="exp_selected.length > 0"
                    class="text-left mt-5 font-weight-bold"
                  >
                    <p>
                      I'm a
                      <span>{{ exp_selected }}</span>
                      {{ job }}
                      <span v-if="exp_selected != 'Beginner'"
                        >and I have worked in these companies:</span
                      >
                    </p>
                    <v-list
                      v-if="exp_selected != 'Beginner'"
                      style="background: transparent"
                    >
                      <v-list-item v-if="experience1"
                        ><span v-bind:style="{ color: textcolor }"
                          >{{ experience1 }} - {{ year1 }}</span
                        ></v-list-item
                      >
                      <v-list-item v-if="experience2"
                        ><span v-bind:style="{ color: textcolor }"
                          >{{ experience2 }} - {{ year2 }}</span
                        ></v-list-item
                      >
                      <v-list-item v-if="experience3"
                        ><span v-bind:style="{ color: textcolor }"
                          >{{ experience3 }} - {{ year3 }}</span
                        ></v-list-item
                      >
                      <v-list-item v-if="experience4"
                        ><span v-bind:style="{ color: textcolor }"
                          >{{ experience4 }} - {{ year4 }}</span
                        ></v-list-item
                      >
                    </v-list>
                  </div>

                  <!-- ***********************SEPARATOR************************ -->
                  <div class="separator" v-if="tech_selected.length > 0"></div>
                  <div
                    v-if="tech_selected.length > 0"
                    class="text-center font-weight-bold"
                  >
                    <p>These are the main technologies I use:</p>
                  </div>
                </div>
                <v-sheet
                  width="100%"
                  max-height="350"
                  elevation="10"
                  rounded
                  class="pa-2"
                  v-if="tech_selected.length > 0 && tech_selected.length <= 8"
                >
                  <v-row no-gutters>
                    <v-col v-for="(tech, i) in tech_selected" :key="i">
                      <div id="tech-selected-wrapper">
                        <v-icon color="primary" id="tech-icon">{{ tech.icon }}</v-icon>
                        <p class="text-center mx-auto tech-text">{{ tech.language }}</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-sheet>
                <!-- ***********************SEPARATOR************************ -->
                <div class="row d-block mt-10">
                  <div
                    class="social-icon"
                    v-bind:href="linkedin"
                    v-if="linkedin.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }">mdi-linkedin</v-icon>
                    <p
                      class="social-icon-text my-auto"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ linkedin }}
                    </p>
                  </div>
                  <div
                    class="social-icon"
                    v-bind:href="instagram"
                    v-if="instagram.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }">mdi-instagram</v-icon>
                    <p
                      class="social-icon-text my-auto"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ instagram }}
                    </p>
                  </div>
                  <div class="social-icon" v-bind:href="github" v-if="github.length > 0">
                    <v-icon v-bind:style="{ color: textcolor }">mdi-github</v-icon>
                    <p
                      class="social-icon-text my-auto"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ github }}
                    </p>
                  </div>
                  <div
                    class="social-icon"
                    v-bind:href="facebook"
                    v-if="facebook.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }">mdi-facebook</v-icon>
                    <p
                      class="social-icon-text my-auto"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ facebook }}
                    </p>
                  </div>
                </div>
              </div>
            </v-sheet>
          </div>
        </vue-html2pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "Maingenerator",
  props: ["colorBackground", "backgroundimg", "backimgbtn", "textcolor"],
  computed: {
    swatchStyle() {
      const { color, menu } = this;
      return {
        backgroundColor: color,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
  },
  components: {
    VueHtml2pdf,
  },
  data() {
    return {
      imageUrl: "",
      image: null,
      fullname: "",
      age: "",
      job: "",
      currentYear: new Date().getFullYear(),
      selectJobs: [
        "Front-end Developer",
        "Back-end Developer",
        "Full-stack Developer",
        "QA Engineer",
        "DevOps Engineer",
        "Researcher",
        "Engineering Manager",
        "Technical Lead",
        "Scrum Master",
        "Product Owner",
        "Proyect Manager",
        "Technical Sales",
        "HR Manager",
        "IT Recruiter",
        "Office Manager",
        "Director",
        "Finance Specialist",
        "Marketing Specialist",
      ],
      exp_selected: [],
      experience: [
        { time: "No experience", type: "Beginner" },
        { time: "Less than 2 years", type: "Junior" },
        { time: "Between 2-6 years", type: "Semi Senior" },
        { time: "More than 6 years", type: "Senior" },
      ],
      place_selected: "",
      places: [
        "Alava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Avila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "La Coruña",
        "Cuenca",
        "Gerona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Las Palmas",
        "Pontevedra",
        "La Rioja",
        "Salamanca",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Santa Cruz de Tenerife",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza",
      ],
      tech_selected: [],
      technologies: [
        { language: "C", icon: "mdi-language-c" },
        { language: "C++", icon: "mdi-language-cpp" },
        { language: "C#", icon: "mdi-language-csharp" },
        { language: "Python", icon: "mdi-language-python" },
        { language: "R", icon: "mdi-language-r" },
        { language: "Java", icon: "mdi-language-java" },
        { language: "Ruby", icon: "mdi-language-ruby" },
        { language: "Go", icon: "mdi-language-go" },
        { language: "PHP", icon: "mdi-language-php" },
        { language: "HTML", icon: "mdi-language-html5" },
        { language: "CSS", icon: "mdi-language-css3" },
        { language: "JavaScript", icon: "mdi-language-javascript" },
        { language: "TypeScript", icon: "mdi-language-typescript" },
        { language: "Swift", icon: "mdi-language-swift" },
        { language: "Kotlin", icon: "mdi-language-kotlin" },
        { language: "Angular", icon: "mdi-angular" },
        { language: "React", icon: "mdi-react" },
        { language: "Vue", icon: "mdi-vuejs" },
      ],
      file_selected: null,
      files: [],
      linkedin: "",
      github: "",
      instagram: "",
      facebook: "",
      experience1: "",
      year1: "",
      experience2: "",
      year2: "",
      experience3: "",
      year3: "",
      experience4: "",
      year4: "",
    };
  },
  methods: {
    onFileSelected(event) {
      // console.log(event[0]);
      // this.file_selected = event[0];
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    onUpload() {
      this.$refs.fileInput.click();
    },
    savePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #top-bar {
    position: relative;
    text-align: center;
  }

  #come-back-btn {
    text-decoration: none;
  }

  #left-sheet {
    font-size: 13px;
  }

  #main-container {
    position: relative;
    top: 20px;
    left: 20px;
    margin: 0 auto;
    height: 100%;
  }

  #select_experience {
    border: 1px solid #757575;
    border-radius: 5px;
    width: 100%;
  }

  #user-img {
    border-radius: 10px;
    margin-top: 40px;
    float: right;
  }

  #superior-name {
    font-family: $style1;
    letter-spacing: 5px;
    font-size: 2em;
    margin-top: 20px;

    text-align: left;
  }

  #superior-job-wrapper {
    background: #151515;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 5px;
    border-radius: 10px;
  }

  #superior-job {
    color: white;
    font-weight: bold;
    letter-spacing: 20px;
  }

  #custom-color-text-list {
    font-family: $style3;
    font-size: 1em;
  }

  #tech-selected-wrapper {
    margin: 0 auto;
    text-align: center;
    padding: 10px;
  }

  #tech-icon {
    font-size: 2em;
    color: white !important;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
  }

  .tech-text {
    color: black !important;
  }

  #background-image {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  #right-sheet-content {
    position: absolute;
    top: 0px;
    margin: 50px;
  }
  .social-icon {
    margin: 0 auto;
    position: relative;
    display: flex;

    &:hover {
      text-decoration: none;
    }
  }
  .separator {
    height: 2px;
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
    width: 100%;
    border-radius: 10px;
    margin: 20px;
  }

  .social-icon-text {
    display: flex;
    margin-left: 5px;
    font-weight: bold;
    margin-top: 2px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #top-bar {
    position: relative;
    text-align: center;
  }
  #left-sheet {
    font-size: 20px;
  }
  #come-back-btn {
    text-decoration: none;
  }

  #main-container {
    position: relative;
    top: 20px;
    left: 100px;
    margin: 0 auto;
    height: 100%;
  }

  #select_experience {
    border: 1px solid #757575;
    border-radius: 5px;
    width: 100%;
  }

  #user-img {
    border-radius: 5px;
    position: relative;
    float: right;
  }

  #superior-name {
    font-family: $style1;
    letter-spacing: 5px;
    font-size: 2.5em;
    margin-top: 30px;
    text-align: left;
  }

  #superior-job-wrapper {
    width: 100%;
  }

  #superior-job {
    color: white;
    font-size: 2em;
  }

  #custom-color-text-list {
    font-family: $style3;
    font-size: 1.2em;
  }

  #tech-selected-wrapper {
    margin: 0 auto;
    text-align: center;
    padding: 10px;
  }

  .tech-text {
    color: black !important;
  }

  #tech-icon {
    font-size: 2em;
    color: white !important;
    padding: 10px;
    border-radius: 10px;
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
  }

  #background-image {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  #right-sheet-content {
    position: absolute;
    top: 0px;
    margin: 40px;
  }

  .social-icon {
    margin-top: 15px;
    &:hover {
      text-decoration: none;
    }
  }

  .separator {
    height: 2px;
    background: linear-gradient(to right, rgb(15, 172, 211), rgb(70, 25, 196));
    width: 100%;
    border-radius: 10px;
    margin: 20px;
  }

  .social-icon-text {
    display: flex;
    margin-left: 25px;
    font-weight: bold;
    margin-top: 2px;
  }
}
</style>
