import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, query, orderBy, deleteDoc, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForDevelopment12345",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "your-app.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "your-app",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "your-app.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};

export const saveCVData = async (userId, cvData) => {
  try {
    // Legacy support: save to main doc
    await setDoc(doc(db, "users", userId), { cvData }, { merge: true });
    
    // New support: save as a specific CV record
    const cvsRef = collection(db, "users", userId, "cvs");
    if (cvData.id) {
      await setDoc(doc(db, "users", userId, "cvs", cvData.id), { ...cvData, updatedAt: new Date() });
    } else {
      const newDoc = await addDoc(cvsRef, { ...cvData, createdAt: new Date(), updatedAt: new Date() });
      cvData.id = newDoc.id;
    }
    return cvData;
  } catch (error) {
    console.error("Error saving CV", error);
    throw error;
  }
};

export const getCVData = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().cvData;
    }
    return null;
  } catch (error) {
    console.error("Error getting CV", error);
    return null;
  }
};

export const listUserCVs = async (userId) => {
  try {
    const cvsRef = collection(db, "users", userId, "cvs");
    const q = query(cvsRef, orderBy("updatedAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error listing CVs", error);
    return [];
  }
};

export const deleteUserCV = async (userId, cvId) => {
  try {
    await deleteDoc(doc(db, "users", userId, "cvs", cvId));
    return true;
  } catch (error) {
    console.error("Error deleting CV", error);
    throw error;
  }
};

export { auth, db };
