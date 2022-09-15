
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBe87he39Xu2rsMJpSZ8OrVJpL43U1uAGI",
  authDomain: "login-76bee.firebaseapp.com",
  projectId: "login-76bee",
  storageBucket: "login-76bee.appspot.com",
  messagingSenderId: "112017282655",
  appId: "1:112017282655:web:d04ea09da6f69cab21adea",

};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app