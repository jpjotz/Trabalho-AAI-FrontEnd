import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  imports: [FormsModule],
  selector: 'app-tarefa-nova',
  styleUrl: './tarefa-nova.css',
  templateUrl: './tarefa-nova.html',
})
export class TarefaNova {
  private tarefaService = inject(TarefaService);
  private router = inject(Router);

  tarefa: ITarefa = createITarefa();

  cadastrar(): void {
    this.tarefa.id = crypto.randomUUID();

    this.tarefaService.cadastrar(this.tarefa);

    this.router.navigate(['/']);
  }
}
