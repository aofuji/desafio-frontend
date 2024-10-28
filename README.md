# Pre requisitos

[Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.
Nodejs v20.11.0

## Servidor de desenvolvimento

Execute `ng serve` no terminal. Entre no link `http://localhost:4200/`

## Documentação
### Componentes compartilhados, classes, diretivas
shared
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

### Components Layout
main
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
### Paginas
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

### Enum e interfaces
│   ├── enum
│   │   └── category.ts
│   ├── icons-provider.ts
│   ├── interface
│   │   ├── Menu.ts
│   │   └── Register.ts
