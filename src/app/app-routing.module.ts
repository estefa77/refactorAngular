import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';

// ]export { RouterModule } from '@angular/router';

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'work', component: WorkComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];



@NgModule({
    imports: [RouterModule.forRoot( app_routes, {useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModulo { }