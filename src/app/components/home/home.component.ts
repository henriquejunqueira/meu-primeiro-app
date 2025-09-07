import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = 'Alice';
  idButton = 'abcd';
  // meuBooleano = false;
  deveMostrarTitulo = false;
  // deveMostrarTitulo = true;
  listItens = ['abacaxi', 'uva', 'maçã'];
  // listItens = [{ id: '1' }, { id: '2' }];

  // atualizaBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }

  // submit() {
  //   console.log('video');
  // }

  submit() {
    this.enviaFormularioService.enviaInformacaoParaBackend(
      'enviando informação'
    );
  }
}
