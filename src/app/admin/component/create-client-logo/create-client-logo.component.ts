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
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-create-client-logo',
  templateUrl: './create-client-logo.component.html',
  styleUrls: ['./create-client-logo.component.css'],
})
export class CreateClientLogoComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  public mode = 'create-client';
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    heading: '',
    imagePath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: ClientService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      heading: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-client';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            heading: this.banner.heading,
            image: this.banner.imagePath,
          });
        }
      } else {
        this.mode = 'create-client';
        this.bannerId = null;
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getClients().toPromise();
      this.banners = data.blogs;
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

    if (this.mode === 'create-client') {
      const bannerData = new FormData();
      bannerData.append('heading', this.form.get('heading').value);
      bannerData.append(
        'image',
        this.form.get('image').value,
        this.form.get('heading').value
      );
      this.subscription = this.bannerService.postClient(bannerData).subscribe({
        next: (response) => {
          this.dialog.open(SaveBanerDialog, { data: {
            message: 'Client has been Saved!',
            route: '/admin/dashboard/client-logo',
          }, });
        },
        error: (error) => {
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Unable to save Client',
              route: '/admin/dashboard/client-logo',
            },
          });
        },
      });
    } else {
      if (this.bannerId) {
        let bannerData2: any;

        if (typeof this.form.get('image').value === 'object') {
          bannerData2 = new FormData();
          bannerData2.append('_id', this.bannerId);
          bannerData2.append('heading', this.form.get('heading').value);
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
                    message: 'Client has been Updated!',
                    route: '/admin/dashboard/client-logo',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting blog data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Unable to update Client',
                    route: '/admin/dashboard/client-logo',
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
