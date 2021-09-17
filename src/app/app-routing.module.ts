import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { Detail1Component } from './Components/detail1/detail1.component';
import { Detail2Component } from './Components/detail2/detail2.component';
import { DetailsComponent } from './Components/details/details.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"product",component:ProductComponent,
    children: [
      {path:"detail/:id",component:DetailsComponent,
        children: [
          {path:"detail1",component:Detail1Component},
          {path:"detail2",component:Detail2Component}
        ]}
    ]
},
  // {path:"product/detail/:id",component:DetailsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
