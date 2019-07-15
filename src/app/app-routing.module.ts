import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DeskComponent } from './desk/desk.component';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: `full`},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'desk', component: DeskComponent},
  {path: 'comment', component: CommentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
