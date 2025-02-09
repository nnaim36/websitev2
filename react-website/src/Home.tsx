import { FaGithub, FaLinkedin } from "react-icons/fa";
import BottomNav from "./bottomNav";
import TopNav from "./TopNav";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return(
    <section id="home">
        <TopNav />
        
        <div className="intro">
            <div className="profile-picture">
                <img src="../public/profileTemp.jpg" alt="Profile" className="circular-image" />
            </div>
            <div className="quote">
                <p>"Your inspirational quote here."</p>
            </div>
        </div>
        <div className="border w-100 vh-10 overflow-hidden">
            <img src="../public/banner3.png" alt="forest banner" className="w-100 h-100 object-fit-cover" />
        </div>
        <section id="home-body">
        <div className="about" id="about-me">
            <h2>About Me</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <p className="work-description">I am a software developer that acquired a master’s degree in computer science in December 
                2024. I have a wide range of professional experience with a half a decade in the transportation 
                industry where I worked as a signal design engineer. I also had the opportunity to work for a medical 
                device startup where I was in the software team. I eventually worked for a software company where I 
                worked as a software developer.
            </p>
        </div>
        <div className="work">
            <h2>Work Experience</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <h3 className="company-name">Carlson Software:</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/Carlson-Pyramid-Logo.png" alt="Carlson Software Logo" />
                </div>
                <div className="work-experience-content">
                    <p className="work-description">
                    Founded in 1983, Carlson Software specializes in CAD design software, field data collection, and machine 
                    control products for the land surveying, civil engineering, construction, and mining industries worldwide,
                     providing one-source technology solutions from data collection to design to construction. Carlson Software’s 
                     renowned dedication to customer service is unique in the industry.
                    </p>
                </div>
            </div>
            <h3 className="company-name">Third Pole Therapeutics:</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/thirdpole-logo.png" alt="Third Pole Theraputics logo" />
                </div>
                <div className="work-experience-content">
                    <p className="work-description">This role provided an incredible opportunity to immerse myself in a startup environment, where I gained
                         firsthand experience in the full lifecycle of product development—from inception to final stages. One of 
                         the most exciting aspects of working at a startup is the ability to wear multiple hats, allowing me to 
                         contribute across various areas.
                         I played a key role in the build system, initiating software builds and conducting thorough bug defect 
                         verification testing. Additionally, I diagnosed and resolved software bugs, ensuring system stability. 
                         My responsibilities extended to handling Tier 3 medical devices, setting up tests for investigative analysis, 
                         and developing scripts that supported QA teams in identifying errors efficiently.
                         
                         This experience not only strengthened my technical skills but also deepened my understanding of problem-solving in fast-paced, high-stakes environments.
                    </p>
                </div>
                
            </div>
            <h3 className="company-name">Keolis:</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/keolis-logo3.png" alt="Keolis logo" />
                </div>
                <div className="work-experience-content">
                    <p className="work-description">I first joined Keolis as a co-op while attending Northeastern University, and after completing my undergraduate program, I returned to work with their signal design team.

During my co-op, I had the opportunity to work on a variety of hands-on projects. I collaborated with the surveying team, conducting site visits to assess property lines and inspect bridges. Additionally, I created 3D models in AutoCAD for a train maintenance building, which was later used in a project proposal.

As a Junior Engineer, my role involved updating signal plans using MicroStation and designing signal improvement plans for field implementation. I worked on modernizing signal systems by integrating LED lights in place of incandescent bulbs, incorporating relay logging, and making wire modifications to support the installation of crossing gates. I also had the opportunity to visit project sites and test software changes at control points, ensuring system reliability and functionality.

This experience allowed me to develop a strong technical foundation while gaining valuable field exposure in transportation engineering.</p>

                </div>
                
            </div>
        </div>
        <div className="education" id="education-list">
            <h2>Education</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <div className="education-image">
                <img src="../public/Northeastern-University-Logo.png" alt="" />
            </div>
            <div className="education-content">

            </div>
            <ul>
                <li>Northeastern University - Masters in Computer Science</li>
                <li>Northeastern University - Bachalors of schience Mechanical Engineering</li>
            </ul>
        </div>
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>
            <ul>
                <li>Email: example@email.com</li>
                <li>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
            </ul>
        </div>

        <div className="bottom-nav">
                    <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="nav-item">
                        <FaGithub className="icon" />
                    </a>
        
                    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="nav-item">
                        <FaLinkedin className="icon" />
                    </a>
                </div>

        </section>
        
    </section>
    );
};
export default Home;