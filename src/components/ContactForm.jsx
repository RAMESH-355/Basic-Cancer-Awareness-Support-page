import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! We will contact you soon.");

    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-50 p-6 rounded-lg shadow"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          />

          <input
            type="text"
            name="number"
            placeholder="Mobile Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-700"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
