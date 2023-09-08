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

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  public mode = 'create-blog';
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    heading: '',
    description: '',
    imagePath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: BlogService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
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

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-blog';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            description: this.banner.description,
            heading: this.banner.heading,
            image: this.banner.imagePath,
          });
        }
      } else {
        this.mode = 'create-blog';
        this.bannerId = null;
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getBlogs().toPromise();
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

    if (this.mode === 'create-blog') {
      const bannerData = new FormData();
      bannerData.append('heading', this.form.get('heading').value);
      bannerData.append('description', this.form.get('description').value);
      bannerData.append(
        'image',
        this.form.get('image').value,
        this.form.get('heading').value
      );
      this.subscription = this.bannerService.postBlog(bannerData).subscribe({
        next: (response) => {
          console.log('Blog data posted:', response);
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Blog has been Saved!',
              route: '/admin/dashboard/blogs',
            },
          });
        },
        error: (error) => {
          console.error('Error posting blog data:', error);
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Unable to save Blog',
              route: '/admin/dashboard/blogs',
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
                    message: 'Blog has been Updated!',
                    route: '/admin/dashboard/blogs',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting blog data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Uable to update Blog',
                    route: '/admin/dashboard/blogs',
                  },
                });
              },
            });
        } else {
          console.log('IM under the water');
          bannerData2 = {
            _id: this.bannerId,
            heading: this.form.get('heading').value,
            description: this.form.get('description').value,
            image: this.form.get('image').value,
          };
          this.subscription = this.bannerService
            .updateBlog(this.bannerId, bannerData2)
            .subscribe({
              next: (response) => {
                console.log('Blog data posted:', response);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Blog has been Update!',
                    route: '/admin/dashboard/blogs',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting blog data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Unable to update Blog',
                    route: '/admin/dashboard/blogs',
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
