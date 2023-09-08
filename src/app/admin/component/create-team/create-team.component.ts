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
import { TeamService } from 'src/app/services/teams/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css'],
})
export class CreateTeamComponent implements OnInit {
  form: FormGroup | any;
  banners: any[] = [];
  public mode = 'create-team';
  private bannerId: string | null = '';
  imagePreview: string = '';
  banner = {
    id: null,
    name: '',
    designation: '',
    facebook: '',
    instagram: '',
    twitter: '',
    imagePath: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private bannerService: TeamService,
    public activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router
  ) {}
  subscription: Subscription | undefined;

  async ngOnInit() {
    await this.fetchBanners();

    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      designation: new FormControl(''),
      facebook: new FormControl(null, { validators: [Validators.required] }),
      instagram: new FormControl(null, { validators: [Validators.required] }),
      twitter: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });

    this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('bannerId')) {
        this.mode = 'edit-team';
        this.bannerId = paramMap.get('bannerId');
        if (this.bannerId) {
          this.banner = this.getBanner(this.bannerId);

          this.form.setValue({
            name: this.banner.name,
            designation: this.banner.designation,
            facebook: this.banner.facebook,
            instagram: this.banner.instagram,
            twitter: this.banner.twitter,
            image: this.banner.imagePath,
          });
        }
      } else {
        this.mode = 'create-team';
        this.bannerId = null;
      }
    });
  }

  async fetchBanners() {
    try {
      const data = await this.bannerService.getTeams().toPromise();
      this.banners = data.teams;
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
    console.log('IM under the water');

    if (this.mode === 'create-team') {
      const bannerData = new FormData();
      bannerData.append('name', this.form.get('name').value);
      bannerData.append('designation', this.form.get('designation').value);
      bannerData.append('facebook', this.form.get('facebook').value);
      bannerData.append('instagram', this.form.get('instagram').value);
      bannerData.append('twitter', this.form.get('twitter').value);
      bannerData.append(
        'image',
        this.form.get('image').value,
        this.form.get('name').value
      );
      this.subscription = this.bannerService.postTeam(bannerData).subscribe({
        next: (response) => {
          console.log('Team data posted:', response);
          this.dialog.open(SaveBanerDialog, { data: {
            message: 'Team has been Saved!',
            route: '/admin/dashboard/team',
          }, });
        },
        error: (error) => {
          console.error('Error posting Team data:', error);
          this.dialog.open(SaveBanerDialog, {
            data: {
              message: 'Unable to save Team',
              route: '/admin/dashboard/team',
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
          bannerData2.append('name', this.form.get('name').value);
          bannerData2.append('designation', this.form.get('designation').value);
          bannerData2.append('facebook', this.form.get('facebook').value);
          bannerData2.append('instagram', this.form.get('instagram').value);
          bannerData2.append('twitter', this.form.get('twitter').value);
          bannerData2.append(
            'image',
            this.form.get('image').value,
            this.form.get('name').value
          );
          this.subscription = this.bannerService
            .updateImage(this.bannerId, bannerData2)
            .subscribe({
              next: (response) => {
                console.log('Blog data posted:', response);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Team has been Updated!',
                    route: '/admin/dashboard/team',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting blog data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'Unable to update Team',
                    route: '/admin/dashboard/team',
                  },
                });
              },
            });
        } else {
          bannerData2 = {
            _id: this.bannerId,
            name: this.form.get('name').value,
            designation: this.form.get('designation').value,
            facebook: this.form.get('facebook').value,
            instagram: this.form.get('instagram').value,
            twitter: this.form.get('twitter').value,
            image: this.form.get('image').value,
          };
          this.subscription = this.bannerService
            .updateTeam(this.bannerId, bannerData2)
            .subscribe({
              next: (response) => {
                console.log('Team data posted:', response);
                this.dialog.open(SaveBanerDialog, {
                  data:{
                    message: 'Team has been Updated!',
                    route: '/admin/dashboard/team',
                  },
                });
              },
              error: (error) => {
                console.error('Error posting Team data:', error);
                this.dialog.open(SaveBanerDialog, {
                  data: {
                    message: 'unable to update Team',
                    route: '/admin/dashboard/team',
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
