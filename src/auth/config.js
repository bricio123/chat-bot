import * as firebase from 'firebase';
import 'firebase/auth';

export const authConfig = firebase.initializeApp({
    REACT_APP_FIREBASE_KEY = "AIzaSyDiGpo5HflQZzbQrb-AAdCbNtZ7UqczRU0",
    REACT_APP_FIREBASE_DOMAIN =  "chatbot-6d1bc.firebaseapp.com",
    REACT_APP_FIREBASE_PROJECT_ID = "chatbot-6d1bc",
    REACT_APP_FIREBASE_STORAGE_BUCKET =  "chatbot-6d1bc.appspot.com",
    REACT_APP_FIREBASE_SENDER_ID = "963096577873",
    REACT_APP_FIREBASE_AP_ID = "1:963096577873:web:840d4776426f0021d07570",
    REACT_APP_FIREBASE_MEASUREMENT_ID = "G-QCGMPPKJWY",

})