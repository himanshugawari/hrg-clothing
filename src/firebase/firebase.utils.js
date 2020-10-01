import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOPohNTpdrzZ2nVdJ0zP-wyNuqZfEDA_g",
  authDomain: "hrg-clothing-db.firebaseapp.com",
  databaseURL: "https://hrg-clothing-db.firebaseio.com",
  projectId: "hrg-clothing-db",
  storageBucket: "hrg-clothing-db.appspot.com",
  messagingSenderId: "782180808717",
  appId: "1:782180808717:web:6afc41e26ad32f3a12fd44",
  measurementId: "G-P6QBYV5GEQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
  // console.log(firestore.doc("users/128fdashadu"));
  // console.log(firestore.doc("users/1cmvb9BGbY51osxNdOc1"));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
