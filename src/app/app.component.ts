import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '成功大學數學系 | NCKU Mathematics dept.';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  links = [
    { path: 'about', title: 'About' },
    { path: 'news', title: 'News' },
    { path: 'colleagues', title: 'Collaberates' },
    { path: 'programs', title: 'Programs' },
    { path: 'courses', title: 'Courses' },
    { path: 'resources', title: 'Resources' },
    { path: 'scholarship', title: 'Scholarship' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
