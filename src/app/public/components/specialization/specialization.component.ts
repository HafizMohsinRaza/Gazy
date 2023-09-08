import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent {
  @Input() mainImage: string = '';
  @Input() mainTitle: string = '';
  @Input() mainDescription: string = '';
  // @Input() mainContent: any = [];
  @Input() products: any = [];
  // products = [
  //   {
  //     image: 'assets/images/nitrogen.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Nitrogen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/oxygen.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Oxygen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/ammonia.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Hydrogen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/ammonia.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Hydrogen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/ammonia.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Hydrogen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/ammonia.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Hydrogen Generator Plant',
  //   },
  //   {
  //     image: 'assets/images/ammonia.png',
  //     description: 'Delivering dependable and secure on-site oxygen generation solutions for the healthcare industries.',
  //     title: 'PSA Hydrogen Generator Plant',
  //   }
  // ]
}
