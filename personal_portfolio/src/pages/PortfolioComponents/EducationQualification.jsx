const EducationQualification = (props) => {
    const eduQual = props.eduQual

    return(
        <section id='education' className="portfolio_section px-4 text-center">
            <h2>Educational Qualification</h2>              
            <div className="flexsblockdiv my-6">
                {
                    Object.entries(eduQual).map(([key, value]) => (
                        <div key={key} className="flexsblock w-6/12">
                            <h4 className="text-2xl">{value.degree}</h4> 
                            <p className="text-sm mb-4">{value.school}</p> 
                            <p>{value.field}</p>    
                            <p className="mb-4">{value.grade}</p>                            
                            <p className="text-sm my-1">{value.end_date}</p>
                            
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default EducationQualification