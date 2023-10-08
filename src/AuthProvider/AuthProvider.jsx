import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const register = (email, password)=>{
       return createUserWithEmailAndPassword( auth, email, password);
    };

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        return signOut(auth)
    };

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    };

    const gitHubLogIn = () =>{
        return signInWithPopup(auth,githubProvider )
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = { user, register, signIn, logOut, googleLogIn, gitHubLogIn }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node
}

export default AuthProvider;