import { Component } from '@angular/core';

@Component({
  selector: 'app-moreblogs',
  templateUrl: './moreblogs.component.html',
  styleUrls: ['./moreblogs.component.css'],
})
export class MoreblogsComponent {
  blogs = [
    {
      title: 'Reasons to prioritize hydrogen for power plant usage.',
      image: 'assets/images/b1.jpg',
    },
    {
      title:
        'For breakthrough results}, use the Gaztron’s Oxygen Plant for your brazing process.',
      image: 'assets/images/b2.jpg',
    },
    {
      title:
        'The application of Gaztron’s Oxygen Generator in the paper and pulp industry.',
      image: 'assets/images/b3.jpg',
    },
    {
      title: 'The utilization of Gaztron’s Nitrogen Generator in HVAC systems.',
      image: 'assets/images/b4.jpg',
    },
    {
      title: 'The significance of hydrogen in heat treatment furnaces.',
      image: 'assets/images/b5.jpg',
    },
    {
      title:
        'The cost-effectiveness of hydrogen generators facilitates business growth.',
      image: 'assets/images/b6.jpg',
    },
    {
      title:
        'The function of oxygen in water and wastewater treatment processes.',
      image: 'assets/images/b7.jpg',
    },
    {
      title:
        'The widespread application of nitrogen for ensuring safety in coal mining operations.',
      image: 'assets/images/b8.jpg',
    },
    {
      title: 'The utilization of pure oxygen in fish farming operations.',
      image: 'assets/images/b9.jpg',
    },
    {
      title: 'Want Know How PSA Nitrogen Generators Work?',
      image: 'assets/images/b10.jpg',
    },
    {
      title: 'The secure utilization of nitrogen for autoclave machines.',
      image: 'assets/images/b11.jpg',
    },
    {
      title:
        'The essentiality of nitrogen for controlling oxygen levels in hospital incubators.',
      image: 'assets/images/b12.jpg',
    },
    {
      title:
        'Features of a Hydrogen Plant That Produces Hydrogen for Edible Oils',
      image: 'assets/images/b13.jpg',
    },
    {
      title: 'Gaztron’s PSA Oxygen Gas Generation Plant : A Concise Brief ',
      image: 'assets/images/b14.jpg',
    },
    {
      title:
        'Advantages of employing nitrogen for burst testing in HVAC systems',
      image: 'assets/images/b15.jpg',
    },
    {
      title: 'The significance of nitrogen in aircraft maintenance',
      image: 'assets/images/b16.jpg',
    },
    {
      title:
        'The function of nitrogen in enhancing automotive quality and performance',
      image: 'assets/images/b17.jpg',
    },
    {
      title:
        'Advantages of utilizing nitrogen for brazing and annealing processes',
      image: 'assets/images/b18.jpg',
    },
    {
      title:
        'A concise summary of nitrogen’s application in the hardening process.',
      image: 'assets/images/b19.jpg',
    },
    {
      title: 'Utilizing a nitrogen generator for fire protection purposes.',
      image: 'assets/images/b20.jpg',
    },
    {
      title:
        'Evaluate the optimal oxygen generator price while considering the quality factor.',
      image: 'assets/images/b21.jpg',
    },
    {
      title: 'Advantageous characteristics of an oxygen generation plant',
      image: 'assets/images/b22.jpg',
    },
    {
      title: 'Utilization of a nitrogen generator for tire inflation purposes.',
      image: 'assets/images/b23.jpg',
    },
    {
      title:
        'Employing a nitrogen generator for chemical reaction applications.',
      image: 'assets/images/b24.jpg',
    },
    {
      title: 'The significance of hydrogen in chemical reactions.',
      image: 'assets/images/b25.jpg',
    },
  ];

  constructor() {
    this.getRandomImages();
    console.log(this.blogs);
  }
  getRandomImages():{}[]{
    let randomImages = this.blogs;
    randomImages = this.blogs
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
    return randomImages;
  }
  helpme(title:string, image:string){
    this.getRandomImages();
  }
}
