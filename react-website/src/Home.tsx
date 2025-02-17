import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
/*import BottomNav from "./BottomNav";*/
import TopNav from "./TopNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./ContactForm";
import Education from "./Education";
import { useEffect, useState, useRef } from "react";

/*import AppLoading from 'expo-app-loading';*/
import CustomModal from "./CustomModal";
/*
import {
  useFonts,
  Teko_300Light,
  Teko_400Regular,
  Teko_500Medium,
  Teko_600SemiBold,
  Teko_700Bold,
} from '@expo-google-fonts/teko';
 */


function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const quoteRef = useRef(null);

    
    const [showCompany,setShowCompany] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState({ name: "", description: "" });

    const handleShowCompany = (company:any) => {
        setSelectedCompany(company);
        setShowCompany(true);
    }

    const handleCloseCompany = () => setShowCompany(false);


    const companies = [
        { name: "Carlson Software",
            description: `Founded in 1983, Carlson Software specializes in CAD design software, field data collection, 
        and machine control products for the land surveying, civil engineering, construction, and mining industries 
        worldwide, providing one-source technology solutions from data collection to design to construction. Carlson 
        Software’s renowned dedication to customer service is unique in the industry.`
        },
        { name: "Third Pole Therapeutics",
            description: `The core technology of the device is based on innovations developed by the head of Third Pole’s 
        Scientific Advisory Board, Professor Warren Zapol at Harvard’s Massachusetts General Hospital. Professor Zapol 
        was flying from Boston to Los Angeles to visit a colleague, who won the Nobel Prize for the discovery of NO’s biological 
        role, when lightning inspired his pioneering idea to use electric current to produce NO. 
        After meticulous follow-up work in his lab, and careful testing over several years, Professor Zapol and the Third Pole team 
        developed an investigational device that uses proprietary technology to produce pure NO for inhalation on-demand from air, 
        enabling bedside and portable therapeutic use.`
        },
        { name: "Keolis",
            description: `Keolis Commuter Services operates the Massachusetts Bay Transportation Authority’s 14 
        commuter rail lines serving the Greater Boston region and Rhode Island. Since Keolis began operations 
        in 2014, the Commuter Rail’s on-time performance and reliability are better than ever, contributing to 
        its best in the nation ridership return. 

        As the nation’s fifth-busiest rail system, MBTA Commuter Rail serves nearly 90,000 passengers on weekdays.`
        },
    ];


    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 } // Triggers when 50% of the element is visible
        );
    
        if (quoteRef.current) {
          observer.observe(quoteRef.current);
        }
        return () => {
            if (quoteRef.current) {
              observer.unobserve(quoteRef.current);
            }
          };
        }, []);




    return(
        
    <section id="home">
        <TopNav />

        <div className="intro">
            <div className="profile-picture">
                <img src="/profile.jpeg" alt="Profile" className="circular-image" />
                <h2 className="profile-title">Software Developer</h2>
            </div>
            <div className={`quote ${isVisible ? "visible" : ""}`} ref={quoteRef}>
                <p>"It always seems impossible until it’s done." – Nelson Mandela</p>
            </div>
        </div>
        <div className="border w-100 vh-10 overflow-hidden home-banner">
            <img src="/banner3.png" alt="forest banner" className="w-100 h-100 object-fit-cover" />
        </div>
        <section id="home-body">
        <div className="about" id="about">
            <h2>About Me</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <div className="work-experience-content">
            <p className="work-description">
                I am a software developer with a master’s degree in computer science, earned in December 2024. My professional 
                journey spans multiple industries, including five years in transportation as a signal design engineer. I later 
                transitioned to the medical device industry, where I contributed to a startup’s software team, and eventually joined 
                a software company as a full-time developer.
            </p>
            <p className="work-description">
            Beyond my career, I am passionate about reducing e-waste. I actively seek to expand my skills in repairing and restoring 
            broken technology, believing that basic repair knowledge can significantly extend a product’s lifespan. I admire engineers 
            who prioritize repairability in their designs and companies that provide repair parts and manuals to support sustainability.

            </p>
            <p className="work-description">
            Outside of work, I enjoy exploring new technologies and learning new skills. Welcome to my website! Feel free to leave a 
            message at the bottom of the page, and I’ll get back to you as soon as possible.
            </p>
            </div>
        </div>
        <div className="work" id="work">
            <h2>Work Experience</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <div className="container mt-5">
            <div className="card p-4 shadow-lg">
            <div className="d-flex align-items-center">
                <h3 className="company-name me-2">Carlson Software:</h3> 
                <button className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center company-info-button" 
                onClick={() => handleShowCompany(companies[0])}
                >
                    <FaQuestion />
                </button>
            </div>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="/Carlson-Pyramid-Logo.png" alt="Carlson Software Logo" />
                </div>
                <div className="work-experience-content">
                    <p className="work-description">
                    At this company, I was responsible for fixing reported software bugs, implementing 
                    new features, and managing the testing system. I collaborated directly with software 
                    users, gathering their feedback and turning their ideas into functional solutions.
                    </p>
                    <p className="work-description">
                    Some of my key contributions included enhancing the labeling system in the field-to-finish
                     routine and improving user control over report generation by allowing customization of
                      displayed units. Additionally, I optimized the error logging system to ensure that warnings
                       and errors encountered during project processing did not slow down the software.
                    </p>
                    <p className="work-description">
                    For the testing system, I updated automation scripts to align results with expected outcomes,
                     enhancing overall reliability and efficiency.
                    </p>
                </div>
            </div>
            </div>
            </div>


            <div className="container mt-5">
            <div className="card p-4 shadow-lg">
            <div className="d-flex align-items-center">
                <h3 className="company-name me-2">Third Pole Therapeutics:</h3> 
                <button className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center company-info-button" 
                onClick={() => handleShowCompany(companies[1])}>
                    <FaQuestion />
                </button>
            </div>
            <div className="work-experience">
                <div className="work-experience-content">
                    <p className="work-description">This role provided an incredible opportunity to immerse myself in a startup environment, where I gained
                         firsthand experience in the full lifecycle of product development—from inception to final stages. One of 
                         the most exciting aspects of working at a startup is the ability to wear multiple hats, allowing me to 
                         contribute across various areas.
                    </p>
                    <p className="work-description">
                        I played a key role in the build system, initiating software builds and conducting thorough bug defect 
                         verification testing. Additionally, I diagnosed and resolved software bugs, ensuring system stability. 
                         My responsibilities extended to handling Tier 3 medical devices, setting up tests for investigative analysis, 
                         and developing scripts that supported QA teams in identifying errors efficiently.
                    </p>
                    <p className="work-description">
                    This experience not only strengthened my technical skills but also deepened my understanding of problem-solving in fast-paced,
                     high-stakes environments.
                    </p>
                </div>
                <div className="work-experience-image">
                    <img src="/thirdpole-logo.png" alt="Third Pole Theraputics logo" />
                </div>
                
            </div>
            </div>
            </div>

            <div className="container mt-5">
            <div className="card p-4 shadow-lg">
            <div className="d-flex align-items-center">
                <h3 className="company-name me-2">Keolis:</h3> 
                <button className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center company-info-button" 
                onClick={() => handleShowCompany(companies[2])}>
                    <FaQuestion />
                </button>
            </div>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/keolis-logo3.png" alt="Keolis logo" />
                </div>
                <div className="work-experience-content">
                    <p className="work-description">I first joined Keolis as a co-op while attending Northeastern University, and after 
                        completing my undergraduate program, I returned to work with their signal design team.

                    </p>
                    <p className="work-description">
                    During my co-op, I had the opportunity to work on a variety of hands-on projects. I collaborated with the surveying team, 
                    conducting site visits to assess property lines and inspect bridges. Additionally, I created 3D models in AutoCAD for a train 
                    maintenance building, which was later used in a project proposal.
                    </p>
                    <p className="work-description">
                    As a Junior Engineer, my role involved updating signal plans using MicroStation and designing signal improvement plans for field
                     implementation. I worked on modernizing signal systems by integrating LED lights in place of incandescent bulbs, incorporating
                      relay logging, and making wire modifications to support the installation of crossing gates. I also had the opportunity to 
                      visit project sites and test software changes at control points, ensuring system reliability and functionality.
                    </p>
                    <p className="work-description">
                    This experience allowed me to develop a strong technical foundation while gaining valuable field exposure in transportation 
                    engineering.
                    </p>

                </div>
                
            </div>
            </div>
            </div>

            <CustomModal show={showCompany} onClose={handleCloseCompany} title={selectedCompany.name}>
                    {selectedCompany.description.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
            </CustomModal>
            
        </div>
        

        {/* Education section */}

        <Education />


        {/* Contact section */}
        <div className="contact" id = "contact">
            <h2>Contact Me</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>

            <ContactForm/>

        </div>

        <div className="bottom-nav">
                    <a href="https://github.com/nnaim36" target="_blank" rel="noopener noreferrer" className="nav-item">
                        <FaGithub className="icon" />
                    </a>
        
                    <a href="https://www.linkedin.com/in/nile-naim-494647173/" target="_blank" rel="noopener noreferrer" className="nav-item">
                        <FaLinkedin className="icon" />
                    </a>
                </div>

        </section>
        
    </section>
    );
};
export default Home;