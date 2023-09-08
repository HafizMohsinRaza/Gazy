import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blogs/blogs.service';
import { ContactService } from 'src/app/services/contact/contact.service';

export interface PeriodicElement {
  address1: string;
  address2: string;
  address3: string;
  number1: string;
  number2: string;
  number3: string;
  email1: string;
  email2: string;
  about: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent implements OnInit, OnDestroy {
  imgCollection: PeriodicElement[] = [];
  displayedColumns: string[] = [
    'address1',
    'address2',
    // 'address3',
    'number1',
    // 'number2',
    // 'number3',
    'email1',
    // 'email2',
    // 'about',
    // 'facebook',
    // 'instagram',
    // 'twitter',
    // 'linkedin',
    'edit',
    // 'delete',
  ];
  dataSource: PeriodicElement[] = [];
  clickedRows = new Set<PeriodicElement>();
  private subscription: Subscription | undefined;
  confirmDelete: boolean = false;

  constructor(private blogService: ContactService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.subscription = this.blogService.getContact().subscribe({
      next: (data) => {
        console.log(data);
        this.imgCollection = data.contact;
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
