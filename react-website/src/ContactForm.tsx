import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            "your_service_id", // Replace with your EmailJS Service ID
            "your_template_id", // Replace with your EmailJS Template ID
            formData,
            "your_user_id" // Replace with your EmailJS User ID
        ).then(
            () => {
              setIsSubmitted(true);
              setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
              console.error("Email sending failed:", error);
            }
        );
    };

    return(
        <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Contact Me</h2>
        {isSubmitted ? (
          <div className="alert alert-success">Message sent successfully!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
    )
};
export default ContactForm;