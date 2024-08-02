import { useState } from "react";

const Projects = (props) => {
    const projects = props.projects
    const [isExpanded, setIsExpanded] = useState({});

    const toggleExpanded = (projectKey) => {
        setIsExpanded(prevState => ({
            ...prevState,
            [projectKey]: !prevState[projectKey]
        }));
    };

    return(
        <section id='education' className="portfolio_section px-6">
            <h2>My Projects</h2>              
            <div className="flexsblockdiv my-6">
                {
                    Object.entries(projects).map(([key, value]) => (
                        <div key={key} className="flexsblock project-div">
                            <h4 className="text-2xl mb-4">{value.project_name}</h4> 
                            <p className="text-m mb-6">{value.project_description}</p> 
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <a target="_blank" rel="noreferrer" href={value.website} className="flex items-center space-x-1 hover:text-gray-400">
                                        <span className="material-symbols-outlined">language</span> 
                                        <span>Visit Website</span>
                                    </a>
                                </div>
                                <div>
                                    <a target="_blank" rel="noreferrer" href={value.github} className="flex items-center space-x-1 hover:text-gray-400">
                                        <span className="material-symbols-outlined">code_blocks</span>
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </div>

                            <div className={`w-full ${isExpanded[key]? 'block' : 'hidden'}`}>
                                <h4 className="mb-2 text-left w-full">Technologies Used</h4>
                                <ul className="text-sm mb-4 w-full">
                                    {value.technologies_used.map((tech,index) => (
                                        <li key={index}>
                                            <strong>{tech.tech_name} - </strong>
                                            {tech.desc}
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="mb-2 text-left w-full">Features</h4>
                                <ul className="text-sm mb-4 w-full">
                                    {value.features.map((value, index) =>
                                        <li key={index}>{value}</li>
                                    )}
                                </ul>
                            </div> 

                            <button className="mt-2 mb-2 read-more" onClick={() => toggleExpanded(key)}>
                                    {isExpanded[key]? "Read Less" : "Read More"}
                            </button>                           
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Projects