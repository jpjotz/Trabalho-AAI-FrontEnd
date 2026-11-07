import { Service } from '@angular/core';
import { ITarefa } from '../models/tarefa.model';

@Service()
export class TarefaService {

  private tarefas: ITarefa[] = [];

  cadastrar(tarefa: ITarefa): void {
    this.tarefas.push(tarefa);
  }

  listar(): ITarefa[] {
    return this.tarefas;
  }

  atualizar(tarefaAtualizada: ITarefa): void {
    const index = this.tarefas.findIndex(tarefa => tarefa.id === tarefaAtualizada.id);

    if(index !== -1) {
      this.tarefas[index] = tarefaAtualizada;
    }
  }

  deletar(id: string): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }
}
