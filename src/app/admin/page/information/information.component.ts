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
import { JobService } from 'src/app/services/job/job.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { HomepageSeoService } from 'src/app/services/homepage-seo/homepage-seo.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  private bannerId: string | null = '';
  imagePreview: string = '';
  imageShow: string = '';
  banner = {
    id: null,
    heading: '',
    description: '',
    keyword: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: HomepageSeoService,
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
      keyword: new FormControl(null, { validators: [Validators.required] }),
    });

    if (this.bannerId) {
      this.banner = this.getBanner(this.bannerId);
      this.form.setValue({
        description: this.banner.description,
        heading: this.banner.heading,
        keyword: this.banner.keyword,
      });
    }

    this.seoService.updateTitle("SEO");

  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getSeos().toPromise();
      this.banners = data.seo;
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

      bannerData2 = {
        _id: this.bannerId,
        heading: this.form.get('heading').value,
        description: this.form.get('description').value,
        keyword: this.form.get('keyword').value,
      };
      this.subscription = this.bannerService
        .updateSeo(this.bannerId, bannerData2)
        .subscribe({
          next: (response) => {
            console.log('Blog data posted:', response);
            this.dialog.open(SaveBanerDialog, {
              data: {
                message: 'Data has been Updated!',
                route: '/admin/dashboard/information',
              },
            });
          },
          error: (error) => {
            console.error('Error posting blog data:', error);
            this.dialog.open(SaveBanerDialog, {
              data: {
                message: 'Unable to update Data',
                route: '/admin/dashboard/information',
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
