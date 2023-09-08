import { Component } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-ourblogs',
  templateUrl: './ourblogs.component.html',
  styleUrls: ['./ourblogs.component.css'],
})
export class OurblogsComponent {
  first: number = 0;
  rows: number = 9;
  images!: number;
  startIndex: number = 0;
  endIndex: number = 9;

  title:string [] = [
    'Reasons to prioritize hydrogen for power plant usage.',
    'For breakthrough results, use the Gaztron’s Oxygen Plant for your brazing process.',
    'The application of Gaztron’s Oxygen Generator in the paper and pulp industry.',
    'The utilization of Gaztron’s Nitrogen Generator in HVAC systems.',
    'The significance of hydrogen in heat treatment furnaces.',
    'The cost-effectiveness of hydrogen generators facilitates business growth.',
    'The function of oxygen in water and wastewater treatment processes.',
    'The widespread application of nitrogen for ensuring safety in coal mining operations.',
    'The utilization of pure oxygen in fish farming operations.',
    'Want Know How PSA Nitrogen Generators Work?',
    'The secure utilization of nitrogen for autoclave machines.',
    'The essentiality of nitrogen for controlling oxygen levels in hospital incubators.',
    'Features of a Hydrogen Plant That Produces Hydrogen for Edible Oils',
    'Gaztron’s PSA Oxygen Gas Generation Plant : A Concise Brief ',
    'Advantages of employing nitrogen for burst testing in HVAC systems',
    'The significance of nitrogen in aircraft maintenance',
    'The function of nitrogen in enhancing automotive quality and performance',
    'Advantages of utilizing nitrogen for brazing and annealing processes',
    'A concise summary of nitrogen’s application in the hardening process.',
    'Utilizing a nitrogen generator for fire protection purposes.',
    'Evaluate the optimal oxygen generator price while considering the quality factor.',
    'Advantageous characteristics of an oxygen generation plant',
    'Utilization of a nitrogen generator for tire inflation purposes.',
    'Employing a nitrogen generator for chemical reaction applications.',
    'The significance of hydrogen in chemical reactions.',
  ]
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.startIndex = this.first;
    this.endIndex = this.startIndex + event.rows;
  }
  getImageIndexes(): {index:number,title:string}[] {
    const imageIndexes: { index: number; title: string }[] = [];
    for (let i = this.startIndex; i < this.endIndex; i++) {
      const title = this.title[i];
      imageIndexes.push({index:i+1,title:title});
    }

    return imageIndexes;
  }
  getImages(): {image:string,title:string}[] {
    const imageIndexes: { image: string; title: string }[] = [];
    for (let i = this.startIndex; i < this.endIndex; i++) {
      const title = this.title[i];
      imageIndexes.push({image:'assets/images/b'+(i+1)+'.jpg',title:title});
    }
    
    return imageIndexes;
  }
  constructor(private router: Router) {}

  onExpanded(title:string,image:string): void {
    const navigationExtras: NavigationExtras = {
      state: {
        title: title,
        image:image
      }
    }
    this.router.navigate(['/expandedblogs'],navigationExtras);
    console.log('title is ',title);
  }
  
}
