import React from "react";
import jsPDF from "jspdf";

const PrintGrades = () => {
  const jsPDFGenerate = () => {
    const student = {
      name: "Emsar",
      surname: "Omic",
      jmbg: "1709000180087",
      prosjek: "8.2",
      number: "387644402963",
    };

    var doc = new jsPDF("p", "pt");

    doc.text(30, 30, student.name);

    doc.save("generated.pdf");
  };

  return <button onClick={jsPDFGenerate}>Printaj Prosjek</button>;
};

export default PrintGrades;
