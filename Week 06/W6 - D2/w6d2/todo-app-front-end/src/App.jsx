import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

function App() {
  const [formData, setFormData] = useState({ text: "", status: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/todo", formData);
      console.log("Okay Hogaya hai ", response.data);
      setFormData({ text: "", status: "" });
      let timerInterval;
      Swal.fire({
        title: "Cherna nahe khudi close hojayega. Don't touch",
        html: "Sabar kro send ho raha hai ..... <b></b> milliseconds.",
        timer: 7000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
      console.error("Error agaya hai ", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <div className="">
        <form onSubmit={handleSubmit} action="">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            Text:
            <input
              type="text"
              style={{ width: "25rem", height: "2rem" }}
              value={formData.text}
              onChange={handleChange}
              name="text"
            />
            Status:
            <input
              type="text"
              style={{ width: "25rem", height: "2rem" }}
              value={formData.status}
              onChange={handleChange}
              name="status"
            />
          </div>
          <button type="submit" style={{ width: "25rem", height: "2rem" }}>
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default App;
