import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDMb12fWsPxOat2Oy3YvWNt6qg6hMbjAaI',
	authDomain: 'redux-login-43f72.firebaseapp.com',
	projectId: 'redux-login-43f72',
	storageBucket: 'redux-login-43f72.appspot.com',
	messagingSenderId: '54388906384',
	appId: '1:54388906384:web:274e179da5c70cf2433b15',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);

export { db, auth, googleProvider };
