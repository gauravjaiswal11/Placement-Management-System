import React, { useRef } from 'react';
import DownloadRecordCSS from './Company.module.css'; // Importing the CSS file
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function DownloadRecord() {
  const tableRef = useRef(null);

  // Function to initiate download
  const downloadPlacementRecord = () => {
    try {
      const table = tableRef.current;

      // Use html2canvas to capture the table as an image
      html2canvas(table).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        // Calculate the aspect ratio to adjust the width and height of the image
        const imgWidth = 190; // max width for A4 size paper
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const doc = new jsPDF('p', 'mm', 'a4');
        doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        doc.save('placement_record.pdf');
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className={DownloadRecordCSS.container}> {/* Using the correct class name */}
      <h1 className={DownloadRecordCSS.heading}>Placement Record</h1>
      <table className={DownloadRecordCSS.table} ref={tableRef}>
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
            <td data-label='Company'>01.</td>
            <td data-label='Company'>Shivam Kumar Singh</td>
            <td data-label='Company'>B.Tech CSE</td>
            <td data-label='Company'>TCS</td>
            <td data-label='Company'>5.6 lack</td>
            <td data-label='company'>10 nov 2025</td>
          </tr>
          {/* Add more table rows as needed */}
        </tbody>
      </table>
      <button onClick={downloadPlacementRecord}>Download Placement Record</button>
    </div>
    
  );
}

export default DownloadRecord;
