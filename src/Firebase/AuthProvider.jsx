import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext()

const AuthProvider = () => {
    const [projectList,setProjects] = useState() 
    useEffect(() => {
      fetch("Project.json")
      .then(res=>res.json())
      .then(data=>setProjects(data))
    }, [])

    console.log(projectList);
    

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider