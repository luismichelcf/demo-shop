import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyChJkw_8ByIGt0zhLG9F0sYZKr7c70DSCg",
	authDomain: "shop-demo-d333f.firebaseapp.com",
	databaseURL: "https://shop-demo-d333f.firebaseio.com",
	projectId: "shop-demo-d333f",
	storageBucket: "shop-demo-d333f.appspot.com",
	messagingSenderId: "965778572297",
	appId: "1:965778572297:web:8329a9f5d1bf97698024d8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
		} catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
