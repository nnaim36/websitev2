import { useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log("Sending to:", import.meta.env.VITE_TO_EMAIL);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_TO_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Leave a Comment or Question</h2>

        {isSubmitted ? (
          <div className="alert alert-success">
            Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row align-items-center">
              <label className="col-sm-3 col-form-label text-start">
                Name
              </label>
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
              <label className="col-sm-3 col-form-label text-start">
                Email
              </label>
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
              <label className="col-sm-3 col-form-label text-start">
                Message
              </label>
              <div className="col-sm-9">
                <textarea
                  name="message"
                  className="form-control"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;