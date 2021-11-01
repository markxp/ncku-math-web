import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppAboutCommitteeComponent } from './app-about-committee/app-about-committee.component';
import { AppAboutDirectoryComponent } from './app-about-directory/app-about-directory.component';
import { AppAboutLocationComponent } from './app-about-location/app-about-location.component';
import { AppAboutRulesComponent } from './app-about-rules/app-about-rules.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppHistoryComponent } from './app-history/app-history.component';
import { AppNewsComponent } from './app-news/app-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const failBackRoute: Route = { path: '**', component: PageNotFoundComponent };
const routes: Routes = [
  {
    path: 'about',
    component: AppAboutComponent,
    children: [
      { path: 'history', component: AppHistoryComponent },
      { path: 'location', component: AppAboutLocationComponent },
      { path: 'committee', component: AppAboutCommitteeComponent },
      { path: 'committee/:schoolYear', component: AppAboutCommitteeComponent },
      { path: 'rules', component: AppAboutRulesComponent },
      { path: 'directory', component: AppAboutDirectoryComponent },
      { path: '', redirectTo: 'history', pathMatch: 'full' },
    ],
  },
  { path: 'news', component: AppNewsComponent },
  { path: '', redirectTo: 'about/location', pathMatch: 'full' },
  failBackRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
