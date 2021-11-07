import { Component, OnInit } from '@angular/core';
import { Chairman } from '../chairman';
import { ChairmanService } from '../chairman.service';
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

  chairmanTableColumnNames = ['place', 'name', 'term-of-office'];

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

  public chairmanSortfn(a: Chairman, b: Chairman) {
    return a.place - b.place;
  }
  
  constructor(public chairmanservice: ChairmanService) {}

  ngOnInit(): void {}
}
