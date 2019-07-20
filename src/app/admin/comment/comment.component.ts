import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  //待付款，已完成，已取消，待评价
  orders: any = [  ]

  order: any = {
    orderId: 0,
  }

  constructor(
    private http: HttpService,
    private modalService: NzModalService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.http.get('/order/all', res => {
      this.orders = res.data
    })
  }

  showConfirm(id: any): void {
    this.modalService.confirm({
      nzTitle: '<i>确认已付款？</i>',
      nzContent: '<b>请确认顾客已经成功付款后再点击确定</b>',
      nzOkText: 'Yes',
      nzCancelText: 'No',
      //确定提交改变订单状态
      nzOnOk:() => {
        var formData = new FormData();
        formData.append("orderId",  id);
        formData.append("state", "待评价")
        this.http.post('/complete', formData, res => {
          if(res.msg == 'success'){
            this.message.create('success', '确认成功')
            for(var i of this.orders){
              console.log(i.orderId)
              if(i.orderId == id){
                i.orderStatus == '待评价'
                break
              }
            }
          } else {
            this.message.create('error', '确认失败')
          }
        })
      }
    });
  }

  showDeleteConfirm(id: any): void {
    this.modalService.confirm({
      nzTitle: '确定取消订单？',
      nzContent: '<b style="color: red;">确认顾客是否已经取消订单</b>',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      //确定提交改变订单状态
      nzOnOk: order => {
        var formData = new FormData();
        formData.append("orderId",  id);
        formData.append("state", "已取消")
        this.http.post('/complete', formData, res => {
          if(res.msg == 'success'){
            this.message.create('success', '取消成功')
            for(var i of this.orders){
              if(i.orderId == id){
                i.orderStatus == '已取消'
                break
              }
            }
          } else {
            this.message.create('error', '取消失败')
          }
        })
      },
      nzCancelText: 'No',
    });
  }


}
