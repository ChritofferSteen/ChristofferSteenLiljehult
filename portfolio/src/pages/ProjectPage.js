import React from "react";
import { useParams } from "react-router-dom"
import Navbarproject from "../posts/project/navbarproject";
import Projects from "../posts/project/Projects.json"

export function ProjectPage() {

    let { project } = useParams();

    return (
        <div>
            <Navbarproject />
            <div className="page-body-text">
                {project === "start" ? <ProjectPageText /> :
                    <>
                        {Projects.projects.map(x => {
                            if(x.title === project)
                            return (
                                <div>
                                    <h1>
                                        {x.title}
                                    </h1>
                                    {x.description.map(x => {
                                        return (
                                            <p>
                                                {x}
                                            </p>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </>

                }
            </div>
        </div>
    );
}






export function ProjectPageText() {
    return (
        <>
            <h1>
                Projekter
            </h1>
            <p>
                Her er der beskrivelser af de projekter jeg har lavet gennem tiden
            </p>
        </>
    );
}


