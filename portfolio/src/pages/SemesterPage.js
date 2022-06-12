import React from "react";
import { Outlet, useParams } from "react-router-dom"
import Navbarblog from "../posts/blog/navbarblog";
import Weeks from "../posts/blog/Weeks.json"

export function SemesterPage() {

    let { week } = useParams();

    return (
        <div>
            <Navbarblog />
            <div className="page-body-text">
                {week === "start" ? <SemesterPageText /> :
                    <>
                        {Weeks.weeks.map(x => {
                            if (x.number === week)
                                return (
                                    <div>
                                        <h1>
                                            Uge {x.number}
                                        </h1>
                                        <h3>
                                            {x.date}
                                        </h3>
                                        {x.context.map(x => {
                                            if (x.text === "Link") {
                                                return (
                                                    <div>
                                                        <a href={x.link}>Linkedin kursus</a> <br />
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <p>
                                                        {x.text}
                                                    </p>
                                                )
                                            }
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

export function SemesterPageText() {
    return (
        <>
            <h1>
                4.semester
            </h1>
            <p>
                Her inde står der ting omkring det jeg har lært om på 4.semester<br /><br />

                Jeg arbejder med frontend og databas<br /><br />

                Selve den her portfolio har jeg selv bygget op i React fra bunden af
            </p>
        </>
    );
}