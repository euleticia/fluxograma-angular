import { Component } from '@angular/core';

@Component({
  selector: 'app-fluxo-component',
  templateUrl: './fluxo-component.component.html',
  styleUrl: './fluxo-component.component.scss'
})
export class FluxoComponent {
  formas: string[] = ['Quadrado', 'Triângulo'];
  fluxograma: string[] = [];

  onDragStart(event: DragEvent, forma: string) {
    event.dataTransfer?.setData('text/plain', forma);
  }

  onDrop(event: DragEvent) {
    const forma = event.dataTransfer?.getData('text/plain');
    if (forma) {
      this.fluxograma.push(forma);
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  removeItem(forma: string) {
    const index = this.fluxograma.indexOf(forma);
    if (index !== -1) {
      this.fluxograma.splice(index, 1);
    }
  }
}