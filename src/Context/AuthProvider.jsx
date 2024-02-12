import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// authentication
import app from "../firebase/firebase.config";

//creating context
export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//AuthProvider. This component will serve as the provider for the AuthContext.
const AuthProvider = ({ children }) => {
  //state updation
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new accounts
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign up with gmail
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //login with Gmail and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = ({ name, photoURL }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //check the current signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // User is signed out
        // ...
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //Create an object authInfo containing the values you want to share through the context.
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
    loading,
  };

  //The value prop is set to authInfo, making the user value accessible to any component within this context.
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
