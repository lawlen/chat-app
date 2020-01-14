 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMjIAAwvtBU3ZRDXxWxV356WcyzqxYBoo",
    authDomain: "chat-app-da2d4.firebaseapp.com",
    databaseURL: "https://chat-app-da2d4.firebaseio.com",
    projectId: "chat-app-da2d4",
    storageBucket: "chat-app-da2d4.appspot.com",
    messagingSenderId: "819783594054",
    appId: "1:819783594054:web:be5e5655ebe2a8029a5a47",
    measurementId: "G-N9Y0RCN5EZ"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();