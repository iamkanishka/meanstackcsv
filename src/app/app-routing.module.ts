import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'usersdata', component:CustomersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
