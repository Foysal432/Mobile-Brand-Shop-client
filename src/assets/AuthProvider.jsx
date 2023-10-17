import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    // create user with email and password
    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // singin with email and password
    const singinemail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sing in with google
    const googleAuth = new GoogleAuthProvider()
    // google
    const googleSingin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }
    // sing out
    const logout = () => {
        return signOut(auth)
    }
    // onAuth StateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
        
        },[])
    const AuthInfo = {
        googleSingin,
        logout,
        singinemail,
        createuser,
        user,
        loading,
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;