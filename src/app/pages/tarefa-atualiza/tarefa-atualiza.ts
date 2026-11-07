import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { ITarefa } from '../../models/tarefa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-tarefa-atualiza',
  styleUrl: './tarefa-atualiza.css',
  templateUrl: './tarefa-atualiza.html',
})
export class TarefaAtualiza {
  private activatedRoute = inject(ActivatedRoute);
  private tarefaService = inject(TarefaService);
  private router = inject(Router);

  id = this.activatedRoute.snapshot.paramMap.get('id');

  tarefaOriginal = this.tarefaService.buscarPorId(this.id!);

  tarefa: ITarefa | undefined = this.tarefaOriginal ? { ...this.tarefaOriginal } : undefined;

  atualizar(): void {
    this.tarefaService.atualizar(this.tarefa!);

    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
