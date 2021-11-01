import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app-about-committee',
  templateUrl: './app-about-committee.component.html',
  styleUrls: ['./app-about-committee.component.css'],
})
export class AppAboutCommitteeComponent implements OnInit, OnDestroy {
  text = '';
  schoolYear: number = 0;
  subParams: Subscription | null = null;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subParams = this.route.params.subscribe((params) => {
      let x = parseInt(params['schoolYear']);
      if (isNaN(x) || x < 0) {
        // use the current time
        const now = new Date();
        let yr = now.getFullYear() - 1911 + (now.getMonth() + 1 < 8 ? -1 : 0);
        this.router.navigate([yr.toString()], { relativeTo: this.route });
      } else {
        this.schoolYear = x;
        this.text = x.toString();
      }
    });
  }

  ngOnDestroy(): void {
    this.subParams?.unsubscribe();
  }
}
