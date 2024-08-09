// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sWcwM9sKiDCPwDGyK18WZuFI8PZH1tU",
  authDomain: "the-blogy.firebaseapp.com",
  projectId: "the-blogy",
  storageBucket: "the-blogy.appspot.com",
  messagingSenderId: "330067579285",
  appId: "1:330067579285:web:ecccc77084b3cf7ecbe69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



//"site": "the-bloggy",