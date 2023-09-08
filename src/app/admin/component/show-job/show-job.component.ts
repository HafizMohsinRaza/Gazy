import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { JobService } from 'src/app/services/job/job.service';

export interface PeriodicElement {
  heading: string;
  description: string;
}

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css']
})
export class ShowJobComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['serial','heading', 'description',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private blogService: JobService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
    
  }

  updateData() {

    this.subscription = this.blogService.getJobs().subscribe({
      next: (data) => {
        console.log(data)
        this.imgCollection = data.jobs;
        this.dataSource = this.imgCollection; 
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }

  formatDescription(description: string): string {
    return description.replace(/\n/g, '<br>');
  }
  onDelete(bannerID: string) {
    // if (!confirm("Delete Banner?")) return ;
      this.blogService.deleteJob(bannerID).subscribe({
        next: (response) => {
          console.log('Blog Deleted', response);
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

