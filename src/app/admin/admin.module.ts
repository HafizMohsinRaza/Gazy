import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './accounts/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { BodyComponent } from './component/body/body.component';
import { HomeComponent } from './page/home/home.component';
import { SublevelMenuComponent } from './component/sidenav/sublevel-menu.component';
import { HomeBannerComponent } from './page/home-banner/home-banner.component';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';

import {MatDialog} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { CreateBannerComponent } from './component/create-banner/create-banner.component';
import { ShowBannerComponent } from './component/show-banner/show-banner.component';
import { ShowBlogComponent } from './component/show-blog/show-blog.component';
import { CreateBlogComponent } from './component/create-blog/create-blog.component';
import { AdminBlogsComponent } from './page/admin-blogs/admin-blogs.component';
import { HomepageContentComponent } from './component/homepage-content/homepage-content.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { EditHomepageContentComponent } from './component/edit-homepage-content/edit-homepage-content.component';
import { TeamComponent } from './page/team/team.component';
import { ShowTeamComponent } from './component/show-team/show-team.component';
import { CreateTeamComponent } from './component/create-team/create-team.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactComponent } from './page/contact/contact.component';
import { ContactInfoComponent } from './component/contact-info/contact-info.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { JobComponent } from './page/job/job.component';
import { CreateJobComponent } from './component/create-job/create-job.component';
import { ShowJobComponent } from './component/show-job/show-job.component';
import { ClientLogoComponent } from './page/client-logo/client-logo.component';
import { ShowClientLogoComponent } from './component/show-client-logo/show-client-logo.component';
import { CreateClientLogoComponent } from './component/create-client-logo/create-client-logo.component';
import { InformationComponent } from './page/information/information.component';
import { SignupComponent } from './accounts/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../services/auth-interceptor';
@NgModule({
  declarations: [
    LoginComponent,
    AdminDashboardComponent,
    SidenavComponent,
    BodyComponent,
    HomeComponent,
    SublevelMenuComponent,
    HomeBannerComponent,
    CreateBannerComponent,
    ShowBannerComponent,
    ShowBlogComponent,
    CreateBlogComponent,
    AdminBlogsComponent,
    HomepageContentComponent,
    HomepageComponent,
    EditHomepageContentComponent,
    TeamComponent,
    ShowTeamComponent,
    CreateTeamComponent,
    AboutUsComponent,
    ContactComponent,
    ContactInfoComponent,
    UpdateContactComponent,
    JobComponent,
    CreateJobComponent,
    ShowJobComponent,
    ClientLogoComponent,
    ShowClientLogoComponent,
    CreateClientLogoComponent,
    InformationComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatMenuModule,
    NgFor,
    NgIf,
    MatTableModule
    // BrowserAnimationsModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AdminModule { }
