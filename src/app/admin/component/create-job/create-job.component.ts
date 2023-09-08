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
@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css'],
})
export class CreateJobComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  public mode = 'create-job';
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    heading: '',
    description: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: JobService,
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
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-job';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            description: this.banner.description,
            heading: this.banner.heading,
          });
        }
      } else {
        this.mode = 'create-job';
        this.bannerId = null;
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getJobs().toPromise();
      this.banners = data.jobs;
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

    if (this.mode === 'create-job') {
      const jobdata = {
        heading: this.form.get('heading').value,
        description: this.form.get('description').value,
      };

      this.subscription = this.bannerService.postJob(jobdata).subscribe({
        next: (response) => {
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Job has been Saved!',
              route: '/admin/dashboard/job',
            },
          });
        },
        error: (error) => {
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Unable to save Job!',
              route: '/admin/dashboard/job',
            },
          });
        },
      });
    } else {
      if (this.bannerId) {
        const jobdata = {
          _id: this.bannerId,
          heading: this.form.get('heading').value,
          description: this.form.get('description').value,
        };
        this.subscription = this.bannerService
          .updateJob(this.bannerId, jobdata)
          .subscribe({
            next: (response) => {
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Job has been Updated!',
                  route: '/admin/dashboard/job',
                },
              });
            },
            error: (error) => {
              this.dialog.open(SaveBanerDialog, {
                data: {
                  message: 'Unable to update Job',
                  route: '/admin/dashboard/job',
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
