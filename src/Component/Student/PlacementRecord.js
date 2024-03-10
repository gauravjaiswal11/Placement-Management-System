import React from "react";
import PlacementRecordCSS from "./Company.module.css";

function PlacementRecord() {
  return (
    <div className={PlacementRecordCSS.container}>
      <div className={PlacementRecordCSS.tableContainer}>
        <h1 className={PlacementRecordCSS.heading}>Placement Record</h1>
        <table className={PlacementRecordCSS.table}>
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Student Name</th>
              <th>Branch</th>
              <th>Company</th>
              <th>Package</th>
              <th>Placement Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Sl. No">01.</td>
              <td data-label="Student Name">Shivam Kumar Singh</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
            <tr>
              <td data-label="Sl. No">02.</td>
              <td data-label="Student Name">Anand Kumar</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
            <tr>
              <td data-label="Sl. No">03.</td>
              <td data-label="Student Name">Deepak Kumar</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
            <tr>
              <td data-label="Sl. No">04.</td>
              <td data-label="Student Name">Jay Narayan</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
            <tr>
              <td data-label="Sl. No">05.</td>
              <td data-label="Student Name">Anuj Kumar Singh</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
            <tr>
              <td data-label="Sl. No">06.</td>
              <td data-label="Student Name">Gaurav Kumar</td>
              <td data-label="Branch">B.Tech CSE</td>
              <td data-label="Company">TCS</td>
              <td data-label="Package">5.6 lack</td>
              <td data-label="Placement Date">10 nov 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlacementRecord;
