import { Routes } from '@angular/router';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        'path':'',
        'component': HomeComponent
    },
    
];
