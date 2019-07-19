import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  //待付款，已完成，已取消，待评价
  orders: any = [
    {
      orderId: 1,
      orderStatus: '已完成',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 2,
      orderStatus: '已取消',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 3,
      orderStatus: '待评价',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 4,
      orderStatus: '待付款',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 5,
      orderStatus: '已完成',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 6,
      orderStatus: '已取消',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 7,
      orderStatus: '待评价',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
    {
      orderId: 8,
      orderStatus: '待付款',
      totalPrice: 11,
      orderTime: '2017-07-14 12:29:12',
    },
  ]

  order: any = {
    orderId: 0,
  }

  constructor(
    private http: HttpService,
    private modalService: NzModalService,
  ) { }

  ngOnInit() {
  }

  showConfirm(order: any): void {
    this.modalService.confirm({
      nzTitle: '<i>确认已付款？</i>',
      nzContent: '<b>请确认顾客是否已经付款后再确定</b>',
      nzOkText: 'Yes',
      nzCancelText: 'No',
      //确定提交改变订单状态
      nzOnOk: order => {
        
      }
    });
  }

  showDeleteConfirm(order: any): void {
    this.modalService.confirm({
      nzTitle: '确定取消订单？',
      nzContent: '<b style="color: red;">请确认顾客是否已经取消订单</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      //确定提交改变订单状态
      nzOnOk: order => {
        
      },
      nzCancelText: 'No',
    });
  }


}
