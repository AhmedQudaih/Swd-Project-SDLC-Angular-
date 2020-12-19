import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllfileComponent } from './allfile/allfile.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  {path:'',component: MainComponentComponent},
  {path:'allfile',component: AllfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
