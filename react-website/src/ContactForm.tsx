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

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e:any) => {
      e.preventDefault();
      
      const emailParams = {
          to_email: "nile90305@gmail.com",  // Fixed recipient
          subject: formData.name, // Subject is the name
          email: formData.email, // User's email
          message: formData.message // Message content
      };

      emailjs.send(
          "service_h6g7abg", // Replace with your EmailJS Service ID
          "template_0f2ov2n", // Replace with your EmailJS Template ID
          emailParams,
          "ReqPdwRdm7BbVyMu7" // Replace with your EmailJS User ID
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
          <h2 className="text-center mb-4">Leave a Comment or Question</h2>
          {isSubmitted ? (
            <div className="alert alert-success">Message sent successfully!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3 row align-items-center">
                <label className="col-sm-3 col-form-label text-start">Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row align-items-center">
                <label className="col-sm-3 col-form-label text-start">Email</label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row align-items-center">
                <label className="col-sm-3 col-form-label text-start">Message</label>
                <div className="col-sm-9">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    );
};
export default ContactForm;