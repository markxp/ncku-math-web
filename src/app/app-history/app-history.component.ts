import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-history',
  templateUrl: './app-history.component.html',
  styleUrls: ['./app-history.component.css'],
})
export class AppHistoryComponent implements OnInit {
  timelineData = [
    {
      year: 1956,
      event:
        '本校改制為成功大學，正式成立「數學系」。設立之宗旨在培育數學理論及應用之人才，為科技本土化奠基。',
    },
    {
      year: 1973,
      event: '開辦「夜間部數學系」。',
    },
    {
      year: 1978,
      event: '夜間部數學系改稱「應用數學系」。',
    },
    {
      year: 1980,
      event: '成立「應用數學研究所碩士班」。',
    },
    {
      year: 1993,
      event: '成立「應用數學研究所博士班」。',
    },
    {
      year: 1997,
      event: '夜間部改為「進修推廣教育學士班」。',
    },
    {
      year: 2000,
      event: '進修推廣教育學士班停止招生。',
    },
  ];

  charmanTableColumnNames = ['place', 'name', 'term-of-office'];

  chairmanList = [
    {
      place: 1,
      name: '樊平章',
      start: '1956-08-01',
      end: '1963-07-31',
    },
    {
      place: 2,
      name: '趙少鐵',
      start: '1963-08-01',
      end: '1969-07-31',
    },
    {
      place: 3,
      name: '林宜禧',
      start: '1969-08-01',
      end: '1975-07-31',
    },
    {
      place: 4,
      name: '陳珍漢',
      start: '1975-08-01',
      end: '1983-07-31',
    },
    {
      place: 5,
      name: '李育嘉',
      start: '1983-08-01',
      end: '1985-07-31',
    },
    {
      place: 6,
      name: '陳順宇',
      start: '1985-08-01',
      end: '1986-07-31',
    },
    {
      place: 7,
      name: '李育嘉',
      start: '1986-08-01',
      end: '1989-07-31',
    },
    {
      place: 8,
      name: '李春得',
      start: '1989-08-01',
      end: '1992-07-31',
    },
    {
      place: 9,
      name: '黃永裕',
      start: '1992-08-01',
      end: '1998-07-31',
    },
    {
      place: 10,
      name: '吳順益',
      start: '1998-08-01',
      end: '2001-07-31',
    },
    {
      place: 11,
      name: '林琦焜',
      start: '2001-08-01',
      end: '2004-07-31',
    },
    {
      place: 12,
      name: '柯文峰',
      start: '2004-08-01',
      end: '2006-07-31',
    },
    {
      place: 13,
      name: '林牛',
      start: '2006-08-01',
      end: '2008-07-31',
    },
    {
      place: 14,
      name: '許瑞麟',
      start: '2008-08-01',
      end: '2012-07-31',
    },
    {
      place: 15,
      name: '陳若淳',
      start: '2012-08-01',
      end: '2015-07-31',
    },
    {
      place: 16,
      name: '林景隆',
      start: '2015-08-01',
      end: '2021-07-31',
    },
    {
      place: 17,
      name: '黃世昌',
      start: '2021-08-01',
      end: '',
    },
  ];

  facultyTableColumnNames = [
    'schoolYear', // 學年
    'add', // 到任
    'remove', // 退休/離職
    'comment', // 備註
    'netFaculty', // 師資增減
    'totalFaculty', // 累積師資'
  ];
  facultyChanges = [
    {
      schoolYear: 45,
      add: ['樊平章', '趙少鐵', '任公放', '李定文', '郭德菱', '吳萊憶'],
      remove: [],
      comment: '大學部成立',
      netFaculty: 6,
      totalFaculty: 6,
    },
    {
      schoolYear: 46,
      add: ['郭燮昌'],
      remove: ['任公放'],
      comment: '',
      netFaculty: 0,
      totalFaculty: 6,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
