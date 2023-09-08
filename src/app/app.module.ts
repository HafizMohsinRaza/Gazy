import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { register } from 'swiper/element/bundle';
register();
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import { SidenavComponent } from './public/components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { HeadingComponent } from './public/components/heading/heading.component';
import { AboutComponent } from './public/pages/about/about.component';
import { CertificationComponent } from './public/components/certification/certification.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { CareerComponent } from './public/pages/career/career.component';
import { SliderComponent } from './public/components/slider/slider.component';

import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/pages/home/home.component';
import { QuoteComponent } from './public/components/quote/quote.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { KeyProductsComponent } from './public/components/key-products/key-products.component';
import { QuestionsComponent } from './public/components/questions/questions.component';
import { ContactpageComponent } from './public/components/contactpage/contactpage.component';
import { CertificateComponent } from './public/components/certificate/certificate.component';
import { GeneratorsComponent } from './public/components/generators/generators.component';
import { IndustriesComponent } from './public/components/industries/industries.component';
import { QualitiesComponent } from './public/components/qualities/qualities.component';
import { PsaNitrogenComponent } from './public/home-products/psa-nitrogen/psa-nitrogen.component';
import { PsaOxygenComponent } from './public/home-products/psa-oxygen/psa-oxygen.component';
import { AmmoniaComponent } from './public/home-products/ammonia/ammonia.component';
import { CryogenicComponent } from './public/home-products/cryogenic/cryogenic.component';

import { MatDialogModule } from '@angular/material/dialog';
import { PopmenuComponent } from './public/components/popmenu/popmenu.component';
import { MultisliderComponent } from './public/components/multislider/multislider.component';
import { OurprojectComponent } from './public/ourproject/ourproject.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FirstSliderComponent } from './public/components/first-slider/first-slider.component';
import { NavNitrogenComponent } from './public/nav-items/nav-nitrogen/nav-nitrogen.component';
import { NavSliderComponent } from './public/components/nav-slider/nav-slider.component';
// PrimeBg
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ProjectsComponent } from './public/components/projects/projects.component';
import { SubscribeComponent } from './public/components/subscribe/subscribe.component';
import { BlogsComponent } from './public/blogs/blogs.component';
import { PaginatorModule } from 'primeng/paginator';
import { OurblogsComponent } from './public/components/ourblogs/ourblogs.component';
import { SpecializationComponent } from './public/components/specialization/specialization.component';

import { SpecificationComponent } from './public/components/specification/specification.component';

import { ExpandedblogsComponent } from './public/components/expandedblogs/expandedblogs.component';
import { ShareblogsComponent } from './public/components/shareblogs/shareblogs.component';
import { NitrogenChartComponent } from './public/components/nitrogen-chart/nitrogen-chart.component';
import { ChartModule } from 'primeng/chart';
import { MoreblogsComponent } from './public/components/moreblogs/moreblogs.component';
import { NavOxygenComponent } from './public/nav-items/nav-oxygen/nav-oxygen.component';
import { NavHydrogenComponent } from './public/nav-items/nav-hydrogen/nav-hydrogen.component';
import { AmmoniaworkComponent } from './public/components/ammoniawork/ammoniawork.component';
import { ApplicationTemplateComponent } from './public/components/application-template/application-template.component';

import { SupplypolicyComponent } from './public/pages/policy/supplypolicy/supplypolicy.component';
import { PrivacypolicyComponent } from './public/pages/policy/privacypolicy/privacypolicy.component';

