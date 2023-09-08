import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { response } from 'express';
import { Subscription } from 'rxjs';
import { BannerService } from 'src/app/services/banners/banners.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;
  imgCollection: any[] = [];
  banner: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private seoSerice: SeoService,
    private bannerService: BannerService,
    public route: ActivatedRoute
  ) {}
  subscription: Subscription | undefined;
    // public mode = 'home-banner';
    // private bannerId: string | null | undefined = "";

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl(null, { validators: [Validators.required] }),
      heading: new FormControl(null, { validators: [Validators.required] }),
      url: new FormControl(null, { validators: [Validators.required] }),
    });
    this.seoSerice.updateTitle("Home Baner")

    this.updateData();
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if(paramMap.has('bannerId')){
    //     this.mode = 'edit';
    //     this.bannerId = paramMap.get('bannerId');
    //     if(this.bannerId){
    //       this.banner = this.getOneBanner(this.bannerId);
    //     }
    //   }
    //   else{
    //     this.mode = 'home-banner';
    //     this.bannerId = null;
    //   }
    // });
  }
  updateData() {
    this.bannerService.getBanners().subscribe({
      next: (data) => {
        this.imgCollection = data.banners;
      },
      error: (error) => {
        console.error('Error fetching banners:', error);
      },
    });
  }
  onSubmit(): void {
    if (this.form?.invalid) {
      return;
    }

    this.submitted = false;

    const banners = {
      id: null,
      heading: this.form.get('heading').value,
      description: this.form.get('description').value,
      url: this.form.get('url').value,
    };

    this.subscription = this.bannerService.postBanner(banners).subscribe({
      next: (response) => {
        console.log('Banner data posted:', response);
        this.updateData();
      },
      error: (error) => {
        console.error('Error posting banner data:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  // getOneBanner(id: string){
  //   return {...this.imgCollection.find(p => p.id === id)}
  // }
  onDelete(bannerID: string) {
    this.bannerService.deleteBanner(bannerID).subscribe({
      next: (response) => {
        console.log('Banner Deleted', response);
        this.updateData();
      },
      error: (error) => {
        console.error('Unable to Delete', error);
      },
    });
  }
  resetForm() {
    this.submitted = true;
    this.form.reset();
  }
}
