import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //declaração da variável de erro
  msg_erro:string|null = null;


  constructor(
    private autenticacaoService:AutenticacaoService,
    private rota:Router
  ){}



//inicialização do formulário Reativo
form = new FormGroup({
  usuario:new FormControl(),
  senha: new FormControl()
})

//método para testar o login
onLogin(){
  console.log(this.form.value);

  this.autenticacaoService.autenticaUsuario(this.form.value.usuario,
    this.form.value.senha)
    .subscribe({
      next:(resposta)=>{
        this.msg_erro = null;
        this.rota.navigate(['home']);
      },
      error:(erro)=>{
        console.log(erro)
        switch(erro.status){
          case 401:
            this.msg_erro = 'Usuário ou Senha inválido'
            break;
            case 500:
              this.msg_erro = 'Erro no Servidor, tenta novamente mais tarde'
            break;
        }
      }
    })

}




}
