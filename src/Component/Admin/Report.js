import React from 'react';
import "./CompanyDetails.modue.css"; 
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        { id: 1, name: 'Accenture', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '25', Package:'25lpa' },
        { id: 2, name: 'TCS', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '20', Package:'25lpa' },
        { id: 3, name: 'Amazon', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '05', Package:'25lpa' },
        { id: 4, name: 'Google', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '15', Package:'25lpa' },
        { id: 5, name: 'Microsoft', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '06', Package:'25lpa' },
        { id: 6, name: 'Dessault System', industry: 'Technology', Position: 'Software Engineer',Location: 'Bhubaneshwar', NoOfCandidates: '25', Package:'25lpa' },

      ]
    };
  }

  render() {
    return (
      <div>
        <h2 className='head'>REPORT</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Company Name</th>
              <th>Industry</th>
              <th>Position</th>
              <th>Location</th>
              <th>NoOfCandidates</th>
              <th>Package</th>
            </tr>
          </thead>
          <tbody>
            {this.state.companies.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.industry}</td>
                <td>{company.Position}</td>
                <td>{company.Location}</td>
                <td>{company.NoOfCandidates}</td>
                <td>{company.Package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Report;
