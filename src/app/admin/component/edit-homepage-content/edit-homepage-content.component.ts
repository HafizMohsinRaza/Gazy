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
import { mimeType } from '../../validator/mime-type.validator';
import { MatDialog } from '@angular/material/dialog';
import { SaveBanerDialog } from '../../dialog-boxes/save-banner.dialog';
import { ContantService } from 'src/app/services/contants/contants.service';

@Component({
  selector: 'app-edit-homepage-content',
  templateUrl: './edit-homepage-content.component.html',
  styleUrls: ['./edit-homepage-content.component.css'],
})
export class EditHomepageContentComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    heading: '',
    contant: '',
    text1: '',
    text2: '',
    imagePath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private contantService: ContantService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      heading: new FormControl(null, { validators: [Validators.required] }),
      contant: new FormControl(null, { validators: [Validators.required] }),
      text1: new FormControl(null, { validators: [Validators.required] }),
      text2: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);
          this.form.setValue({
            heading: this.banner.heading,
            contant: this.banner.contant,
            text1: this.banner.text1,
            text2: this.banner.text2,
            image: this.banner.imagePath,
          });
        }
      } else {
        this.dialog.open(SaveBanerDialog, {
          data: {
            message: 'Unable to Load Data',
            route: '/admin/dashboard/homepage',
          },
        });
        this.bannerId = null;
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.contantService.getContants().toPromise();
      this.banners = data.contants;
    } catch (error) {
      console.error('Error fetching data:', error);
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
      let bannerData2: any;

      if (typeof this.form.get('image').value === 'object') {
        bannerData2 = new FormData();
        bannerData2.append('_id', this.bannerId);
        bannerData2.append('heading', this.form.get('heading').value);
        bannerData2.append('contant', this.form.get('contant').value);
        bannerData2.append('text1', this.form.get('text1').value);
        bannerData2.append('text2', this.form.get('text2').value);
        bannerData2.append(
          'image',
          this.form.get('image').value,
          this.form.get('heading').value
        );
        this.subscription = this.contantService
          .updateImage(this.bannerId, bannerData2)
          .subscribe({
            next: (response) => {
              console.log('Blog data posted:', response);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Contant has been Updated!',
                  route: '/admin/dashboard/homepage',
                },
              });
            },
            error: (error) => {
              console.error('Error posting blog data:', error);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Unable to update Contant',
                  route: '/admin/dashboard/homepage',
                },
              });
            },
          });
      } else {
        bannerData2 = {
          _id: this.bannerId,
          heading: this.form.get('heading').value,
          contant: this.form.get('contant').value,
          text1: this.form.get('text1').value,
          text2: this.form.get('text2').value,
          image: this.form.get('image').value,
        };
        this.subscription = this.contantService
          .updateContant(this.bannerId, bannerData2)
          .subscribe({
            next: (response) => {
              console.log('Blog data posted:', response);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Contant has been Updated!',
                  route: '/admin/dashboard/homepage',
                },
              });
            },
            error: (error) => {
              console.error('Error posting data:', error);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Unable to update Contant',
                  route: '/admin/dashboard/homepage',
                },
              });
            },
          });
      }
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
