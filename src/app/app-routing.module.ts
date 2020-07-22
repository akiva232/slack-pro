import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenComponent } from './pro/open/open.component';
import { ChatComponent } from './pro/chat/chat.component';


const routes: Routes = [
  {path:'',component:OpenComponent},
  {path:'chat',component:ChatComponent},
  // {path:'',component:ChatComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


  

export class AppRoutingModule { }
