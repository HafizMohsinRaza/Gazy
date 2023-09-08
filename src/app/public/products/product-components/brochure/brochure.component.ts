import { Component } from '@angular/core';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css']
})
export class BrochureComponent {
  downloadPDF() {
    const pdfFilePath = 'assets/pdfs/Product Brochure.pdf'; // Replace with the actual path to your PDF file

    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'Product Brochure.pdf'; // Set the desired file name
    link.click();
  }
}
