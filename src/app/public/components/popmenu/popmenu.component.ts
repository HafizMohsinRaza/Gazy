import { Component, Inject, Input, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CenteredContainerService } from 'src/app/centered-container-service.service';

@Component({
  selector: 'app-popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopmenuComponent implements OnInit{
  constructor( private centeredContainerService: CenteredContainerService){}
  form: FormGroup | any;
  showPopup: boolean = false;
  positionTitle: string = '';

  ngOnInit() {

    this.centeredContainerService.showContainerPopup$.subscribe(({ show, positionTitle }) => {
      this.positionTitle = positionTitle;
      this.showPopup = show;
    });

    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.required, Validators.email]}),
      'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(10)]}),
      'name': new FormControl(null, {validators: [Validators.required, this.nameValidator()]}),
      'message': new FormControl(null, {validators: [Validators.required]})
    });
  }

  onSubmit(){
    if(this.form?.invalid){
      return
    }
    this.form?.reset();
  }

  //Validators
  nameValidator(): (control: FormControl) => ValidationErrors | null {
    const nameRegex = /^[a-zA-Z\s\-]+$/; // Matches letters, spaces, and hyphens
    return (control: FormControl): ValidationErrors | null => {
      const valid = nameRegex.test(control.value);
      return valid ? null : { invalidName: true };
    };
  }


   //For PDF
   @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  openFilePicker() {
    this.fileInputRef.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      if (selectedFile.type === 'application/pdf') {
        // Handle the selected PDF file here
        console.log('Selected file:', selectedFile.name);
      } else {
        console.log('Please select a PDF file.');
      }
    }
  }

  hideContainer() {
    this.centeredContainerService.hideContainerPopup();
  }
}
