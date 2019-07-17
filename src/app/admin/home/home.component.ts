import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  datas:any = [
    {
      capacity: 6,
      tableId:  1,
      tableName: '1号桌',
      tableStatus: '已入座',
    },
    {
      capacity: 6,
      tableId:  2,
      tableName: '2号桌',
      tableStatus: '未入座',
    },
    {
      capacity: 6,
      tableId:  3,
      tableName: '3号桌',
      tableStatus: '已入座',
    },
    {
      capacity: 6,
      tableId:  4,
      tableName: '4号桌',
      tableStatus: '已预约',
    },
    {
      capacity: 6,
      tableId:  5,
      tableName: '5号桌',
      tableStatus: '已入座',
    },
    {
      capacity: 6,
      tableId:  6,
      tableName: '6号桌',
      tableStatus: '未入座',
    },
    {
      capacity: 6,
      tableId:  7,
      tableName: '7号桌',
      tableStatus: '已预约',
    },
    {
      capacity: 6,
      tableId:  8,
      tableName: '8号桌',
      tableStatus: '未入座',
    },
  ]

  constructor() { }


  ngOnInit() {
  }

}
