import React, { Component } from "react";
import axios from "axios";
import './CompanyDetails.modue.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      profile: "",
      location: "",
      numberOfCandidates: 0,
      package1: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { companyName, profile, location, numberOfCandidates, package1 } = this.state;
    const companyData = {
      companyName,
      profile,
      location,
      numberOfCandidates,
      package1
    };
    axios.post("http://localhost:8080/api/companys/addcompany", companyData)
      .then(res => {
        console.log(res.data);
        // Clear the form after successful submission if needed
        this.setState({
          companyName: "",
          profile: "",
          location: "",
          numberOfCandidates: 0,
          package1: 0
        });
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

  render() {
    const { companyName, profile, location, numberOfCandidates, package1 } = this.state;

    return (
      <div className="container mt-5">
        <h1 className="text-center mb-5">Add Company</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile">Profile</label>
            <input
              type="text"
              className="form-control"
              id="profile"
              name="profile"
              value={profile}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={location}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfCandidates">Number of Candidates</label>
            <input
              type="number"
              className="form-control"
              id="numberOfCandidates"
              name="numberOfCandidates"
              value={numberOfCandidates}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="package1">Package (in LPA)</label>
            <input
              type="number"
              className="form-control"
              id="package1"
              name="package1"
              value={package1}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Company;
