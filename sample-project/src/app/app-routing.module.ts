import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './public/project/project.component';
import { PublicComponent } from './public/public.component';
import { UserComponent } from './public/user/user.component';


const routes: Routes = [
  // {
  //   path: '', 
  //   component: PublicComponent,
  //   children: [
  //     {path: 'user', component:UserComponent}
  //   ]
  // }
  {path: 'user', component: PublicComponent},
  {path: 'user/:id', component:UserComponent},
  {path: '', component:ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
