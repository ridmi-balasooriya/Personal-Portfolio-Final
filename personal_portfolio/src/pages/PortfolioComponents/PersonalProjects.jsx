const PersonalProjects = (props) => {
    const personalData = props.data

    return(
        <h2>Personal Projects {personalData.name}</h2>
    );
}

export default PersonalProjects