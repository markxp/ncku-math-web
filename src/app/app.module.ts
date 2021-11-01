import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAboutCommitteeComponent } from './app-about-committee/app-about-committee.component';
import { AppAboutDirectoryComponent } from './app-about-directory/app-about-directory.component';
import { AppAboutListComponent } from './app-about-list/app-about-list.component';
import { AppAboutLocationComponent } from './app-about-location/app-about-location.component';
import { AppAboutRulesComponent } from './app-about-rules/app-about-rules.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppHistoryComponent } from './app-history/app-history.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppNewsComponent } from './app-news/app-news.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AppAboutComponent,
    AppAboutListComponent,
    AppAboutLocationComponent,
    AppAboutCommitteeComponent,
    AppAboutRulesComponent,
    AppAboutDirectoryComponent,
    AppNewsComponent,
    AppHistoryComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