import { AmmoniaPurifierComponent } from './public/products/hydrogen/ammonia-purifier/ammonia-purifier.component';
import { PrimaryEquipmentComponent } from './public/products/product-components/primary-equipment/primary-equipment.component';
import { AmmoniaCrackerComponent } from './public/products/hydrogen/ammonia-cracker/ammonia-cracker.component';
import { PureHydrogenComponent } from './public/products/hydrogen/pure-hydrogen/pure-hydrogen.component';
import { CudxModelComponent } from './public/products/nitrogen/cudx-model/cudx-model.component';
import { BrochureComponent } from './public/products/product-components/brochure/brochure.component';
import { MoreProductsComponent } from './public/products/product-components/more-products/more-products.component';
import { DxModelComponent } from './public/products/nitrogen/dx-model/dx-model.component';
import { MsModelComponent } from './public/products/nitrogen/ms-model/ms-model.component';
import { BlanketingComponent } from './public/products/nitrogen/blanketing/blanketing.component';
import { InertizationComponent } from './public/products/nitrogen/inertization/inertization.component';
import { FoodPackagingComponent } from './public/products/nitrogen/food-packaging/food-packaging.component';
import { Oxygen10Component } from './public/products/oxygen/oxygen10/oxygen10.component';
import { Oxygen30Component } from './public/products/oxygen/oxygen30/oxygen30.component';
import { ScopeComponent } from './public/products/product-components/scope/scope.component';
import { VpsaComponent } from './public/products/oxygen/vpsa/vpsa.component';
import { GoxCComponent } from './public/products/oxygen/gox-c/gox-c.component';
import { GoxIComponent } from './public/products/oxygen/gox-i/gox-i.component';
import { GoxMComponent } from './public/products/oxygen/gox-m/gox-m.component';
import { MedicalComponent } from './public/products/oxygen/specialisation/medical/medical.component';
import { IndustrialComponent } from './public/products/oxygen/specialisation/industrial/industrial.component';
import { CylinderComponent } from './public/products/oxygen/specialisation/cylinder/cylinder.component';
import { CryogenicAsuComponent } from './public/products/other-products/cryogenic-asu/cryogenic-asu.component';
import { AirDryerComponent } from './public/products/other-products/air-dryer/air-dryer.component';
import { TranslateComponent } from './public/components/translate/translate.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HeadingComponent,
    AboutComponent,
    CertificationComponent,
    FooterComponent,
    CareerComponent,
    SliderComponent,
    ContactComponent,
    QuoteComponent,
    HomeComponent,
    QuestionsComponent,
    ContactUsComponent,
    ContactpageComponent,
    CertificateComponent,
    GeneratorsComponent,
    KeyProductsComponent,
    IndustriesComponent,
    QualitiesComponent,
    PsaNitrogenComponent,
    PsaOxygenComponent,
    AmmoniaComponent,
    CryogenicComponent,
    PopmenuComponent,
    MultisliderComponent,
    OurprojectComponent,
    FirstSliderComponent,
    ProjectsComponent,
    SubscribeComponent,
    BlogsComponent,
    NavNitrogenComponent,
    NavSliderComponent,
    OurblogsComponent,
    SpecializationComponent,
    SpecificationComponent,
    ExpandedblogsComponent,
    ShareblogsComponent,
    NitrogenChartComponent,
    MoreblogsComponent,
    NavOxygenComponent,
    NavHydrogenComponent,
    AmmoniaworkComponent,
    ApplicationTemplateComponent,

    SupplypolicyComponent,
    PrivacypolicyComponent,

    AmmoniaPurifierComponent,
    PrimaryEquipmentComponent,
    AmmoniaCrackerComponent,
    PureHydrogenComponent,
    CudxModelComponent,
    BrochureComponent,
    MoreProductsComponent,
    DxModelComponent,
    MsModelComponent,
    BlanketingComponent,
    InertizationComponent,
    FoodPackagingComponent,
    Oxygen10Component,
    Oxygen30Component,
    ScopeComponent,
    VpsaComponent,
    GoxCComponent,
    GoxIComponent,
    GoxMComponent,
    MedicalComponent,
    IndustrialComponent,
    CylinderComponent,
    CryogenicAsuComponent,
    AirDryerComponent,
    TranslateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    GoogleMapsModule,
    MatDialogModule,
    NgImageSliderModule,
    ButtonModule,
    CarouselModule,
    PaginatorModule,
    ChartModule,
    HttpClientModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
