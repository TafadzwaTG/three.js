import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Contact component for handling email submissions
const Contact = () => {
  // State to store form data
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle loading status while sending an email
  const [loading, setLoading] = useState(false);
  // State to store the status message (success or failure)
  const [status, setStatus] = useState("");

  // Function to handle input field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // EmailJS parameters
    const emailParams = {
      from_name: form.name,
      to_name: "TafadzwaTG",
      from_email: form.email,
      to_email: "gumbitafadzwa@gmail.com",
      message: form.message,
    };

    console.log("Sending email with params:", emailParams);

    // Sending email using EmailJS
    emailjs
      .send(
        "service_0m71iu1",
        "template_89ue5hq",
        emailParams,
        "gFRppyyO61qKldWTZ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Email sent successfully!");
          // Reset form fields after successful email send
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send email. Retrying...");
          // Fallback to fetch API if EmailJS fails
          fallbackSend(emailParams);
        }
      )
      .finally(() => setLoading(false)); // Stop loading state once the process completes
  };

  // Fallback function in case the primary email send fails
  const fallbackSend = async (emailParams) => {
    try {
      console.log("Email Params:", emailParams); // Debugging
  
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_0m71iu1",
            template_id: "template_cnmlybn",
            user_id: "5UwT3W_TpYYj5gzFG",
            template_params: emailParams,
          }),
        }
      );
  
      const textResponse = await response.text(); // Handle text response
  
      if (!response.ok) {
        throw new Error(`EmailJS Error: ${textResponse}`);
      }
  
      console.log("Fallback EmailJS Response:", textResponse);
      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Fallback EmailJS Fetch Error:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };
  
  return (
    // Contact Section with ID for Smooth Scrolling
    <section id="contact" className="contact-section">
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="max-w-lg w-full p-10 bg-black text-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
          {/* Contact Form Title */}
          <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 p-4 w-full border border-gray-700 rounded-lg bg-black text-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-800"
              />
            </div>

            {/* Email Input Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 p-4 w-full border border-gray-700 rounded-lg bg-black text-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-800"
              />
            </div>

            {/* Message Input Field */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                className="mt-2 p-4 w-full border border-gray-700 rounded-lg bg-black text-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-800"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-black font-semibold rounded-lg ${
                loading
                  ? "bg-gray-600"
                  : "bg-white text-black hover:bg-gray-300 focus:ring-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105"
              }`}
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </form>

          {/* Status Message Display */}
          {status && (
            <p className="mt-4 text-center text-sm text-white">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
