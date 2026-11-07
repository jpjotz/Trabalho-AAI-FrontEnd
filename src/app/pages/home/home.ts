import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa } from '../../models/tarefa.model';

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  private tarefaService = inject(TarefaService);

  dataAtual: string = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  get tarefas(): ITarefa[] {
    return this.tarefaService.listar();
  }
}
