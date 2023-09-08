
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SaveBanerDialog } from 'src/app/admin/dialog-boxes/save-banner.dialog';
import { QuoteService } from 'src/app/services/quote/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuoteComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  banner = {
    id: null,
    heading: '',
    description: '',
    imagePath: '',
  };
  @Input() options: any = '';
  @Input() selected = 'option-1';
  submitted = false; 
  option: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: QuoteService,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;
    
  ngOnInit() {
      this.getSelectedValue(this.selected);
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.required, Validators.email]}),
      'phone': new FormControl(null, {validators: [Validators.required]}),
      'name': new FormControl(null, {validators: [Validators.required, this.nameValidator()]}),
      'message': new FormControl(null, {validators: [Validators.required]})
    });

  }
  onSelectionChange(event: any) {
    this.selected = event.value;
    this.getSelectedValue(this.selected);
  }
  getSelectedValue(value: string){
    this.option =  this.options.find((item: { value: string; }) => item.value === value);
  }

  onSubmit() {
    if (this.form?.invalid) {
      return;
    }

      const banner = {
        name: this.form.get('name').value,
        email: this.form.get('email').value,
        phone: this.form.get('phone').value,
        message: this.form.get('message').value,
        selection: this.option.viewValue 
      };
      this.subscription = this.bannerService.postQuote(banner).subscribe({
        next: (response) => {
          console.log('Blog data posted:', response);
          this.submitted = true;
        },
        error: (error) => {
          console.error('Error posting blog data:', error);
        },
      });
    
  }

  nameValidator(): (control: FormControl) => ValidationErrors | null {
    const nameRegex = /^[a-zA-Z\s\-]+$/; 
    return (control: FormControl): ValidationErrors | null => {
      const valid = nameRegex.test(control.value);
      return valid ? null : { invalidName: true };
    };
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  resetForm() {
    this.submitted = false; 
    this.form.reset(); 
  }
}

