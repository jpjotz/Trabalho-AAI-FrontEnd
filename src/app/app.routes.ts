import { Routes } from '@angular/router';

import { TarefaNova } from './pages/tarefa-nova/tarefa-nova';
import { TarefaAtualiza } from './pages/tarefa-atualiza/tarefa-atualiza';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },

  {
    path: 'tarefa-nova',
    component: TarefaNova
  },

  {
    path: 'tarefa-atualiza/:id',
    component: TarefaAtualiza
  },

  {
    path: '**',
    redirectTo: ''
  }
];
