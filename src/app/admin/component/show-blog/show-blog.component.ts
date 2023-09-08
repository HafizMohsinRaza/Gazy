import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';

export interface PeriodicElement {
  heading: string;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['serial','heading', 'description','imagePath',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private blogService: BlogService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
    
  }

  updateData() {

    this.subscription = this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.imgCollection = data.blogs;
        this.dataSource = this.imgCollection; 
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }

  onDelete(bannerID: string) {
    // if (!confirm("Delete Banner?")) return ;
      this.blogService.deleteBlog(bannerID).subscribe({
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

