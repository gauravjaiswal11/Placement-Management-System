import React, { useState } from "react";
import axios from "axios";
import JobAppicationCSS from "./JobApplication.module.css";

function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobRole: "",
    address: "",
    city: "",
    pincode: "",
    resume: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      resume: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the form data to inspect before sending
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:9090/api/students/addstudent",
        formData
      );
      console.log("Student added:", response.data);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className={JobAppicationCSS.container}>
      <div className={JobAppicationCSS.applyBox}>
        <h1>
          Job Application <span className={JobAppicationCSS.titleSmall}></span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className={JobAppicationCSS.formContainer}>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
                required
              />
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="jobRole">Job Role</label>
              <select
                name="jobRole"
                id="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Role</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="full-stack">Full Stack Web Development</option>
                <option value="ui-ux">UI & UX Designer</option>
              </select>
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                cols="50"
                rows="4"
                placeholder="Enter Address"
                required
              ></textarea>
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter City"
                required
              />
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter Pincode"
                required
              />
            </div>
            <div className={JobAppicationCSS.formControl}>
              <label htmlFor="resume">Upload Your CV</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <div className={JobAppicationCSS.formControl}>
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplicationForm;
