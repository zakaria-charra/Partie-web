
import *as firebase from 'firebase'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyBejBqIvsmqdSF9ZYbjCViRrOsS0k5CLWY",
    authDomain: "essaouiraapp.firebaseapp.com",
    databaseURL: "https://essaouiraapp.firebaseio.com",
    projectId: "essaouiraapp",
    storageBucket: "essaouiraapp.appspot.com",
    messagingSenderId: "445011691463",
    appId: "1:445011691463:web:8d02e9fd7ce609f9d97be2",
    measurementId: "G-13C7FZ53BC"
  };

  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();
  export {storage,firebase as default }