import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  urlStream = new BehaviorSubject<string>(this.route.snapshot.url.join('/'));

  url$: Subscription | undefined = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.url$ = this.route.url.subscribe((url) =>
      this.urlStream.next(url.join('/'))
    );
  }

  ngOnDestroy(): void {
    this.url$?.unsubscribe();
    this.urlStream.unsubscribe();
  }
}
