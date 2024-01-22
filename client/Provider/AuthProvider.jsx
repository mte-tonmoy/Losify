import React, { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { useEffect } from "react";
import { useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    // return createUserWithEmailAndPassword(auth, email, password);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    // Send email verification
    await sendEmailVerification(userCredential.user);

    await signOut(auth);

    return userCredential;
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlePopup = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
  
      if (loggedUser) {
        if (loggedUser.emailVerified) {
          // User is logged in and email is verified, redirect to home page
          // navigate('/home'); // Replace with your routing logic
        } else {
          // User is logged in, but email is not verified
          // Handle accordingly (show a message, redirect to a verification page, etc.)
        }
      }
  
      setUser(loggedUser);
      setLoading(false);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    googlePopup,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;