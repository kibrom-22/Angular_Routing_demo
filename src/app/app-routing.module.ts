import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'person',component:PersonComponent},
  {path:'product', component:ProductComponent},
  {
    path:'home',
    component:HomeComponent,
    children:[
      {path:'',redirectTo:'profile',pathMatch:'full'},
      {path:'product',component:ProductComponent},
      {path:'person',component:PersonComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
