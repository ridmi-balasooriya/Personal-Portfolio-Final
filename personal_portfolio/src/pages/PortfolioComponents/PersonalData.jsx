const PersonalData = (props) => {
    const { pInfo, sMedia } = props;
    
    return (
        <section id='profile' className="portfolio_section text-center">
            <div className="profile-inner-div">
                <div className="w-60 inline-block m-auto pt-6">
                    <img src={`images/${pInfo.image}`} alt={pInfo.name} className="potfolio-profile-pic w-auto" />
                </div>
                <div className="info_div px-4">
                    <h1 className="inline-block border-b-2">{pInfo.name}</h1>
                    <h3>{pInfo.title}</h3>
                    <p className=" ">{pInfo.summary}</p>
                    <div className="sm_div flex place-content-center mt-6 pb-6">
                        { Object.entries(sMedia).map(([key, value]) => (
                            value.link &&
                            <div key={key} className="sm w-24 mt-2 mx-3">
                                <a href={value.link} target="_blank" rel="noreferrer" className="inline-block scale-100 hover:opacity-80 hover:scale-110 duration-300">
                                    <img src={`images/${value.icon}`} alt={`Visit Ridmi Balasooriya ${value.name}`} className="w-auto" />
                                </a>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>            
        </section>

    );
}

export default PersonalData