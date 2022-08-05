import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtnComponentComponent } from './btn-component/btn-component.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

const routes: Routes = [

  {path:'comp1',component:Comp1Component},
  {path:'comp2',component:Comp2Component},
  {path:'comp3',component:Comp3Component},
  {path:'btn',component:BtnComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
