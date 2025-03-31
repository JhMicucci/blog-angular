import { Routes, RouterLink } from '@angular/router';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        'path':'',
        component: HomeComponent
    },
    {
        path:'content/:id',
        component:ContentComponent
    }
    
];
