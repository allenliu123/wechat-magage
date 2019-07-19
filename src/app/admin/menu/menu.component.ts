import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { HttpService } from '../../service/http.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  isVisible = false;
  isOkLoading = false;
  selectType = '荤菜';

  dishTypes:any = [
    {
      typeId: 1,
      typeName: '荤菜',
    },
    {
      typeId: 2,
      typeName: '素菜',
    },
  ]

  newDish:any = 
    {
      dishName: '',
      dishPrice: 0,
      dishType: '',
    }

   dishes:any = []

  constructor(
      private http: HttpService,
  ) { }

  ngOnInit() {
    this.http.get('/classify/get', res => {
      if(res.msg == 'success'){
        this.http.get('/dish/get', res1 => {
          if(res1.msg == 'success'){
            var classify = res.data
            var dish = res1.data
            for(var c of classify){
              var dishType: any = {}
              dishType.typeId = classify.classificationId
              dishType.typeName = classify.classification
              this.dishTypes.push(dishType)
              for(var d of dish){
                if(c.classificationId == d.classificationId){
                  var obj:any = {}
                  obj.dishId = d.dishId
                  obj.dishName = d.dishName
                  obj.dishPrice = d.price
                  obj.dishType = c.classification
                  obj.img = d.img
                  this.dishes.push(obj)
                }
              }
            }
          }
        })
      }
    })
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
        if(this.newDish.dishName.trim()||this.newDish.dishPrice != 0)
        {
          this.isOkLoading = true;
          this.newDish.dishType = this.selectType;
          //假装异步
          setTimeout(() => {
          this.dishes.push(this.newDish);
          this.isVisible = false;
          this.isOkLoading = false;
            //重置输入框
            this.newDish.dishName = '';
            this.newDish.dishPrice = 0;
            this.selectType = '荤菜';

          }, 3000);
        }
        else
        {
          window.alert('请输入菜品信息');
        }

  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
}
