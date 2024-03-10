import React from 'react'
import './PlacementRecord.css'

function PlacementRecord() {
  return (
        <div className='table-container'>
              <h1 className='heading'>Placement Record</h1>
              <table className='box'>
                    <thead>
                          <tr>
                                <th>Sl. No</th>
                                <th>Student Name</th>
                                <th>Branch</th>
                                <th>Company</th>
                                <th>Package</th>
                                <th>Placed Date</th>
                          </tr>
                    </thead>
                    <tbody>
                          <tr>
                                <td data-label='Company'>01.</td>
                                <td data-label='Company'>Anuj Kumar Singh</td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                            <td data-label='company'>05 jan 2025</td>

                          </tr>
                          <tr>
                                <td data-label='Company'>02.</td>
                                <td data-label='Company'>Jay Narayan </td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                                <td data-label='company'>05 Jan 2025</td>

                          </tr>
                          <tr>
                                <td data-label='Company'>03.</td>
                                <td data-label='Company'>Shivam Kumar</td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                                <td data-label='company'>05 Jan 2025</td>

                          </tr>
                          <tr>
                                <td data-label='Company'>04.</td>
                                <td data-label='Company'>Anand Kumar</td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                                <td data-label='company'>05 Jan 2025</td>

                          </tr>
                          <tr>
                                <td data-label='Company'>05.</td>
                                <td data-label='Company'>Deepak Kumar</td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                                <td data-label='company'>05 Jan 2025</td>

                          </tr>
                          <tr>
                                <td data-label='Company'>06.</td>
                                <td data-label='Company'>GauravKumar</td>
                                <td data-label='Company'>B.Tech CSE</td>
                                <td data-label='Company'>Wipro</td>
                                <td data-label='Company'>1 Cr</td>
                                <td data-label='company'>05 Jan 2025</td>

                          </tr>
                    </tbody>
              </table>
        </div>
  )
}

export default PlacementRecord

