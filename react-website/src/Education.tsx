import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Education = () => {
    const [show, setShow] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState({ name: "", description: "" });

    const handleShow = (course) => {
        setSelectedCourse(course);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const courses = [
        { 
            name: "Database Management",
             description: `Introduces relational database management systems as a class of software systems. Prepares students to 
             be sophisticated users of database management systems. Covers design theory, query language, and performance/tuning issues. 
             Topics include relational algebra, SQL, stored procedures, user-defined functions, cursors, embedded SQL programs, client-server 
             interfaces, entity-relationship diagrams, normalization, B-trees, concurrency, transactions, database security, constraints, object-relational 
             DBMSs, and specialized engines such as spatial, text, XML conversion, and time series. Includes exercises using a commercial relational or 
             object-relational database management system.`

        },
        { 
            name: "Fundamentals of Computer Networking",
             description: `Studies network protocols, focusing on modeling and analysis, and architectures. Introduces modeling concepts, emphasizing queuing
              theory, including Little’s theorem, M/M/1, M/M/m, M/D/1, and M/G/1 queuing systems. Discusses performance evaluation of computer networks including 
              performance metrics, evaluation tools and methodology, simulation techniques, and limitations. Presents the different harmonizing functions needed for
               communication and efficient operation of computer networks and discusses examples of Ethernet, FDDI, and wireless networks. Covers link layer protocols
                including HDLC, PPP, and SLIP; packet framing; spanning tree and learning bridges, error detection techniques, and automatic repeat request algorithms;
                 sliding window and reliable/ordered services; and queuing disciplines including FQ and WFQ. Introduces flow control schemes, such as window flow control
                  and leaky bucket rate control schemes, and discusses congestion control and fairness. Requires knowledge of probability theory.` 
            },
        { 
            name: "Computer Systems", 
            description: `Studies the structure, components, design, implementation, and internal operation of computer systems, focusing mainly on the operating system
             level. Reviews computer hardware and architecture including the arithmetic and logic unit, and the control unit. Covers current operating system components 
             and construction techniques including the memory and memory controller, I/O device management, device drivers, memory management, file system structures, 
             and the user interface. Introduces distributed operating systems. Discusses issues arising from concurrency and distribution, such as scheduling of concurrent 
             processes, interprocess communication and synchronization, resource sharing and allocation, and deadlock management and resolution. Includes examples from real 
             operating systems. Exposes students to the system concepts through programming exercises. Requires admission to MS program or completion of all transition courses.` 
            },
        { 
            name: "Mobile App Development",
             description: `Focuses on mobile application development on a mobile phone or related platform. Discusses memory
              management; user interface building, including both MVC principles and specific tools; touch events; data handling, 
              including core data, SQL, XML, and JSON; network techniques and URL loading; and, finally, specifics such as GPS and motion sensing 
              that may be dependent on the particular mobile platform. Students are expected to work on a project that produces a professional-quality
               mobile application and to demonstrate the application that they have developed. The instructor chooses a modern mobile platform to be used 
               in the course.`
        },
        { 
            name: "Web Development", 
            description: `Discusses Web development for sites that are dynamic, data driven, and interactive. Focuses on the software development issues of
             integrating multiple languages, assorted data technologies, and Web interaction. Considers ASP.NET, C#, HTTP, HTML, CSS, XML, XSLT, JavaScript,
              AJAX, RSS/Atom, SQL, and Web services. Each student must deploy individually designed Web experiments that illustrate the Web technologies 
              and at least one major integrative Web site project. Students may work in teams with the permission of the instructor. Each student or team 
              must also create extensive documentation of their goals, plans, design decisions, accomplishments, and user guidelines. All source files must 
              be open and be automatically served by a sources server.`
        },
        { 
            name: "Software Development", 
            description: `Covers the foundations of software engineering, including software development life cycle models (e.g., waterfall, spiral, agile);
             requirements analysis; user-centered design; software design principles and patterns; testing (functional testing, structural testing, testing strategies); 
             code refactoring and debugging; software architecture and design; and integration and deployment. Includes a course project where some of the software 
             engineering methods (from requirements analysis to testing) are applied in a team-based setting. Requires admission to MS program or completion of all 
             transition courses.`
        },
    ];

    return (
        <div className="container my-5" id="education">
            <h2 className="mb-4">Education</h2>
            <div className="text-design">
                <div className="left-side-td"></div>
                <div className="right-side-td"></div>
            </div>

            {/* Master's Degree */}
            <div className="container mt-5">
            <div className="card p-4 shadow-lg">
            <div className="row mb-5 align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="/Northeastern-University-Logo.png" alt="Northeastern logo" className="img-fluid" />
                </div>
                <div className="col-md-8 text-start">
                    <p><strong>Northeastern University</strong></p>
                    <p>Master's in Computer Science</p>
                    <h5>Courses:</h5>

                    <div className="row">
                        {courses.map((course, index) => (
                            <div key={index} className="col-md-6">
                                <li
                                    className="list-group-item list-group-item-action"
                                    onClick={() => handleShow(course)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {course.name}
                                </li>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="container mt-5">
            <div className="card p-4 shadow-lg">
            <div className="row align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="/Northeastern-University-Logo.png" alt="Northeastern logo" className="img-fluid" />
                </div>
                <div className="col-md-8 text-start">
                    <p><strong>Northeastern University</strong></p>
                    <p>Bachelor's of Science in Mechanical Engineering</p>
                </div>
            </div>
            </div>
            </div>

            {/* Modal for Course Details */}
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCourse.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedCourse.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Education;