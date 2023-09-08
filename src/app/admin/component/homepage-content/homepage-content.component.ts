import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { ContantService } from 'src/app/services/contants/contants.service';

export interface PeriodicElement {
  heading: string;
  contant: string;
  text1: string;
  text2: string;
  imagePath: string;
}
@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['serial','heading', 'contant','text1','text2','imagePath',    'edit'];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private blogService: ContantService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
    
  }

  updateData() {

    this.subscription = this.blogService.getContants().subscribe({
      next: (data) => {
        console.log(data)
        this.imgCollection = data.contants;
        this.dataSource = this.imgCollection; 

      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

