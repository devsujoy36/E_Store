import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [projectList, setProjects] = useState([])


    useEffect(() => {
        fetch("/Projects.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    const data = {
        projectList,
    }



    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider