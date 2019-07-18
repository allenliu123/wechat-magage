import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './admin/menu/menu.component';
import { DeskComponent } from './admin/desk/desk.component';
import { CommentComponent } from './admin/comment/comment.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: `full`},
  {path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'desk', component: DeskComponent},
    {path: 'comment', component: CommentComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
