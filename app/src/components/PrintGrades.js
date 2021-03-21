import React from "react";
import jsPDF from "jspdf";

const PrintGrades = (props) => {

  const {student} = props;
  const jsPDFGenerate = () => {
   


    var doc = new jsPDF("p", "pt");

    const text = `Informacije o studentu:
    \n\nIme: ${student.name}
    \nPrezime: ${student.surname}
    \nJMBG: ${student.id}
    \nE-mail: ${student.email}
    \nBroj telefona: ${student.phone}
    \nSemestar: ${student.semester}`

    doc.text(30, 30, text);

    doc.save("generated.pdf");
  };

  return <button onClick={jsPDFGenerate}>Printaj Prosjek</button>;
};

export default PrintGrades;
