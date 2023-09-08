import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { ClientService } from 'src/app/services/client/client.service';

export interface PeriodicElement {
  heading: string;
  imagePath: string;
}

@Component({
  selector: 'app-show-client-logo',
  templateUrl: './show-client-logo.component.html',
  styleUrls: ['./show-client-logo.component.css']
})
export class ShowClientLogoComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['serial','imagePath',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private blogService: ClientService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
    
  }

  updateData() {

    this.subscription = this.blogService.getClients().subscribe({
      next: (data) => {
        console.log(data)
        this.imgCollection = data.clients;
        this.dataSource = this.imgCollection; 
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }

  onDelete(bannerID: string) {
    // if (!confirm("Delete Banner?")) return ;
      this.blogService.deleteClient(bannerID).subscribe({
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

