# Pre requisitos

[Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
Nodejs v20.11.0

## Servidor de desenvolvimento

Execute `ng serve` no terminal. Entre no link `http://localhost:4200/`

## Documentação
  Criado tela de cadastro `/register`
  Criado tela de listagem `/registers`
  
  Criado service de `create`, `read`, `update` e `delete` utilizando localStorage.
  Path `src/app/shared/services/register.service.ts`
  
  Criado service manipulacao das lib Rxjs no sideBar
  Path `src/app/shared/services/sidebar.service.ts`

  Criado components `BaseComponent` sendo herdados nos components de formularios, facilitando nas validações e metodos.
  Path `src/app/shared/class/base.component.ts`



### Estrutura de pasta

├── app
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── enum
│   │   └── category.ts
│   ├── icons-provider.ts
│   ├── interface
│   │   ├── Menu.ts
│   │   └── Register.ts
│   ├── main
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   ├── header.component.scss
│   │   │   ├── header.component.spec.ts
│   │   │   └── header.component.ts
│   │   ├── layout
│   │   │   ├── layout.component.html
│   │   │   ├── layout.component.scss
│   │   │   ├── layout.component.spec.ts
│   │   │   └── layout.component.ts
│   │   └── sidebar
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.scss
│   │       ├── sidebar.component.spec.ts
│   │       └── sidebar.component.ts
│   ├── pages
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.routes.ts
│   │   ├── register
│   │   │   ├── register.component.html
│   │   │   ├── register.component.scss
│   │   │   ├── register.component.spec.ts
│   │   │   ├── register.component.ts
│   │   │   └── register.routes.ts
│   │   └── registers
│   │       ├── registers.component.html
│   │       ├── registers.component.scss
│   │       ├── registers.component.spec.ts
│   │       ├── registers.component.ts
│   │       └── registers.routes.ts
│   └── shared
│       ├── class
│       │   ├── base-service.ts
│       │   └── base.component.ts
│       ├── components
│       │   ├── form
│       │   │   ├── form.component.html
│       │   │   ├── form.component.scss
│       │   │   ├── form.component.spec.ts
│       │   │   └── form.component.ts
│       │   └── list
│       │       ├── list.component.html
│       │       ├── list.component.scss
│       │       ├── list.component.spec.ts
│       │       └── list.component.ts
│       ├── directives
│       │   ├── currency.directive.ts
│       │   └── only-number.directive.ts
│       └── services
│           ├── register.service.spec.ts
│           ├── register.service.ts
│           ├── sidebar.service.spec.ts
│           └── sidebar.service.ts
