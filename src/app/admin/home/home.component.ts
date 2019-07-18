import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})



export class HomeComponent implements OnInit {

  datas: any;
  isVisible = false;
  selectData: any = '';
  selectDataString: string = ''

  constructor(
    private  http: HttpService
  ) { }


  ngOnInit() {
    this.http.get('/desks/get', res =>{
      this.datas = res
    })
  }

  showModal(selectdata:any): void {
    this.selectData = selectdata;
    this.isVisible = true;
    this.selectDataString = JSON.stringify(this.selectData.tableId);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
