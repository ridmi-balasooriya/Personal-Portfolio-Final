const SocialMedia = (props) => {
    const personalData = props.data

    return(
        <h2>Social Media {personalData.name}</h2>
    );
}

export default SocialMedia