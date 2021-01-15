<template>
  <div class="about">
    <v-img src="../assets/img/balloon.png" width="5%" class="balloon"></v-img>
    <v-img src="../assets/img/landscape.png" width="100%" class="landscape" id="landscape"></v-img>

    <v-row>
      <v-col id="col-about-left"></v-col>
      <v-col id="col-about">
        <v-sheet class="pa-5 ma-auto" elevation="15" rounded width="100%" height="100%" color="transparent">
          <h1 class="text-center white--text">About Card Generator App</h1>
          <v-divider></v-divider>

            <v-bottom-sheet v-model="sheet">
   
            <template v-slot:activator="{ on, attrs }" id="sheets">
              <v-btn v-bind="attrs" v-on="on" class="white--text" block depressed color="transparent">
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
                  <v-img src="../assets/img/english-icon.jpg" class="ma-auto flag"></v-img>
                  <p class="text">
                    This application is divided into two modules: a resume generator (CV Generator, available from Version 2.0.0) and a cover letter generator
                  <br> <br>
                  Cover Letter Generator consists of generating personalized cover letters within the scope of Information Technology. <br />The user, through a simple form, can enter a series of data such as your name, types of technologies you handle or links to your social networks. <br /><br />
                  A preview of the document is automatically generated in real time. <br />
                  The user can also manipulate the background color of the document or add some of the images provided. You can also change the color of the main text by simply typing a color in an input. <br />
                  Finally, the document can be downloaded in PDF, and you can also preview the PDF with a modal window. <br>
                  These are some special resources that have been employed:<br><br>
                  <ul>
                    <li>The <b>VueHtml2pdf</b> library to generate the PDF.</li>
                    <li>The communication between the sidebar component and the document sheet.</li>
                    <li>Cool loop animations for this About page and the Home page.</li>
                    <li>
                      Some interesting v-if conditions. For example, if the user chooses the option "No experience", it is logical that the list of companies where he has been working does not appear. Something similar happens when you choose experience: if you choose "less than 2 years" option, that
                      information will appear in the document as "Junior".
                    </li>
                    <li>Funtionalities of this app will be improving with future versions (like the PDF generation), adding new features too.</li>
                  </ul>
                  </p>
                </v-sheet>
          </v-col>
        <v-col lg="6" md="12" id="right-col">
                <v-sheet height="100%" width="100%" id="spanish-sheet">
                  <v-img src="../assets/img/spanish-icon.jpg" class="ma-auto flag"></v-img>
  <p class="text">
                  Esta aplicación se divide en dos módulos: un generador de Currículums (CV Generator, disponible a partir de la Version 2.0.0) y un generador de Cartas de Presentación (Cover Letter Generator)
                  <br> <br>
                  Cover Letter Generator consiste en generar cartas de presentación personalizadas dentro del ámbito de las Tecnologías de la Información. <br /><br />El usuario, mediante un sencillo formulario, puede introducir una serie de datos tales como su nombre, tipos de tecnologías que maneja o enlaces a sus redes
                  sociales. <br /><br />
                  Automáticamente y en tiempo real, se va generando una vista previa del documento. <br />
                  El usuario podrá, además, manipular el color de fondo del documento o añadirle alguna de las imágenes que se proporcionan. También puede cambiar el color del texto principal simplemente escribiendo un color en un input. <br /><br />
                  Finalmente, el documento puede ser descargado en PDF, pudiendo además previsualizar dicho PDF con una ventana modal. <br>
                  Estos son algunos recursos especiales que se han empleado:<br><br>
                  <ul>
                    <li>La librería <b>VueHtml2pdf</b> para poder generar el PDF.</li>
                    <li>La comunicación entre el componente del sidebar lateral y la hoja de documento<./li>
                    <li>Animaciones guays en loop para esta página de About y la de Home.</li>
                    <li>
                      Algunos condiciones v-if interesantes. Por ejemplo, si el usuario elige la opción de "Sin experiencia", pues es lógico que la lista de empresas donde ha trabajado no aparezca. Algo parecido ocurre cuando elige la experiencia: si elige que tiene menos de 2 años, en el documento esa información
                      aparecerá reflejada como "Junior".
                    </li>
                    <li>Las funcionalidades de esta aplicación se irán mejorando en futuras versiones (como la generación del PDF), añadiendo además nuevas características.</li>
                  </ul>
  </p>
                </v-sheet>
        </v-col>
          </v-row>
     
 
            </v-bottom-sheet>
      
        </v-sheet>
      </v-col>

      <v-col id="col-comeback-btn">
        <comeback-btn />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ComebackBtn from '../components/Comeback-btn.vue'

export default {
  components: { ComebackBtn },
  data() {
    return {
      sheet: false
    }
  }
}
</script>
<style lang="scss" scoped>





// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
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
#spanish-sheet, #english-sheet {
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

#col-comeback-btn{
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
  0% {margin-left: -5000px; opacity: 0}
  100% {margin-left: 0px; opacity: 1}
}
}

// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  

  .flag {
width: 50px;
height: 30px;
  }
.text {
  font-size: 13px !important;
}

#spanish-sheet, #english-sheet {
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

#left-col, #right-col {
  padding-bottom: 100px;
}

#col-comeback-btn{
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
  0% {margin-left: -5000px; opacity: 0}
  100% {margin-left: 0px; opacity: 1}
}
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  body {
  overflow: hidden;
}
  .flag {
width: 50px;
height: 30px;
  }
.text {
  font-size: 16px !important;
}


#left-col, #right-col {
  padding-bottom: 0px;
}

#spanish-sheet, #english-sheet {
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
  0% {margin-left: -5000px; opacity: 0}
  100% {margin-left: 0px; opacity: 1}
}
}
</style>
