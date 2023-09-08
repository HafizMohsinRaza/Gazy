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
import { BannerService } from 'src/app/services/banners/banners.service';
import { mimeType } from '../../validator/mime-type.validator';
import { MatDialog } from '@angular/material/dialog';
import { SaveBanerDialog } from '../../dialog-boxes/save-banner.dialog';
@Component({
  selector: 'app-create-banner',
  templateUrl: './create-banner.component.html',
  styleUrls: ['./create-banner.component.css'],
})
export class CreateBannerComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  private mode = 'create-banner';
  private bannerId: string | null = '';
  imagePreview: string = '';
  logoPreview: string = '';
  banner = {
    id: null,
    heading: '',
    description: '',
    url: '',
    imagePath: '',
    logoPath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: BannerService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      description: new FormControl(null, { validators: [Validators.required] }),
      heading: new FormControl(null, { validators: [Validators.required] }),
      url: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      logo: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log('helwlo');
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-banner';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            description: this.banner.description,
            heading: this.banner.heading,
            url: this.banner.url,
            image: this.banner.imagePath,
            logo: this.banner.logoPath,
          });
        }
      } else {
        this.mode = 'create-banner';
        this.bannerId = null;
      }
    });
  }
  async fetchBanners() {
    try {
      const data = await this.bannerService.getBanners().toPromise();
      this.banners = data.banners;
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

    if (this.mode === 'create-banner') {
      const bannerData = new FormData();
      bannerData.append('heading', this.form.get('heading').value);
      bannerData.append('description', this.form.get('description').value);
      bannerData.append('url', this.form.get('url').value);
      bannerData.append(
        'image',
        this.form.get('image').value,
        this.form.get('heading').value
      );
      bannerData.append(
        'logo',
        this.form.get('logo').value,
        this.form.get('heading').value
      );
      this.subscription = this.bannerService.postBanner(bannerData).subscribe({
        next: (response) => {
          console.log('Banner data posted:', response);
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Baner has been Saved!',
              route: '/admin/dashboard/home-banner',
            },
          });
        },
        error: (error) => {
          console.error('Error posting banner data:', error);
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Unable to save the Baner',
              route: '/admin/dashboard/home-banner',
            },
          });
        },
      });
    } else {
      if (this.bannerId) {
        let bannerData2: any;

        if (
          typeof this.form.get('image').value === 'object' ||
          typeof this.form.get('logo').value === 'object'
        ) {
          console.log('1');
          bannerData2 = new FormData();
          bannerData2.append('_id', this.bannerId);
          bannerData2.append('heading', this.form.get('heading').value);
          bannerData2.append('description', this.form.get('description').value);
          bannerData2.append('url', this.form.get('url').value);

          bannerData2.append(
            'image',
            this.form.get('image').value,
            this.form.get('heading').value
          );
          bannerData2.append(
            'logo',
            this.form.get('logo').value,
            this.form.get('heading').value
          );
          this.subscription = this.bannerService
            .updateImage(this.bannerId, bannerData2)
            .subscribe({
              next: (response) => {
                console.log('Blog data posted:', response);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Baner has been updated!',
                    route: '/admin/dashboard/home-banner',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting blog data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Unable to update Baner',
                    route: '/admin/dashboard/home-banner',
                  },
                });
              },
            });
        } else {
          bannerData2 = {
            _id: this.bannerId,
            heading: this.form.get('heading').value,
            description: this.form.get('description').value,
            url: this.form.get('url').value,
            imagePath: this.form.get('image').value,
            logoPath: this.form.get('logo').value,
          };
          this.subscription = this.bannerService
            .updateBanner(this.bannerId, bannerData2)
            .subscribe({
              next: (response) => {
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Baner has been updated!',
                    route: '/admin/dashboard/home-banner',
                  },
                });
              },
              error: (error) => {
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Unable to update Baner',
                    route: '/admin/dashboard/hoome-banner',
                  },
                });
              },
            });
        }
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
  onLogoPicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files) {
      const file = inputElement.files[0];
      this.form.patchValue({ logo: file });
      this.form.get('logo').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.logoPreview = reader.result;
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
