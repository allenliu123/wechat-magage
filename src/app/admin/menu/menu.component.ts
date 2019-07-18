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

   dishes:any = [
    {
      dishId: 1,
      dishName: '牛肉卷',
      dishPrice: 20,
      dishType: '荤菜',
    },

    {
      dishId: 2,
      dishName: '牛肉卷',
      dishPrice: 20,
      dishType: '荤菜',
    },

    {
      dishId: 3,
      dishName: '牛肉卷',
      dishPrice: 20,
      dishType: '荤菜',
    },

    {
      dishId: 4,
      dishName: '牛肉卷',
      dishPrice: 20,
      dishType: '荤菜',
    },

    {
      dishId: 5,
      dishName: '牛肉卷',
      dishPrice: 20,
      dishType: '荤菜',
    },
  ]

  constructor(
      private http: HttpService,
  ) { }

  ngOnInit() {

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
