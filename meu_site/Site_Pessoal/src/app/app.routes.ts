import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent),
    children: [
      // Redireciona rota inicial para 'home'
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contacts', component: ContactsComponent },
    ]
  }
];