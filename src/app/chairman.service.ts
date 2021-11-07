import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chairman } from './chairman';
@Injectable({
  providedIn: 'root',
})
export class ChairmanService {
  // mocking data
  data: Chairman[] = [
    {
      place: 1,
      name: '樊平章',
      start: new Date('1956-08-01T00:00:00+08:00'),
      end: new Date('1963-07-31T23:59:59+08:00'),
    },
    {
      place: 2,
      name: '趙少鐵',
      start: new Date('1963-08-01T00:00:00+08:00'),
      end: new Date('1969-07-31T23:59:59+08:00'),
    },
    {
      place: 3,
      name: '林宜禧',
      start: new Date('1969-08-01T00:00:00+08:00'),
      end: new Date('1975-07-31T23:59:59+08:00'),
    },
    {
      place: 4,
      name: '陳珍漢',
      start: new Date('1975-08-01T00:00:00+08:00'),
      end: new Date('1983-07-31T23:59:59+08:00'),
    },
    {
      place: 5,
      name: '李育嘉',
      start: new Date('1983-08-01T00:00:00+08:00'),
      end: new Date('1985-07-31T23:59:59+08:00'),
    },
    {
      place: 6,
      name: '陳順宇',
      start: new Date('1985-08-01T00:00:00+08:00'),
      end: new Date('1986-07-31T23:59:59+08:00'),
    },
    {
      place: 7,
      name: '李育嘉',
      start: new Date('1986-08-01T00:00:00+08:00'),
      end: new Date('1989-07-31T23:59:59+08:00'),
    },
    {
      place: 8,
      name: '李春得',
      start: new Date('1989-08-01T00:00:00+08:00'),
      end: new Date('1992-07-31T23:59:59+08:00'),
    },
    {
      place: 9,
      name: '黃永裕',
      start: new Date('1992-08-01T00:00:00+08:00'),
      end: new Date('1998-07-31T23:59:59+08:00'),
    },
    {
      place: 10,
      name: '吳順益',
      start: new Date('1998-08-01T00:00:00+08:00'),
      end: new Date('2001-07-31T23:59:59+08:00'),
    },
    {
      place: 11,
      name: '林琦焜',
      start: new Date('2001-08-01T00:00:00+08:00'),
      end: new Date('2004-07-31T23:59:59+08:00'),
    },
    {
      place: 12,
      name: '柯文峰',
      start: new Date('2004-08-01T00:00:00+08:00'),
      end: new Date('2006-07-31T23:59:59+08:00'),
    },
    {
      place: 13,
      name: '林牛',
      start: new Date('2006-08-01T00:00:00+08:00'),
      end: new Date('2008-07-31T23:59:59+08:00'),
    },
    {
      place: 14,
      name: '許瑞麟',
      start: new Date('2008-08-01T00:00:00+08:00'),
      end: new Date('2012-07-31T23:59:59+08:00'),
    },
    {
      place: 15,
      name: '陳若淳',
      start: new Date('2012-08-01T00:00:00+08:00'),
      end: new Date('2015-07-31T23:59:59+08:00'),
    },
    {
      place: 16,
      name: '林景隆',
      start: new Date('2015-08-01T00:00:00+08:00'),
      end: new Date('2021-07-31T23:59:59+08:00'),
    },
    {
      place: 17,
      name: '黃世昌',
      start: new Date('2021-08-01T00:00:00+08:00'),
    },
  ];

  subject = new BehaviorSubject(this.data);

  constructor() {}
  list(): Observable<Chairman[]> {
    return this.subject;
  }
  add(one: Chairman): Observable<Chairman[]> {
    this.data = [...this.data, one];
    this.subject.next(this.data);
    return this.subject;
  }
}
