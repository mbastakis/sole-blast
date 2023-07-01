// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore' // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0GYSfa-vR7zfXE4fLuT8q3UlAhb_nqbU',
  authDomain: 'sole-blast.firebaseapp.com',
  projectId: 'sole-blast',
  storageBucket: 'sole-blast.appspot.com',
  messagingSenderId: '146207450282',
  appId: '1:146207450282:web:db8d5296c0a1035d039cd3',
  measurementId: 'G-KG8BTDSB5D'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app) // Add this line

export default db // Export the Firestore database
