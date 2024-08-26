import { useState, useEffect } from 'react';
import '../styles/home.css';
import NavigationBar from './NavigationBar';
import PersonalData from './PortfolioComponents/PersonalData';
import WorkingExperiance from './PortfolioComponents/WorkingExperiance';
import EducationQualification from './PortfolioComponents/EducationQualification';
import TechSkills from './PortfolioComponents/TechSkills';
import SoftSkills from './PortfolioComponents/SoftSkills';
import ContactDetails from './PortfolioComponents/ContactDetails';
import Projects from './PortfolioComponents/Projects';
import API_BASE_URL from '../config';
//import Footer from './Footer';

const HomePage = () => {

    const [pPortfolio, setpPortfolio] = useState();
    let personalInfo = {};
    let contactD = {};
    let socialMedia = {};
    let workingExperiance = [];
    let educationQualification = [];
    let techSkills = [];
    let softSkills = [];
    let projects = [];


    useEffect(() => {
        fetch(`${API_BASE_URL}/api/data/`)
        .then(
            response => response.json()
        )
        .then(
            data => setpPortfolio(data))
        .catch(error => {
            alert(error)
        })
    }, [])
    
    if(pPortfolio){        
        personalInfo = pPortfolio.portfolio.personal_info;
        contactD = pPortfolio.portfolio.contact_details;
        socialMedia = pPortfolio.portfolio.social_media;
        workingExperiance = pPortfolio.portfolio.working_experiance;
        educationQualification = pPortfolio.portfolio.education_qualification;
        techSkills = pPortfolio.portfolio.tech_skills;
        softSkills = pPortfolio.portfolio.soft_skills;
        projects = pPortfolio.portfolio.projects
    }

    const getScreenSize = () => {
        const width = window.innerWidth;
        if (width < 650) return 'small';
        if (width >= 650 && width < 880) return 'medium';
        return 'large';
    }


    const [screenSize, setScreenSize] = useState(getScreenSize());
    const [mainContent, setMainContent] = useState(getScreenSize() === 'large' ? '#experiance' : '#profile');

    
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newScreenSize = width < 650 ? 'small' :
                                  width >= 650 && width < 880 ? 'medium' : 'large';

            if (screenSize !== newScreenSize) {
                setScreenSize(newScreenSize);
                // Update `mainContent` based on the new screen size only if necessary
                if (newScreenSize === 'large' && mainContent !== '#experiance') {
                    setMainContent('#experiance');
                } else if (newScreenSize !== 'large' && mainContent !== '#profile') {
                    setMainContent('#profile');
                }
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenSize, mainContent]);


    
    const [isVisible, setIsVisible] = useState(false);

    //Load main Content
    const loadContent = (event) => {
        event.preventDefault()
        setMainContent('');
        setIsVisible(true);
        const linkElement = event.currentTarget;
        const href = linkElement.getAttribute('href');
       
        setTimeout(() => {    
            setMainContent(href);
            setIsVisible(false);            
        }, 2000);

        
        
    }

    return (
        <>
            <section className='navigation'>
                <NavigationBar loadContent = {loadContent} />
            </section>   
            <main>   
                
                {isVisible && <div className='preloader_div'>
                    <div className="preloader"><div></div><div></div><div></div></div>
                </div>}                
                {(screenSize !== 'large') && (mainContent === '#profile')? <PersonalData pInfo = {personalInfo} sMedia = {socialMedia}  />: null  } 
                {(mainContent === '#experiance') && <WorkingExperiance workExp = {workingExperiance} />}
                {(mainContent === '#education') && <EducationQualification eduQual = {educationQualification} />}
                {(mainContent === '#techSkills') && <TechSkills techSkills = {techSkills} />}
                {(mainContent === '#softSkills') && <SoftSkills softSkills = {softSkills} />}
                {(mainContent === '#contactDetails') && <ContactDetails contactD = {contactD} sMedia = {socialMedia} /> }
                {(mainContent === '#projects') && <Projects projects = {projects} />}
                {/* <Footer /> */}
            </main>  
            {(screenSize === 'large') && <PersonalData pInfo = {personalInfo} sMedia = {socialMedia}  />  }     
            
        </>
        
    );
}

export default HomePage;