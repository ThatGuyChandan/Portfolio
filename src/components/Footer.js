import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const { name, email, message } = formData;
    const subject = "Contact Form Submission";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:contact.chandanthakur@gmail.com
  ?subject=${encodeURIComponent(subject)}
  &body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gray-900 " id="contact">
      <div className=" p-12 sm:p-24 flex flex-col-reverse md:flex-row gap-12">
        <div className="flex flex-col gap-5 md:w-1/2">
          <div className="text-white py-8">
            <h1 className=" text-lg md:text-xl py-4 border-b-4  border-blue-900  font-bold">
              Drop Me a Message
            </h1>
            <p className="text-sm lg:text-lg pt-8">
              Have a question, suggestion, or just want to say hello? I'd love
              to hear from you! Fill out the form below, and I'll get back to
              you as soon as possible.
            </p>
          </div>

          <div>
            <div className="text-white flex gap-2 items-center py-1">
              <svg
                class="h-8 w-8 text-white rounded-full border border-white p-1 hover:bg-blue-600 cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <p className="text-sm">+91 7807002990</p>
            </div>
            <div className="text-white flex gap-2 items-center py-1">
              <svg
                class="h-8 w-8 text-white rounded-full border border-white p-1 hover:bg-blue-600 cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p className="text-sm ">contact.chandanthakur@gmail.com</p>
            </div>
            <div className="text-white flex gap-2 items-center py-1">
              <svg
                class="h-8 w-8 text-white rounded-full border border-white p-1 hover:bg-blue-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm"> Shimla, India</p>
            </div>
          </div>
        </div>
        <div className="max-w-md  p-4  bg-white rounded shadow-md md:w-1/2">
          <h1 className="text-2xl font-bold  mb-4 text-center">Contact Me</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Message:
              </label>
              <textarea
                name="message"
                placeholder="Type your message here"
                rows="4"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className=" text-center text-white ">
        <h1 className="p-4 border-b-2 border-blue-900  ">Follow Me</h1>
        <div className="inline-flex p-4">
          <a
            href="https://github.com/ThatGuyChandan"
            target="blank"
            className="group relative w-9 h-9 md:w-11 md:h-11 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 hover:gray-700 "
              fill="white "
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/chandan-thakur-969703250/"
            target="blank"
            className="group relative w-9 h-9 md:w-11 md:h-11 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/_chandan.thakur/"
            target="blank"
            className="group relative w-9 h-9 md:w-11 md:h-11 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 "
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        {/* <p>&copy; {currentYear} . All rights reserved.</p> */}
      </div>
    </div>
  );
};

export default Footer;
