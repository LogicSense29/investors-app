// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOodG1-SVb059plZ5QzU0pWkZJpDwcymU",
  authDomain: "umera-investors.firebaseapp.com",
  projectId: "umera-investors",
  storageBucket: "umera-investors.appspot.com",
  messagingSenderId: "621869800453",
  appId: "1:621869800453:web:a454c966226b91ae95906c",
  measurementId: "G-B6T0LJ73KT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

//getting Collection ref
const colRef = collection(db, "investors");

//get the documents in the collection
let users = [];
// getDoc(colRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id });
//     });
//   })
//   .catch((err) => console.error(err));

export { users, db, colRef };
