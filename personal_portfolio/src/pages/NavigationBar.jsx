import { useEffect, useState } from "react";

const NavigationBar = ({loadContent}) => {

    const [isActive, setIsActive] = useState('');
    const [screenSize, setScreenSize] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState('');

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {        
        const handleResize = () => {
            const width = window.innerWidth;
            if(width < 650){
                setScreenSize('small');
                setIsMobileMenuOpen(false);
                setIsActive(1);
            }else if(width >= 650 && width < 880){
                setScreenSize('medium');
                setIsActive(1);
            }else{
                setScreenSize('large');
                setIsActive(2);
            }            
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    
    const handleClick = (linkId) =>  {      
        setIsActive(linkId);
        (screenSize === 'small') && setIsMobileMenuOpen(false);
    }
      
    
    return(
        <>
            <div className={`menubutton ${(screenSize === 'small' && isMobileMenuOpen) ? 'hidemenubtn' : ''}`}>
                <label htmlFor="menu"><span className="material-symbols-outlined">menu</span></label>
                <input type="checkbox" id='menu' onClick={() => { toggleMenu();}} />
            </div> 
            <nav className={`${(screenSize === 'small' && isMobileMenuOpen) ? 'openmenu' : 'closemenu'}`}> 
                <div className="closebutton">
                    <label htmlFor="close"><span className="material-symbols-outlined">close</span></label>
                    <input type="checkbox" id='close' onClick={() => { toggleMenu();}} />
                </div>                       
                <ul>
                    <li className={isActive === 1 ? 'active' : ''}>
                        <a href="#profile" className={isActive === 1 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(1)}}>
                            <span className="material-symbols-outlined">person</span>
                            Profile
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>
                    <li className={isActive === 2 ? 'active' : ''}
                        onClick={
                            (event) => {
                                event.preventDefault(); 
                                handleClick(2)
                                }
                            }
                    >
                        <a href="#experiance" className={isActive === 2 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(2)}}>
                            <span className="material-symbols-outlined">work</span>
                            Experiance
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>                    
                    <li className={isActive === 7 ? 'active' : ''}>
                        <a href="#projects" className={isActive === 7 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(7)}}>
                            <span className="material-symbols-outlined">important_devices</span>
                            Projects
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>
                    <li className={isActive === 3 ? 'active' : ''}>
                        <a href="#education" className={isActive === 3 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(3)}}>
                            <span className="material-symbols-outlined">school</span>
                            Education
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>
                    <li className={isActive === 4 ? 'active' : ''}>
                        <a href="#techSkills" className={isActive === 4 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(4)}}>
                            <span className="material-symbols-outlined">handyman</span>
                            Technical Skills
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>
                    <li className={isActive === 5 ? 'active' : ''}>
                        <a href="#softSkills" className={isActive === 5 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(5)}}>
                            <span className="material-symbols-outlined">psychology</span>
                            Soft Skills             
                            <span className="material-symbols-outlined hr">horizontal_rule</span>       
                        </a>
                        <span className="pointer"></span>
                    </li>
                    <li className={isActive === 6 ? 'active' : ''}>
                        <a href="#contactDetails" className={isActive === 6 ? 'active' : ''} onClick={(event) =>{loadContent(event); handleClick(6)}}>
                            <span className="material-symbols-outlined">mail</span>
                            Contact
                            <span className="material-symbols-outlined hr">horizontal_rule</span>
                        </a>
                        <span className="pointer"></span>
                    </li>                    
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar