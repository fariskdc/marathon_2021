import React, { useState, PureComponent } from 'react';
import jsPDF from 'jspdf'; 


const PrintGrades = () => {

    const jsPDFGenerate = () => {

        

        var doc = new jsPDF ('p' , 'pt');
    
        doc.text(30,30, 'text');
        
        doc.save ('generated.pdf');
    
    }

    return (

        <button onClick = {jsPDFGenerate}>
            Printaj Prosjek
        </button>

    )

}

export default PrintGrades;