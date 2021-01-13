<template>
  <v-container id="main-container">
    <comeback-btn />
    <v-btn color="red darken-2" dark tile large @click="savePDF" id="download-pdf-btn"
      >Download PDF
      <v-icon right dark> mdi-download </v-icon>
    </v-btn>

    <v-row>
      <v-col lg="6" sm="12">
        <!-- *************************************************************** LEFT SHEET *************************************************************** -->
        <v-sheet height="100%" width="100%" class="pa-8" elevation="10" id="left-sheet">
          <!-- ************** PERSONAL INFO ************** -->
          <h4 class="my-5">Personal information</h4>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                  type="text"
                  v-model="fullname"
                  label="Full name"
                  filled
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field type="text" v-model="age" label="Age" filled></v-text-field>
              </v-col>
            </v-row>
            <!-- ************** SELECT PLACE ************** -->
            <v-select
              v-model="place_selected"
              :items="places"
              label="Choose your living place"
              filled
            ></v-select>
            <!-- ************** IMAGE FILE INPUT ************** -->
            <h4 class="my-5">
              Personal image <br /><span class="small"
                >(any image format is allowed)</span
              >
            </h4>
            <v-btn id="upload-image-btn" dark block @click="onUpload">UPLOAD IMAGE</v-btn>
            <input
              @change="onFileSelected"
              type="file"
              style="display: none"
              ref="fileInput"
              accept="image/*"
            />
            <!-- ************** JOB INPUT ************** -->
            <h4 class="my-5">Job information</h4>
            <v-text-field
              label="Write your job position"
              v-model="job"
              filled
            ></v-text-field>
          </v-form>
          <h4 class="my-5">Technologies and skills</h4>
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
            filled
          ></v-combobox>

          <!-- ************** EXPERIENCE SELECTOR ************** -->
          <h4 class="my-5">My experience</h4>
          <v-select
            :items="experience"
            v-model="exp_selected"
            :item-value="'type'"
            item-text="time"
            filled
            label="Select your experience"
          ></v-select>
          <div v-if="exp_selected != 'Beginner'">
            <p class="my-5 small">
              Do you have experience? You can indicate the name of the company and the
              years you worked.
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
          </div>

          <v-divider></v-divider>

          <!-- ************** SOCIAL MEDIA INPUT ************** -->
          <v-form>
            <h4 class="my-5">Social media (optional):</h4>
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
                <v-icon>mdi-stack-overflow</v-icon>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  type="text"
                  v-model="stackoverflow"
                  label="Paste here your Stack Overflow URL"
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

      <v-col lg="6" sm="12">
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
          pdf-content-width="700px"
          ref="html2Pdf"
        >
          <div
            :style="{ 'background-color': colorBackground }"
            id="right-sheet"
            slot="pdf-content"
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
              <div id="superior-job-wrapper" v-if="job">
                <h1 id="superior-job" class="text-uppercase">
                  {{ job }}
                </h1>
              </div>
              <v-row no-gutters>
                <v-col cols="8">
                  <div id="custom-color-text-header" v-bind:style="{ color: textcolor }">
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
                <v-col cols="4">
                  <!-- ************** IMAGE SELECTED ************** -->

                  <div class="row d-inline">
                    <v-img
                      v-if="image"
                      :src="imageUrl"
                      :aspect-ratio="1"
                      width="100%"
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
                  <ul v-if="exp_selected != 'Beginner'">
                    <li v-if="experience1">
                      <span v-bind:style="{ color: textcolor }"
                        >{{ experience1 }} - {{ year1 }}</span
                      >
                    </li>
                    <li v-if="experience2">
                      <span v-bind:style="{ color: textcolor }"
                        >{{ experience2 }} - {{ year2 }}</span
                      >
                    </li>
                    <li v-if="experience3">
                      <span v-bind:style="{ color: textcolor }"
                        >{{ experience3 }} - {{ year3 }}</span
                      >
                    </li>
                    <li v-if="experience4">
                      <span v-bind:style="{ color: textcolor }"
                        >{{ experience4 }} - {{ year4 }}</span
                      >
                    </li>
                  </ul>
                </div>

                <!-- ***********************SEPARATOR************************ -->
                <div class="separator my-5" v-if="tech_selected.length > 0"></div>
                <div v-if="tech_selected.length > 0" class="text-center font-weight-bold">
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
                <v-row>
                  <v-col v-for="(tech, i) in tech_selected" :key="i">
                    <div id="tech-selected-wrapper">
                      <v-icon color="primary" id="tech-icon">{{ tech.icon }}</v-icon>
                      <p class="text-center mx-auto tech-text">{{ tech.language }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-sheet>
              <!-- ***********************SEPARATOR************************ -->
              <div
                class="separator my-5"
                v-if="linkedin || stackoverflow || github || facebook"
              ></div>

              <!-- ***************** LINKEDIN LINK ***************** -->
              <v-container class="text-center">
                <v-row no-gutters class="my-2">
                  <div
                    class="social-icon"
                    v-bind:href="linkedin"
                    v-if="linkedin.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }">mdi-linkedin</v-icon>

                    <p
                      class="social-icon-text d-inline ml-5"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ linkedin }}
                    </p>
                  </div>
                </v-row>

                <!-- ***************** STACKOVERFLOW LINK ***************** -->
                <v-row no-gutters class="my-2">
                  <div
                    class="social-icon"
                    v-bind:href="stackoverflow"
                    v-if="stackoverflow.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }"
                      >mdi-stack-overflow</v-icon
                    >

                    <p
                      class="social-icon-text d-inline ml-5"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ stackoverflow }}
                    </p>
                  </div>
                </v-row>
                <!-- ***************** GITHUB LINK ***************** -->
                <v-row no-gutters class="my-2">
                  <div class="social-icon" v-bind:href="github" v-if="github.length > 0">
                    <v-icon v-bind:style="{ color: textcolor }">mdi-github</v-icon>

                    <p
                      class="social-icon-text d-inline ml-5"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ github }}
                    </p>
                  </div>
                </v-row>
                <!-- ***************** FACEBOOK LINK ***************** -->
                <v-row no-gutters class="my-2">
                  <div
                    class="social-icon"
                    v-bind:href="facebook"
                    v-if="facebook.length > 0"
                  >
                    <v-icon v-bind:style="{ color: textcolor }">mdi-facebook</v-icon>

                    <p
                      class="social-icon-text d-inline ml-5"
                      v-bind:style="{ color: textcolor }"
                    >
                      {{ facebook }}
                    </p>
                  </div>
                </v-row>
              </v-container>
            </div>
          </div>
        </vue-html2pdf>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import ComebackBtn from "./Comeback-btn.vue";

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
    ComebackBtn,
  },
  data() {
    return {
      imageUrl: "",
      image: null,
      fullname: "",
      age: "",
      job: "",
      currentYear: new Date().getFullYear(),
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
      stackoverflow: "",
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

<style lang="scss" scoped>
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
  #right-sheet {
    display: none;
  }

  h4 {
    font-size: 18px;
  }

  ul {
    list-style: none;
  }

  #come-back-btn {
    text-decoration: none;
    position: relative;
    left: 0px;
    z-index: 99999;
  }

  #download-pdf-btn {
    position: relative;
    right: 0px;
    z-index: 99999;
  }

  #upload-image-btn {
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
  }

  #main-container {
    position: relative;
    top: 50px;
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  #select_experience {
    border: 1px solid #757575;
    border-radius: 5px;
    width: 100%;
  }

  #user-img {
    border-radius: 5px;
    margin: 10px;
    max-width: 140px;
  }

  #superior-name {
    font-family: $style1;
    letter-spacing: 5px;
    font-size: 2.5em;
    margin-top: 30px;
    text-align: left;
  }

  #superior-job-wrapper {
    top: 150px;
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
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: top;
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
    padding: 20px;
  }

  .separator {
    height: 2px;
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
    width: 100%;
  }
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #right-sheet {
    display: block;
    position: relative;
    height: 1110px;
    width: 550px;
  }

  h4 {
    font-size: 18px;
  }

  ul {
    list-style: none;
  }

  #come-back-btn {
    text-decoration: none;
    position: absolute;
    left: 0px;
    z-index: 99999;
  }

  #download-pdf-btn {
    position: absolute;
    right: 0px;
    z-index: 99999;
  }

  #upload-image-btn {
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
  }

  #main-container {
    position: relative;
    top: 50px;
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  #select_experience {
    border: 1px solid #757575;
    border-radius: 5px;
    width: 100%;
  }

  #user-img {
    border-radius: 5px;
    margin: 10px;
    max-width: 140px;
  }

  #superior-name {
    font-family: $style1;
    letter-spacing: 5px;
    font-size: 2.5em;
    margin-top: 30px;
    text-align: left;
  }

  #superior-job-wrapper {
    top: 150px;
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
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: top;
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
    padding: 20px;
  }

  .separator {
    height: 2px;
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
    width: 100%;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #left-sheet {
    font-size: 20px;
  }

  #right-sheet {
    display: block;
    position: relative;
    height: 1110px;
    width: 700px;
  }

  h4 {
    font-size: 18px;
  }

  ul {
    list-style: none;
  }

  #come-back-btn {
    text-decoration: none;
    position: absolute;
    left: 0px;
    z-index: 99999;
  }

  #download-pdf-btn {
    position: absolute;
    right: 0px;
    z-index: 99999;
  }

  #upload-image-btn {
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
  }

  #main-container {
    position: relative;
    margin: 50px;
    height: 100%;
    width: 100%;
  }

  #select_experience {
    border: 1px solid #757575;
    border-radius: 5px;
    width: 100%;
  }

  #user-img {
    border-radius: 5px;
    margin: 20px;
    max-width: 170px;
  }

  #superior-name {
    font-family: $style1;
    letter-spacing: 5px;
    font-size: 2.5em;
    margin-top: 30px;
    text-align: left;
  }

  #superior-job-wrapper {
    top: 150px;
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
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: top;
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
    padding: 20px;
  }

  .separator {
    height: 2px;
    background-image: url("../assets/img/gradient1.jpg");
    background-size: cover;
    background-position: right bottom;
    width: 100%;
  }
}
</style>
