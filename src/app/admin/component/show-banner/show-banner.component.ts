
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BannerService } from 'src/app/services/banners/banners.service';

export interface PeriodicElement {
  heading: string;
  description: string;
  url: string;
  imagePath: string;
  logoPath: string;
}

@Component({
  selector: 'app-show-banner',
  templateUrl: './show-banner.component.html',
  styleUrls: ['./show-banner.component.css'],
})
export class ShowBannerComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['heading', 'description', 'url', 'logoPath', 'imagePath',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private bannerService: BannerService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
  }

  updateData() {

    this.subscription = this.bannerService.getBanners().subscribe({
      next: (data) => {
        this.imgCollection = data.banners;
        this.dataSource = this.imgCollection; 
      },
      error: (error) => {
        console.error('Error fetching banners:', error);
      },
    });
  }

  onDelete(bannerID: string) {
    if (!confirm("Delete Banner?")) return ;
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

