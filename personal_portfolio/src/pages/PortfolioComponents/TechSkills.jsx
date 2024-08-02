const TechSkills = (props) => {
    const techSkills = props.techSkills

    return(
        <section id='techSkills' className="portfolio_section px-16 text-center">
            <h2>Skills</h2>    
            <div className="flexsblockdiv">
                {
                    Object.entries(techSkills).map(([key, value]) => (
                        <div key={key} className="skilldiv">
                            <div className="my-2">{value.skill_name}</div>
                            <div className="progress_div flex">
                                <progress value={value.status} max="100" style={{'--progress':`${value.status}%`}}></progress>
                                <span className="text-xs inline-block px-2">{value.status}%</span>
                            </div>                        
                        </div>
                        
                    ))
                }
            </div>    
        </section>
    );
}

export default TechSkills