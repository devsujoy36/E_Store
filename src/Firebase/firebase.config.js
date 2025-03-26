// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAn7JBuUe1IewXhNghLR3jUFijFmqYpjII',
  authDomain: 'estorehub-fe867.firebaseapp.com',
  projectId: 'estorehub-fe867',
  storageBucket: 'estorehub-fe867.firebasestorage.app',
  messagingSenderId: '632385157257',
  appId: '1:632385157257:web:4c629858a1210d99c12e58'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
