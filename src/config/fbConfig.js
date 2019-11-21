import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAWx_cDoLcf1_rKkaASvwcMiJiFht_vH2k",
  authDomain: "devplan-817ef.firebaseapp.com",
  databaseURL: "https://devplan-817ef.firebaseio.com",
  projectId: "devplan-817ef",
  storageBucket: "devplan-817ef.appspot.com",
  messagingSenderId: "752300112593",
  appId: "1:752300112593:web:ee7e95a62a7b0712cd63f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase