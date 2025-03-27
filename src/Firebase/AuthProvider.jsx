import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [projectList, setProjects] = useState([])
    const [user, setUser] = useState()

    useEffect(() => {
        fetch("/Projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    const SignUpUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)

    }
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out Successfull");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])






    const data = {
        user,
        setUser,
        projectList,
        logInUser,
        SignUpUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider