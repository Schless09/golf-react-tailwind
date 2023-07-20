import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFp_h3glpq8IXsfhZoF53brn2Giq4GuHA",
  authDomain: "hosting-a6cff.firebaseapp.com",
  projectId: "hosting-a6cff",
  storageBucket: "hosting-a6cff.appspot.com",
  messagingSenderId: "1054242289690",
  appId: "1:1054242289690:web:aff7d9ad755006467bb9a3",
  measurementId: "G-FQZ73Y7ND4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
