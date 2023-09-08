import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { TeamService } from 'src/app/services/teams/team.service';

export interface PeriodicElement {
  name: string;
  designation: string;
  facebook: string;
  twitter: string;
  instagram: string;
  imagePath: string;
}
@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.css']
})
export class ShowTeamComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = ['serial','name', 'designation', 'facebook', 'twitter', 'instagram','imagePath',     'edit',
  'delete',];
  dataSource: PeriodicElement[] = []; 
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean =  false;

  constructor(
    private blogService: TeamService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.updateData();
    
  }

  updateData() {

    this.subscription = this.blogService.getTeams().subscribe({
      next: (data) => {
        console.log(data)
        this.imgCollection = data.teams;
        this.dataSource = this.imgCollection; 
      },
      error: (error) => {
        console.error('Error fetching blogs:', error);
      },
    });
  }

  onDelete(bannerID: string) {
    // if (!confirm("Delete Banner?")) return ;
      this.blogService.deleteTeam(bannerID).subscribe({
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

