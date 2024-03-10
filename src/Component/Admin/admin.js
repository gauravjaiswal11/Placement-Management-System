import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './admin.module.css'

class Admin extends Component {
  render() {
    return (  
      <div className="container1 mt-5">
        <h1 className="text-center mb-5">ADMIN</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/55/47/company-profile-infographic-diagram-template-vector-22725547.jpg"
                className="card-img-top"
                alt="Company Details"
              />
              <div className="card-body">
                <h5 className="card-title">Company Details</h5>
                <NavLink className='btn btn-primary' to="/companyDetails">Click Here</NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9icyUyMHRleHR8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="Jobs"
              />
              <div className="card-body">
                <h5 className="card-title">Jobs</h5>
                <NavLink className='btn btn-primary' to="/forHire">Click Here</NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.40o08ym97mr-Vp-cvlHHLAAAAA&pid=Api&P=0&h=180"
                className="card-img-top"
                alt="Placement Record"
              />
              <div className="card-body">
                <h5 className="card-title">Placement Record</h5>
                <NavLink className='btn btn-primary' to="/placementDrive">Click Here</NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://th.bing.com/th/id/R.e4e6cdd09eef1eee9b5232c6660c2d05?rik=4FZJHDUp%2bGnSrA&riu=http%3a%2f%2fwww.creative-commons-images.com%2fclipboard%2fimages%2freport.jpg&ehk=3i3r1a2IV6fLPZJ0DHI%2foxFtrYWolGm5HExkk1tWf1c%3d&risl=&pid=ImgRaw&r=0"
                className="card-img-top"
                alt="Report"
              />
              <div className="card-body">
                <h5 className="card-title">Report</h5>
                <NavLink className='btn btn-primary' to="/report">Click Here</NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://media.istockphoto.com/id/1433700909/photo/email-inbox-electronic-communication-graphics-concept.jpg?s=612x612&w=0&k=20&c=txDLm8z274Iz6AJbeskw7heR1e1jpOgEFSM5V9xf8cE="
                className="card-img-top"
                alt="Send Bulk SMS"
              />
              <div className="card-body">
                <h5 className="card-title">Send SMS</h5>
                <NavLink className='btn btn-primary' to="/bulkSms">Click Here</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
