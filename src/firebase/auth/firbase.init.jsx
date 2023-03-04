// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz5hPgsCd1hQAN6oTqtSCk9ky995w0CaI",
  authDomain: "classic-abashik-hotel.firebaseapp.com",
  projectId: "classic-abashik-hotel",
  storageBucket: "classic-abashik-hotel.appspot.com",
  messagingSenderId: "318721841110",
  appId: "1:318721841110:web:8f97b90c5afa4056003677"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;