import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.css']
})
export class AppNewsComponent implements OnInit {

  newsList = [
    {text: '1', href: ''},
    {text: '【數學系公告】 2020,2019,2018,2017,2016, 2015, 2014, 2013 QS世界大學頂尖200大學中，入榜之台灣各所大學數學系排名。', href:'http://www.topuniversities.com/university-rankings/university-subject-rankings/2020/mathematics#sorting=rank+region=+country=+faculty=+stars=false+search='},
    {text:'【數學系公告】 財團法人宏遠數學文教基金會 樊平章教授紀念獎學金109學年度第2學期得獎同學:李宗憲.王凱立'},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
