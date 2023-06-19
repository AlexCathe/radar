import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import * as logo from "../img/radar_icon.png"
export function PdfGenerator (){
    const handleClick = async function () {
            // Create a new PDFDocument
        const pdfDoc = await PDFDocument.create()

        // Embed the Times Roman font
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

        // Add a blank page to the document
        const page = pdfDoc.addPage()

        // Get the width and height of the page
        const { width, height } = page.getSize()
            
        //const pngImage = await pdfDoc.embedPng()
       // Draw a string of text toward the top of the page
        const fontSize = 30
        page.drawText('Incidents', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
        })

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save()
        handleDownload (pdfBytes, "test");
        // For example, `pdfBytes` can be:
        //   • Written to a file in Node
        //   • Downloaded from the browser
        //   • Rendered in an <iframe>
    }
    const handleDownload = (pdfBytes: Uint8Array, fileName: string) => {
        const file = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return <button onClick={handleClick} >Exporter en pdf</button>
}