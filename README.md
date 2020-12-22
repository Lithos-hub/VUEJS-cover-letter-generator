# Cover Letter Generator

This application consists of generating personalized cover letters within the scope of Information Technology. 

The user, through a simple form, can enter a series of data such as your name, types of technologies you handle or links to your social networks.

A preview of the document is automatically generated in real time.

The user can also manipulate the background color of the document or add some of the images provided. You can also change the color of the main text by simply typing a color in an input.
Finally, the document can be downloaded in PDF, and you can also preview the PDF with a modal window. So far, I have not been able to make the PDF respect all the CSS styles implemented. For example, the dynamic classes are not respected, as well as the different elements of Vuetify. Hiperlinks on icons are, at the moment, disable. I hope to fix this in future revisions.

These are some special resources that have been employed:
              
* The VueHtml2pdf library to generate the PDF
* The communication between the sidebar component and the document sheet
* Cool loop animations for this About page and the Home page
* Some interesting v-if conditions. For example, if the user chooses the option "No experience", it is logical that the list of companies where he has been working does not appear. Something similar happens when you choose experience: if you choose "less than 2 years" option, that information will appear in the document as "Junior".
                
Funtionalities of this app will be improving with future versions (like the PDF generation), adding new features too.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
