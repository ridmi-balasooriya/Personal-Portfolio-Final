const SoftSkills = (props) => {
    const softSkills = props.softSkills

    return(
        <section id='softSkills' className="portfolio_section px-16 pt-24 text-center">
            <h2>Soft Skills</h2>     
            <div className="flexsblockdiv">
                {
                    Object.entries(softSkills).map(([key, value]) => (
                        <div key={key} className="skilldiv p-6 w-4/12">
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

export default SoftSkills