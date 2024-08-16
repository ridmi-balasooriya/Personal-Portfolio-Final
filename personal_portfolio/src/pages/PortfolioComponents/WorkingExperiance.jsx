const WorkingExperiance = (props) => {
    const workExp = props.workExp

    return(
        <section id='experiance' className="portfolio_section px-4 text-center">
            <h2>Working Experiance</h2>
            <div className="flexsblockdiv my-6">
                {
                    Object.entries(workExp).map(([key, value]) => (
                        <div key={key} className="flexsblock w-6/12">
                            <h4 className="text-2xl">{value.title}</h4>
                            <p className="text-sm my-1">From {value.start_date} To {value.end_date}</p>
                            <p className=" mb-4">{value.company}</p>                            
                            <div className="flexskill">
                                {value.skills.map(skill => (
                                    <div key={skill} className="text-sm">{skill}</div>
                                ))}       
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default WorkingExperiance