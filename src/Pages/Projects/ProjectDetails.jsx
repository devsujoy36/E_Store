import { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { useParams } from "react-router-dom";


const ProjectDetails = () => {
  const { projectList } = useContext(AuthContext);
  // console.log(projectList);

  const [project, setProject] = useState(null)
  const [id, img, title, description, rating, sourceURL, liveURL, features] = projectList;

  const projectPathId = useParams()
  const projectId = projectPathId.id;
  // console.log(projectId);

  const projectFinal = projectList.filter(project => projectId === project.id)


  console.log("final project", project);

  return (
    <div className="max-w-7xl md:my-20 my-10 md:mx-auto mx-5">
      <h1 className="md:text-5xl text-2xl text-center font-semibold pb-5">Projects </h1>

      <div></div>
    </div>
  )
}

export default ProjectDetails