import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { AdminDashboardComponent } from './page/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../guard/auth.guard';
import { HomeComponent } from './page/home/home.component';
import { HomeBannerComponent } from './page/home-banner/home-banner.component';
import { ShowBannerComponent } from './component/show-banner/show-banner.component';
import { CreateBannerComponent } from './component/create-banner/create-banner.component';
import { ShowBlogComponent } from './component/show-blog/show-blog.component';
import { CreateBlogComponent } from './component/create-blog/create-blog.component';
import { AdminBlogsComponent } from './page/admin-blogs/admin-blogs.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { HomepageContentComponent } from './component/homepage-content/homepage-content.component';
import { EditHomepageContentComponent } from './component/edit-homepage-content/edit-homepage-content.component';
import { TeamComponent } from './page/team/team.component';
import { ShowTeamComponent } from './component/show-team/show-team.component';
import { CreateTeamComponent } from './component/create-team/create-team.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { UpdateContactComponent } from './component/update-contact/update-contact.component';
import { ContactInfoComponent } from './component/contact-info/contact-info.component';
import { JobComponent } from './page/job/job.component';
import { ShowJobComponent } from './component/show-job/show-job.component';
import { CreateJobComponent } from './component/create-job/create-job.component';
import { ClientLogoComponent } from './page/client-logo/client-logo.component';
import { ShowClientLogoComponent } from './component/show-client-logo/show-client-logo.component';
import { CreateClientLogoComponent } from './component/create-client-logo/create-client-logo.component';
import { InformationComponent } from './page/information/information.component';
import { SignupComponent } from './accounts/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account/login',
    pathMatch: 'full',
  },
  { path: 'account/login', component: LoginComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'home-banner',
        component: HomeBannerComponent,
        children: [
          { path: '', redirectTo: 'show-banner', pathMatch: 'full' },
          { path: 'show-banner', component: ShowBannerComponent },
          
          { path: 'create-banner', component: CreateBannerComponent },
          { path: 'edit-banner/:bannerId', component: CreateBannerComponent },
        ],
      },
      {
        path: 'blogs',
        component: AdminBlogsComponent,
        children: [
          { path: '', redirectTo: 'show-blog', pathMatch: 'full' },
          { path: 'show-blog', component: ShowBlogComponent },
          { path: 'create-blog', component: CreateBlogComponent },
          { path: 'edit-blog/:bannerId', component: CreateBlogComponent },
        ],
      },
      {
        path: 'homepage',
        component: HomepageComponent,
        children: [
          { path: '', redirectTo: 'homepage-content', pathMatch: 'full' },
          { path: 'homepage-content', component: HomepageContentComponent },
          { path: 'edit-contant/:bannerId', component: EditHomepageContentComponent },
        ],
      },
      {
        path: 'contact',
        component: TeamComponent,
        children: [
          { path: '', redirectTo: 'show-contact', pathMatch: 'full' },
          { path: 'show-contact', component: ContactInfoComponent },
          { path: 'create-contact', component: UpdateContactComponent },
          { path: 'edit-contact/:bannerId', component: UpdateContactComponent },
        ],
      },
      {
        path: 'team',
        component: TeamComponent,
        children: [
          { path: '', redirectTo: 'show-team', pathMatch: 'full' },
          { path: 'show-team', component: ShowTeamComponent },
          { path: 'create-team', component: CreateTeamComponent },
          { path: 'edit-team/:bannerId', component: CreateTeamComponent },
        ],
      },
      {
        path: 'job',
        component: JobComponent,
        children: [
          { path: '', redirectTo: 'show-job', pathMatch: 'full' },
          { path: 'show-job', component: ShowJobComponent },
          { path: 'create-job', component: CreateJobComponent },
          { path: 'edit-job/:bannerId', component: CreateJobComponent },
        ],
      },
      {
        path: 'client-logo',
        component: ClientLogoComponent,
        children: [
          { path: '', redirectTo: 'show-client', pathMatch: 'full' },
          { path: 'show-client', component: ShowClientLogoComponent },
          { path: 'create-client', component: CreateClientLogoComponent },
          { path: 'edit-client/:bannerId', component: CreateClientLogoComponent },
        ],
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'information',
        component: InformationComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule {}
