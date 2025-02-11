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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-990 to-black">
      <div className="max-w-lg w-full p-8 bg-gray-900 text-white rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message:</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out transform hover:bg-gray-700"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105'}`}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-400">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
