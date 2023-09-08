import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public/pages/about/about.component';
import { CareerComponent } from './public/pages/career/career.component';
import { HomeComponent } from './public/pages/home/home.component';
import { QuoteComponent } from './public/components/quote/quote.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { CertificationComponent } from './public/components/certification/certification.component';
import { OurprojectComponent } from './public/ourproject/ourproject.component';
import { BlogsComponent } from './public/blogs/blogs.component';
import { NavNitrogenComponent } from './public/nav-items/nav-nitrogen/nav-nitrogen.component';
import { ExpandedblogsComponent } from './public/components/expandedblogs/expandedblogs.component';
import { NavOxygenComponent } from './public/nav-items/nav-oxygen/nav-oxygen.component';
import { NavHydrogenComponent } from './public/nav-items/nav-hydrogen/nav-hydrogen.component';
import { SupplypolicyComponent } from './public/pages/policy/supplypolicy/supplypolicy.component';
import { PrivacypolicyComponent } from './public/pages/policy/privacypolicy/privacypolicy.component';
import { AmmoniaPurifierComponent } from './public/products/hydrogen/ammonia-purifier/ammonia-purifier.component';
import { AmmoniaCrackerComponent } from './public/products/hydrogen/ammonia-cracker/ammonia-cracker.component';
import { PureHydrogenComponent } from './public/products/hydrogen/pure-hydrogen/pure-hydrogen.component';
import { CudxModelComponent } from './public/products/nitrogen/cudx-model/cudx-model.component';
import { DxModelComponent } from './public/products/nitrogen/dx-model/dx-model.component';
import { MsModelComponent } from './public/products/nitrogen/ms-model/ms-model.component';
import { BlanketingComponent } from './public/products/nitrogen/blanketing/blanketing.component';
import { FoodPackagingComponent } from './public/products/nitrogen/food-packaging/food-packaging.component';
import { InertizationComponent } from './public/products/nitrogen/inertization/inertization.component';
import { Oxygen10Component } from './public/products/oxygen/oxygen10/oxygen10.component';
import { Oxygen30Component } from './public/products/oxygen/oxygen30/oxygen30.component';
import { VpsaComponent } from './public/products/oxygen/vpsa/vpsa.component';
import { GoxIComponent } from './public/products/oxygen/gox-i/gox-i.component';
import { GoxCComponent } from './public/products/oxygen/gox-c/gox-c.component';
import { GoxMComponent } from './public/products/oxygen/gox-m/gox-m.component';
import { CryogenicAsuComponent } from './public/products/other-products/cryogenic-asu/cryogenic-asu.component';
import { AirDryerComponent } from './public/products/other-products/air-dryer/air-dryer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'certification',
    component: CertificationComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'quote',
    component: QuoteComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'ourproject',
    component: OurprojectComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    // children:[
    //   {
    //     path:'expandedblogs',
    //     component:ExpandedblogsComponent,
    //   },
    // ]
  },
  {
    path: 'expandedblogs',
    component: ExpandedblogsComponent,
  },
  {
    path: 'nav-nitrogen',
    component: NavNitrogenComponent,
  },
  {
    path: 'nav-oxygen',
    component: NavOxygenComponent,
  },
  {
    path: 'nav-hydrogen',
    component: NavHydrogenComponent,
  },
  {

    path: 'supplypolicy',
    component:SupplypolicyComponent,
  },
  {
    path:'privacypolicy',
    component:PrivacypolicyComponent,
  },
  {
    path: 'ammonia-purifier',
    component: AmmoniaPurifierComponent,
  },
  {
    path: 'ammonia-cracker',
    component: AmmoniaCrackerComponent,
  },
  {
    path: 'pure-hydrogen',
    component: PureHydrogenComponent,
  },
  {
    path: 'nitrogen-cudx',
    component: CudxModelComponent,
  },
  {
    path: 'nitrogen-dx',
    component: DxModelComponent,
  },
  {
    path: 'nitrogen-ms',
    component: MsModelComponent,
  },
  {
    path: 'nitrogen-blanketing',
    component: BlanketingComponent,
  },
  {
    path: 'nitrogen-inertization',
    component: InertizationComponent,
  },
  {
    path: 'nitrogen-food',
    component: FoodPackagingComponent,
  },
  {
    path: 'oxygen10-20NM3',
    component: Oxygen10Component,
  },
  {
    path: 'oxygen30-60NM3',
    component: Oxygen30Component,
  },
  {
    path: 'vpsa',
    component: VpsaComponent,
  },
  {
    path: 'gox-i',
    component: GoxIComponent,
  },
  {
    path: 'gox-c',
    component: GoxCComponent,
  },
  {
    path: 'gox-m',
    component: GoxMComponent,
  },
  {
    path: 'cryogenic-asu',
    component: CryogenicAsuComponent,
  },
  {
    path: 'air-dryer',
    component: AirDryerComponent,
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
