import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDj3Tv7u8a1XK-K_9DGdnNurHI5Fgk8W4",
  authDomain: "clone-4ca40.firebaseapp.com",
  projectId: "clone-4ca40",
  storageBucket: "clone-4ca40.appspot.com",
  messagingSenderId: "769059217237",
  appId: "1:769059217237:web:cbd50202496e1f1869d9dc",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
