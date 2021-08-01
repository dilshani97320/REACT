import firebase from "firebase";



  var firebaseConfig = {
    apiKey: "AIzaSyCNThn_i09ydJ0_ywcbK4o-1N3v6I0F8SM",
    authDomain: "todo-app-3af49.firebaseapp.com",
    databaseURL: "https://todo-app-3af49-default-rtdb.firebaseio.com",
    projectId: "todo-app-3af49",
    storageBucket: "todo-app-3af49.appspot.com",
    messagingSenderId: "931904332414",
    appId: "1:931904332414:web:cbcc5b5b5cea4bb1bdae2f",
    measurementId: "G-PYS274QBX6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;