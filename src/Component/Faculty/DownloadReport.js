import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PlacementRecord from "./PlacementRecord";

function DownloadReport() {
  const PlacementRecordRef = useRef(null);

  const handleGeneratePdf = async () => {
    const input = PlacementRecordRef.current;

    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "potrait",
        unit: "px",
        format: "a4"
      });

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("document.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  }; 

  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div ref={PlacementRecordRef}>
        <PlacementRecord />
      </div>
    </div>
  );
}

export default DownloadReport;
