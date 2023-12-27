// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8HuvL-XZy2GpHFMylfWhA8Cz-2a2C9f8",
  authDomain: "todo-job-task-479c7.firebaseapp.com",
  projectId: "todo-job-task-479c7",
  storageBucket: "todo-job-task-479c7.appspot.com",
  messagingSenderId: "158726719592",
  appId: "1:158726719592:web:80e87998169b14987093dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;