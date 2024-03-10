import React from 'react';
import "./CompanyDetails.css"; 
class PlacementDrive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        { id: 1, name: 'Accenture', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },
        { id: 2, name: 'TCS', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },
        { id: 3, name: 'Amazon', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },
        { id: 4, name: 'Google', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },
        { id: 5, name: 'Microsoft', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },
        { id: 6, name: 'Dessault System', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar',  Package:'25lpa' },

      ]
    };
  }

  render() {
    return (
      <div>
        <h2 className='head'>PLACEMENT DRIVE RECORD</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Branch</th>
              <th>Position</th>
              <th>Session</th>
              
              <th>Package</th>
            </tr>
          </thead>
          <tbody>
            {this.state.companies.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.industry}</td>
                <td>{student.Position}</td>
                <td>{student.Location}</td>
                
                <td>{student.Package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlacementDrive;
