
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
   
  } from "firebase/auth";
  import { React, useContext, useState, useEffect, createContext } from "react";
  import auth from "../firebase";
  
  const AuthContext = createContext();
  
  const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);  
    const signup = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
   
  
 
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);
    return (
      <AuthContext.Provider
        value={{
          currentUser,
          signup,
         
        }}
      >
        {!loading && children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  export default AuthProvider;
  