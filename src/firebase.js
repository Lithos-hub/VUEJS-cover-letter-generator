import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyCUwmfXta_GI_oe07QsLnEoQL7vxNJpUHk",
  authDomain: "cover-letter-generator-5b779.firebaseapp.com",
  projectId: "cover-letter-generator-5b779",
  storageBucket: "cover-letter-generator-5b779.appspot.com",
  messagingSenderId: "452768262019",
  appId: "1:452768262019:web:4fa0141164fc869db5b8b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  ////////////////////////////////////////////////////
  
  const storage = firebaseApp.storage();
  

  //////////////////////////////////
  
  export default {storage, firebase};