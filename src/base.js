import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
  "projectId": "frb-str-pr",
  "appId": "1:144395806860:web:471bdea7fac69d5ebdf3a9",
  "databaseURL": "https://frb-str-pr-default-rtdb.firebaseio.com",
  "storageBucket": "frb-str-pr.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyAqF8Vhr-sHv3phsFNa_KzPbPK8qo3Ftsg",
  "authDomain": "frb-str-pr.firebaseapp.com",
  "messagingSenderId": "144395806860"
});
