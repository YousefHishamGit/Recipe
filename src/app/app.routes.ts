import { Routes } from '@angular/router';
import { NavBarComponent } from './components/navBar/nav-bar/nav-bar.component';
import { DescriptionComponent } from './components/description/description.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full",
    },
    {
        path:'home',
        title:'Home',
        component:NavBarComponent,
    },
    {
        path: 'desc/:id',
        title: 'Description',
        component: DescriptionComponent,
        
        
    },
    {
        path:"**",
        component:NavBarComponent,
        
    }

];

