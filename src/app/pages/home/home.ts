import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa } from '../../models/tarefa.model';
import { TarefaCard } from '../../components/tarefa-card/tarefa-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, TarefaCard, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private tarefaService = inject(TarefaService);

  dataAtual: string = new Date().toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  get tarefas(): ITarefa[] {
    return this.tarefaService.listar();
  }

  deletar(id: string): void {
    this.tarefaService.deletar(id);
  }
}
