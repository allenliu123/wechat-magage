import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  title = 'wechat-manage'
  url: string = this.router.url
}
