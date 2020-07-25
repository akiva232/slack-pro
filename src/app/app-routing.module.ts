import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenComponent } from './pro/open/open.component';
import { MainComponent } from './chat/main/main.component';




const routes: Routes = [
  {path:'',component:OpenComponent},
  {path:'main',component:MainComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


  

export class AppRoutingModule { }
