import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./list/list.module').then(m=>m.ListModule)
  },
  {
    path:'result/:state/:city',
    loadChildren:()=>import('./result/result.module').then(m=>m.ResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
