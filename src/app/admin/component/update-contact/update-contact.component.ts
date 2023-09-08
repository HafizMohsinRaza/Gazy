import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SaveBanerDialog } from '../../dialog-boxes/save-banner.dialog';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css'],
})
export class UpdateContactComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  public mode = 'create-blog';
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    address1: '',
    address2: '',
    address3: '',
    number1: '',
    number2: '',
    number3: '',
    email1: '',
    email2: '',
    about: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: ContactService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      address1: new FormControl(null, { validators: [Validators.required] }),
      address2: new FormControl(null, { validators: [Validators.required] }),
      address3: new FormControl(null, { validators: [Validators.required] }),
      number1: new FormControl(null, { validators: [Validators.required] }),
      number2: new FormControl(null, { validators: [Validators.required] }),
      number3: new FormControl(null, { validators: [Validators.required] }),
      email1: new FormControl(null, { validators: [Validators.required] }),
      email2: new FormControl(null, { validators: [Validators.required] }),
      about: new FormControl(null, { validators: [Validators.required] }),
      facebook: new FormControl(null, { validators: [Validators.required] }),
      instagram: new FormControl(null, { validators: [Validators.required] }),
      twitter: new FormControl(null, { validators: [Validators.required] }),
      linkedin: new FormControl(null, { validators: [Validators.required] }),
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-blog';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            address1: this.banner.address1,
            address2: this.banner.address2,
            address3: this.banner.address3,
            number1: this.banner.number1,
            number2: this.banner.number2,
            number3: this.banner.number3,
            email1: this.banner.email1,
            email2: this.banner.email2,
            about: this.banner.about,
            facebook: this.banner.facebook,
            instagram: this.banner.instagram,
            twitter: this.banner.twitter,
            linkedin: this.banner.linkedin,
          });
        }
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getContact().toPromise();
      this.banners = data.contact;
    } catch (error) {
      console.error('Error fetching banners:', error);
    }
  }
  getBanner(id: string) {
    return this.banners.find((item) => item._id === id);
  }

  onSubmit() {
    if (this.form?.invalid) {
      return;
    }

    if (this.bannerId) {

      this.banner = {
        id: null,
        address1: this.form.get('address1').value,
        address2: this.form.get('address2').value,
        address3: this.form.get('address3').value,
        number1: this.form.get('number1').value,
        number2: this.form.get('number2').value,
        number3: this.form.get('number3').value,
        email1: this.form.get('email1').value,
        email2: this.form.get('email2').value,
        about: this.form.get('about').value,
        facebook: this.form.get('facebook').value,
        instagram: this.form.get('instagram').value,
        twitter: this.form.get('twitter').value,
        linkedin: this.form.get('linkedin').value,
      }
      this.subscription = this.bannerService
        .updateContact(this.bannerId, this.banner)
        .subscribe({
          next: (response) => {
            console.log('Contact data posted:', response);
            this.dialog.open(SaveBanerDialog, {
              data: {
                message: 'Contact has been Updated!',
                route: '/admin/dashboard/contact',
              },
            });
          },
          error: (error) => {
            console.error('Error posting contact data:', error);
            this.dialog.open(SaveBanerDialog, {
              data: {
                message: 'Unable to update Contact',
                route: '/admin/dashboard/contact',
              },
            });
          },
        });
    }
  }
  onImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files) {
      const file = inputElement.files[0];
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.imagePreview = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
