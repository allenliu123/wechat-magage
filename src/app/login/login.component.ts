import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpService } from '../service/http.service'
import { HttpParams } from '@angular/common/http';
import { Md5 } from "ts-md5/dist/md5";
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpService,
    private message: NzMessageService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }

  validateForm: FormGroup;

  login(): void {
    var error = false
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if(this.validateForm.controls[i].errors){
        error = true
      }
    }
    if(!error){
      var params = new HttpParams({fromObject: {
        email: this.validateForm.get('email').value,
        password: Md5.hashStr(this.validateForm.get('password').value).toString()
      }})
      try {
        this.http.post('/login', params, res => {
          if(res.state === 'success'){
            this.message.create('success', res.msg);
            this.router.navigateByUrl("home")
          } else if(res.state === 'fail'){
            this.message.create('error', res.msg);
            this.validateForm.reset()
          } else {
            this.message.create('error', '网络异常');
            this.validateForm.reset()
          }
        })
      } catch(e) {
        console.log(e)
        this.message.create('error', '网络异常');
      }
      
    }
  }
}
