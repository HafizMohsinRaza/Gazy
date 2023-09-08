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
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { AboutUsService } from 'src/app/services/about-us/about-us.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  private bannerId: string | null = '';
  imagePreview: string = '';
  imageShow: string = '';
  banner = {
    id: null,
    heading: '',
    description: '',
    imagePath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: AboutUsService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
    private seoService: SeoService

  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      heading: new FormControl(null, { validators: [Validators.required] }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });


        this.seoService.updateTitle("About Us");

    if (this.bannerId) {
      this.banner = this.getBanner(this.bannerId);
      this.imageShow = this.banner.imagePath;
      this.form.setValue({
        description: this.banner.description,
        heading: this.banner.heading,
        image: this.banner.imagePath,
      });
    }
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getAbout().toPromise();
      this.banners = data.about;
      this.bannerId = this.banners[0]._id;
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
      let bannerData2: any;

      if (typeof this.form.get('image').value === 'object') {
        bannerData2 = new FormData();
        bannerData2.append('_id', this.bannerId);
        bannerData2.append('heading', this.form.get('heading').value);
        bannerData2.append('description', this.form.get('description').value);
        bannerData2.append(
          'image',
          this.form.get('image').value,
          this.form.get('heading').value
        );
        this.subscription = this.bannerService
          .updateImage(this.bannerId, bannerData2)
          .subscribe({
            next: (response) => {
              console.log('Blog data posted:', response);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Data has been Updated!',
                  route: '/admin/dashboard/about-us',
                },
              });
            },
            error: (error) => {
              console.error('Error posting blog data:', error);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Unable to update Data',
                  route: '/admin/dashboard/about-us',
                },
              });
            },
          });
      } else {
        bannerData2 = {
          _id: this.bannerId,
          heading: this.form.get('heading').value,
          description: this.form.get('description').value,
          image: this.form.get('image').value,
        };
        this.subscription = this.bannerService
          .updateAbout(this.bannerId, bannerData2)
          .subscribe({
            next: (response) => {
              console.log('Blog data posted:', response);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Data has been Updated!',
                  route: '/admin/dashboard/about-us',
                },
              });
            },
            error: (error) => {
              console.error('Error posting blog data:', error);
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Unable to update Data',
                  route: '/admin/dashboard/about-us',
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
          this.imageShow = this.imagePreview;
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
