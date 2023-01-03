import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDKuvRlwlMZsf0RMNk6lTj-GgglJNJ9_Zg',
  authDomain: 'linkedin-clone-4ed47.firebaseapp.com',
  projectId: 'linkedin-clone-4ed47',
  storageBucket: 'linkedin-clone-4ed47.appspot.com',
  messagingSenderId: '911121852004',
  appId: '1:911121852004:web:d81324f7821ecf592aa171',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
