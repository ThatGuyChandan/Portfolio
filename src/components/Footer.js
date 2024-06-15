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
      <div className=" p-12 sm:p-24 flex flex-col md:flex-row gap-12">
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
                className="h-8 w-8 text-white rounded-full border border-white p-1 hover:bg-blue-600 cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p className="text-sm ">contact.chandanthakur@gmail.com</p>
            </div>
            <div className="text-white flex gap-2 items-center py-1">
              <svg
                className="h-8 w-8 text-white rounded-full border border-white p-1 hover:bg-blue-600 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
              className="h-5 w-5 hover:gray-700 "
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
              className="h-5 w-5"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://leetcode.com/u/user5092N/"
            target="blank"
            className="group relative w-9 h-9 md:w-11 md:h-11 bg-opacity-10 inline-flex rounded-full mr-1 md:mr-2 border border-opacity-50 color white items-center justify-center overflow-hidden hover:scale-110 hover:bg-blue-800"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
          </a>
        </div>
        {/* <p>&copy; {currentYear} . All rights reserved.</p> */}
      </div>
    </div>
  );
};

export default Footer;
