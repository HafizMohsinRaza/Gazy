import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expandedblogs',
  templateUrl: './expandedblogs.component.html',
  styleUrls: ['./expandedblogs.component.css'],
})
export class ExpandedblogsComponent {
  title!: string;
  image!: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    const navigate = this.router.getCurrentNavigation();
    const state = navigate?.extras.state as { title: string };
    this.title = state.title;
    const indexstate = navigate?.extras.state as { image: string };
    this.image = indexstate.image;
  }
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
}
