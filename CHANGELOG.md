# CHANGELOG

## RC-2

### Adicionado
  - Helpers para manipulação de border-radius
  - Campos readonly se comportam como disabled

### Removido

### Mudou
  - Lista UL `.sv-styled` agora é `.sv-list-styled`
  - Lista UL `.inline` agora é `.sv-list-inline`
  - Removio o line-height dos buttons do tipo link


## RC

### Adicionado
  - Novo sistema de espaçametos
  - Formulários Compactos
  - Cores foram adicionadas
  - Breadcrumbs 'thin', breadcrumbs mais simplista
  - Melhoria na apresentacao do ultimo iten do breadcrumb
  - Novos widths para inputs 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75%, 80%, 85%, 90%
  - Botões com animação
  - Opções de font weight (`sv-fw-normal`, `sv-fw-bold` e `sv-fw-thin`)
  - Estilos de texto `sv-ts-i`, `sv-ts-u`, `sv-ts-lt`;
  - Transformação de texto `sv-tt-u`, `sv-tt-l`, `sv-tt-c`;
  - Novos modificadores de tamanho do texto: `sv-text-large`, `sv-text-small`, `sv-text-smaller`
  - Alinhamentos para elementos flex `sv-flex-left, sv-flex-right, sv-flex-center e sv-flex-justify`
  - listas OL `sv-ol`


### Removido

  - `.sv-button marged`  (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-vertical-marged-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-vertical-marged-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-vertical-marged-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-vertical-marged-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-vertical-marged-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-marged-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-marged-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-marged-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-marged-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-marged-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-padd-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-padd-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-padd-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-padd-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-horizontal-padd-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-left-marged-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-left-marged-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-left-marged-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-left-marged-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-left-marged-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-right-marged-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-right-marged-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-right-marged-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-right-marged-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-right-marged-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-5` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-15` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-25` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-50` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-75` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-top-marged-100` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-padd-5`  (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-padd-10` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-padd-15 ` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-padd-25 ` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-padd-50 ` (não é mais necessário apoós o sistema de espaçamentos)
  - `.sv-thin-text`
  - `.sv-header`
  - `.sv-footer`
  - `.sv-title`
  - `.sv-no-margins`


### Mudou
  - `.sv-text-bold` agora é `.sv-fw-bold`
  - Font Base foi ajustada(Tamanho, shape, etc...)
  - a classe `.hidden` foi alterada para `.sv-hidden`
  - A margem inferior do breadcrumb foi reduzida
  - normalize.css atualizado para versão v7.0.0

## Beta 3

  - Added tag component
  - Button link disabled (Fix: #7)
  - Form modificators has changed (Fix: #10):
    - --right => on-right
    - --center => on-center
    - --first => at-first
    - --last => at-last
  - Form helper data-error can be useb without data-info (fix #3)
  - New docs, components and patterns are now in two distinct sections
