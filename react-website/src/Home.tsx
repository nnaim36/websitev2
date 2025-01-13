

function Home() {
    return(
    <section className="home">
        <div className="intro">
            <div className="profile-picture">
                <img src="../public/profileTemp.jpg" alt="Profile" className="circular-image" />
            </div>
            <div className="quote">
                <p>"Your inspirational quote here."</p>
            </div>
        </div>
        <div className="about">
            <h2>About Me</h2>
            <p>Write a brief introduction about yourself here.</p>
        </div>
        <div className="work">
            <h2>Work Experience</h2>
            <ul>
                <li>Software Engineer at Tech Corp (2020-2025)</li>
                <li>Intern at Startup Inc. (2019-2020)</li>
            </ul>
        </div>
        <div className="education">
            <h2>Education</h2>
            <ul>
                <li>University of Example - Bachelor of Science in Computer Science</li>
                <li>High School of Example - High School Diploma</li>
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