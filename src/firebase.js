import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDL1pUwcoT7mVqSBv2qwBiEU-seqIg8Kr0",
  authDomain: "whatsapp-mern-01032022.firebaseapp.com",
  projectId: "whatsapp-mern-01032022",
  storageBucket: "whatsapp-mern-01032022.appspot.com",
  messagingSenderId: "792391490069",
  appId: "1:792391490069:web:e1b9ce708e6a6db8754c1c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
