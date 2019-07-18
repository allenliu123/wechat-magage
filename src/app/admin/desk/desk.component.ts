import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {
  addisVisible = false;              //添加对话框可见判定
  addisOkLoading = false;            //异步动画相关判定
  deleteisVisible = false;           //删除对话框可见判定
  deleteisOkLoading = false;         //异步动画相关判定


  datas: any = [
    {
      tableId: 1,
      capacity: 6,
      tableName: '1号桌',
    },
    {
      tableId: 2,
      capacity: 6,
      tableName: '2号桌',
    },
    {
      tableId: 3,
      capacity: 6,
      tableName: '3号桌',
    },
  ]

  data: any = {
    capacity: 0,
    tableName:'',
  }

  constructor() { }

  ngOnInit() {
  }

  //添加对话框相关函数
  addshowModal(): void {
    this.addisVisible = true;
  }

  //确定点击事件函数
  addhandleOk(): void {
    this.addisOkLoading = true;
    setTimeout(() => {
      this.addisVisible = false;
      this.addisOkLoading = false;
    }, 3000);
  }

  //取消点击事件函数
  addhandleCancel(): void {
    this.addisVisible = false;
  }

  //删除对话框相关函数
  deleteshowModal(): void {
    this.deleteisVisible = true;
  }

  //确定点击事件函数
  deletehandleOk(): void {
    this.deleteisOkLoading = true;
    setTimeout(() => {
      this.deleteisVisible = false;
      this.deleteisOkLoading = false;
    }, 3000);
  }

  //取消点击事件函数
  deletehandleCancel(): void {
    this.deleteisVisible = false;
  }

}
