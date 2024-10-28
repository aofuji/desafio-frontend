# Pre requisitos

[Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.<br>
Nodejs v20.11.0 <br>
Npm v10.2.4 <br>
Nvm 0.39.1

## Servidor de desenvolvimento

Execute `ng serve` no terminal. Entre no link `http://localhost:4200/` ou `npm run start`

## Documentação
Criação do projeto com a opção `Angular Standalone`
### Component Design Interface
ng-zorro-antd 17.4.1

### Feature
  Criado tela de cadastro `/register` <br>
  Criado tela de listagem `/registers` <br>
  Path: `src/app/pages`
### Services  
  Criado service e os metodos `create`, `read`, `update` e `delete` e sendo utilizado localStorage. <br>
  Path `src/app/shared/services/register.service.ts`
  
  Criado service manipulacao das lib Rxjs no sideBar <br>
  Path `src/app/shared/services/sidebar.service.ts`
### Classes
  Criado components `BaseComponent` sendo herdados nos components de formularios, facilitando nas validações e metodos. <br>
  Path `src/app/shared/class/base.component.ts`

  Criado classe abstratas `BaseService`para reduzir a duplicação de código <br>
  Path `src/app/shared/class/base-service.ts`

### Diretivas
  Criado `Diretiva` de formatação de valores em moeda local <br>
  Path: `src/app/shared/directives/currency.directive.ts` <br>

  Criado `Diretiva` apenas para exibir somente números <br>
  Path: `src/app/shared/directives/only-number.directive.ts` <br>

### Components Layout
  Criado components na pasta `Main` onde se encontra os componets de estrutura incial do projeto `header` ,`sdeibar`e `Layout`. <br>
  Path: `src/app/main`

### Component Compartilhado
  Criado component `FormComponent` e `listComponent` que são os components de formulario e listagem, podendo ser reutilizado em outros components <br>
  Path: `src/app/shared/components`
