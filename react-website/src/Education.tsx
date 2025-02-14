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
        { name: "Database Management", description: "Covers relational databases, SQL, and NoSQL databases." },
        { name: "Fundamentals of Computer Networking", description: "Covers TCP/IP, networking protocols, and cybersecurity basics." },
        { name: "Computer Systems", description: "Includes operating systems, hardware-software interaction, and system programming." },
        { name: "Mobile App Development", description: "Teaches Android and iOS app development." },
        { name: "Web Development", description: "Focuses on frontend and backend web technologies." },
        { name: "Software Development", description: "Covers software engineering principles and best practices." },
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