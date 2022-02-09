import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../components/Pages/Login/Firebase/Firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const useFirebase = ()=>{
    const[users,setUsers] = useState([]);
    const signInUsingGoogle = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUsers(result.user);
        })


    }

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUsers(user)
            }else{
                setUsers({})
            }
        })
    },[])

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{

        })
    }

    return{
        users,signInUsingGoogle,logOut
    }


}

export default useFirebase;