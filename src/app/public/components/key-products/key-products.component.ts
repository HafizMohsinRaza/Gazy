import { Component } from '@angular/core';

@Component({
  selector: 'app-key-products',
  templateUrl: './key-products.component.html',
  styleUrls: ['./key-products.component.css']
})
export class KeyProductsComponent {
    products = [
      {
        image: 'assets/images/nitrogen.png',
        title: 'PSA Nitrogen Generator Plant',
      },
      {
        image: 'assets/images/oxygen.png',
        title: 'PSA Oxygen Generator Plant',
      },
      {
        image: 'assets/images/ammonia.png',
        title: 'PSA Hydrogen Generator Plant',
      }
    ]
}
