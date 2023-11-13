import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    opinion: "",
  });

  const { email, password, opinion } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Form Submitted",
      html: `<br>Email: ${email}<br>Password: ${password}<br>Opinion: ${opinion}`,
      icon: "success",
    });
  };

  return (
    <section className="" style={{ backgroundColor: "rgb(253, 245, 226)" }}>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="hello@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Your password"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="opinion"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your opinion
            </label>
            <textarea
              id="opinion"
              rows="6"
              value={opinion}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Leave your opinion..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-sky-200"
            style={{ border: "1px solid" }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
