import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Alice';
  idButton = 'abcd';
  // meuBooleano = false;

  // atualizaBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }

  // submit() {
  //   console.log('video');
  // }

  submit(event: any) {
    console.log(event);
  }
}
