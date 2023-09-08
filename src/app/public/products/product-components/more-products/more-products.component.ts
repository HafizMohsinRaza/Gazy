import { Component } from '@angular/core';

@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent {
  projects = [
    {
      images: 'assets/images/project2.jpg',
      title: 'PSA based Industrial oxygen gas generation plant',
    },
    {
      images: 'assets/images/project1.png',
      title: 'PSA NITROGEN (N2) GAS GENERATOR (MS MODEL)',
    },

    {
      images: 'assets/images/project19.jpg',
      title:
        'PSA NITROGEN (N2) GAS GENERATOR (CUDX MODEL)',
    },
  ];
}
