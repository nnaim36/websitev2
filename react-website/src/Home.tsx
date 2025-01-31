import TopNav from "./TopNav";


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
        <div className="about" id="about-me">
            <h2>About Me</h2>
            <p>Write a brief introduction about yourself here.</p>
        </div>
        <div className="work">
            <h2>Work Experience</h2>
            <h3>Carlson Software</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/Carlson-Pyramid-Logo.png" alt="Carlson Software Logo" />
                </div>
                <div className="work-experience-content">
                    <ul>
                        <li>Software Engineer at Tech Corp (2020-2025)</li>
                        <li>Intern at Startup Inc. (2019-2020)</li>
                    </ul>
                </div>
            </div>
            <h3>Third Pole Therapeutics</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/thirdpole-logo.png" alt="Third Pole Theraputics logo" />
                </div>
                <div className="work-experience-content">
                    <ul>
                        <li>Software Engineer at Tech Corp (2020-2025)</li>
                        <li>Intern at Startup Inc. (2019-2020)</li>
                    </ul>
                </div>
                
            </div>
            <h3>Keolis</h3>
            <div className="work-experience">
                <div className="work-experience-image">
                    <img src="../public/keolis-logo2.png" alt="Keolis logo" />
                </div>
                <div className="work-experience-content">
                    <ul>
                        <li>Software Engineer at Tech Corp (2020-2025)</li>
                        <li>Intern at Startup Inc. (2019-2020)</li>
                    </ul>
                </div>
                
            </div>
        </div>
        <div className="education" id="education-list">
            <h2>Education</h2>
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
            <ul>
                <li>Email: example@email.com</li>
                <li>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">My LinkedIn</a></li>
            </ul>
        </div>
    </section>
    );
};
export default Home;