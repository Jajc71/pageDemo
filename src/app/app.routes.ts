import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/layout/layout.component')
    }
];
