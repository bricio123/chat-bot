import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
 
})

export { firebase }

export const auth = firebase.auth
export const db = firebase.firestore()