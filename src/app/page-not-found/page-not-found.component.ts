import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  path = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.path = this.route.snapshot.url.map((seg) => seg.toString()).join('/');
  }

  ngOnDestroy(): void {}
}
