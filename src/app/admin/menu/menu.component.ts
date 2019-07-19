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

  loading = false;
  avatarUrl: string;

  dishTypes:any = []

  newDish:any = 
    {
      dishName: '',
      dishPrice: '',
      typeId: ''
    }

   dishes:any = []

  constructor(
    private http: HttpService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.getMenu()
  }

  getMenu(): void {
    
    this.http.get('/classify/get', res => {
      if(res.msg == 'success'){
        this.http.get('/dish/get', res1 => {
          if(res1.msg == 'success'){
            var classify = res.data
            var dish = res1.data
            for(var c of classify){
              var dishType: any = {}
              dishType.typeId = c.classificationId
              dishType.typeName = c.classification
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
          var formData = new FormData();
          formData.append('img', this.avatarUrl)
          formData.append('dishName', this.newDish.dishName)
          formData.append('dishPrice', this.newDish.dishPrice)
          formData.append('classifyId', this.newDish.typeId)
          this.http.post('/dish/add', formData, res => {
            if(res.msg == 'success'){
              var obj:any = {}
              obj.dishName = this.newDish.dishName
              obj.dishPrice = this.newDish.dishPrice
              obj.dishType = this.find(this.newDish.typeId)
              obj.img = this.avatarUrl
              this.dishes.push(obj)
            this.isVisible = false;
            this.isOkLoading = false;
            //重置输入框
            this.newDish.dishName = '';
            this.newDish.dishPrice = '';
            this.newDish.typeId = 0;
            }
            
        })
      }

  }

  find(id): string {
    for(var i of this.dishTypes){
      if(id == i.typeId){
        return i.typeName
      }
    }
    return ''
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
  
}
