import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path:"",
    component:NavbarComponent,
    children:[
      {
        path:"user",
        component:UserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
