import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './app.LoginComponent';
import { SearchFilterComponent } from './SearchFilterComponent/searchFilterComponent';
import { SummaryComponent } from './SummaryComponent/summaryComponent';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
},
{
  path: 'searchFilter',
  component: SearchFilterComponent
},
{
  path: 'summary/:skill/:source/:city',
  component: SummaryComponent
},]

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
