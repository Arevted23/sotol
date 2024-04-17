import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { HistoriaComponent } from './pages/paginas/historia/historia.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'historia',
    component: HistoriaComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
