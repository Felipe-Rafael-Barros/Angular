import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent),
    children: [
      // Redireciona rota vazia para 'home'
      { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirecionei para a pagina home, deixando a app.component.html exibindo conteudo comum a todas as outas páginas
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'contacts', component: ContactsComponent },
    ]
  }
];