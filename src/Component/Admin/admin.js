import React, { Component } from "react";
import "./admin.css"; // Import the CSS file
import { NavLink } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="root">
        <h1 className="admin-head">ADMIN</h1>
        <div className="card-container">
          <div className="crd1 card">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/55/47/company-profile-infographic-diagram-template-vector-22725547.jpg"
              className="card-img"
              alt="Company Details"
            />
            <div className="card-overlay">
              <h5 className="card-title">Company Details</h5>
              <NavLink to="/">Click Here</NavLink>
            </div>
          </div>

          <div className="crd2 card">
            <img
              src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9icyUyMHRleHR8ZW58MHx8MHx8fDA%3D"
              className="card-img"
              alt="Jobs"
            />
            <div className="card-overlay">
              <h5 className="card-title">Jobs</h5>
              <NavLink to="/">Click Here</NavLink>
            </div>
          </div>

          <div className="crd3 card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.40o08ym97mr-Vp-cvlHHLAAAAA&pid=Api&P=0&h=180"
              className="card-img"
              alt="Placement Record"
            />
            <div className="card-overlay">
              <h5 className="card-title">Placement Record</h5>
              <NavLink to="/">Click Here</NavLink>
            </div>
          </div>

          <div className="crd4 card">
            <img
              src="https://th.bing.com/th/id/R.e4e6cdd09eef1eee9b5232c6660c2d05?rik=4FZJHDUp%2bGnSrA&riu=http%3a%2f%2fwww.creative-commons-images.com%2fclipboard%2fimages%2freport.jpg&ehk=3i3r1a2IV6fLPZJ0DHI%2foxFtrYWolGm5HExkk1tWf1c%3d&risl=&pid=ImgRaw&r=0"
              className="card-img"
              alt="Report"
            />
            <div className="card-overlay">
              <h5 className="card-title">Report</h5>
              <NavLink to="/">Click Here</NavLink>
            </div>
          </div>
          <div className="crd1 card">
            <img
              src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
              className="card-img"
              alt="Company Details"
            />
            <div className="card-overlay">
              <h5 className="card-title">Send SMS</h5>
              <NavLink to="/">Click Here</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
