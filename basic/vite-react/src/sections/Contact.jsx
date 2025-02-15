import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const emailParams = {
      from_name: form.name,
      to_name: "TafadzwaTG",
      from_email: form.email,
      to_email: "gumbitafadzwa@gmail.com",
      message: form.message,
    };

    console.log("Sending email with params:", emailParams);

    emailjs
      .send("service_83hyzom", "template_6bsl9gj", emailParams, "5UwT3W_TpYYj5gzFG")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatus("Email sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send email. Retrying...");
          fallbackSend(emailParams);
        }
      )
      .finally(() => setLoading(false));
  };

  const fallbackSend = async (emailParams) => {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_83hyzom",
          template_id: "template_6bsl9gj",
          user_id: "5UwT3W_TpYYj5gzFG",
          template_params: emailParams,
        }),
      });

      const data = await response.json();
      console.log("Fallback EmailJS Response:", data);

      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email after retry.");
      }
    } catch (error) {
      console.error("Fallback EmailJS Fetch Error:", error);
      setStatus("Network error, please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="max-w-lg w-full p-10 bg-black text-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
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
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
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
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-white">Message:</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-2 p-4 w-full border border-gray-700 rounded-lg bg-black text-white focus:ring-2 focus:ring-white focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 text-white font-semibold rounded-lg ${loading ? 'bg-gray-600' : 'bg-white text-black hover:bg-gray-300 focus:ring-2 focus:ring-white transition duration-300 ease-in-out transform hover:scale-105'}`}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-white">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
