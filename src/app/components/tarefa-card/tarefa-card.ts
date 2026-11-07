import { Component, input, output } from '@angular/core';
import { ITarefa } from '../../models/tarefa.model';

@Component({
  imports: [],
  selector: 'app-tarefa-card',
  styleUrl: './tarefa-card.css',
  templateUrl: './tarefa-card.html',
})
export class TarefaCard {

  tarefa = input.required<ITarefa>();

  deletar = output<string>();

  editar = output<string>();
}
