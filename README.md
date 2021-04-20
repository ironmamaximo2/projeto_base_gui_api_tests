# projeto_base_gui_api_tests

#Pré-condições
-Node instalado
-npm instalado
-Docker instalado

#Instruções para Execução dos testes
-No diretório raiz do projeto rodar os seguintes comandos:
npm i

#Alterar o apontamento da api_url do cypress para exibir o resultado dos testes no Sorry Cypress:

npm run altUrlApiCypress

#Rodar os testes
Abrindo o Cypress, no terminal diretório raiz do projeto rodar:

npm run open

Sem abrir o executor do Cypress, mas exibindo o browser(Firefox), no terminal diretório raiz do projeto rodar:

npm run test

Sem abrir o executor do Cypress, e em modo headless sem exibir o browser:
No terminal diretório raiz do projeto rodar:

npm run test_all

Após a execução dos testes, em modo headless vc poderá conferir as evidências de teste em:

https://sorry-cypress-demo.herokuapp.com/projeto_base/runs


#ESTRUTURA DE DIRETÓRIOS

#Ambientes (dev/hml/stage/prod/etc)
cypress/config/
Obs: Por padrão, o projeto "olha" para hml, esta configuração pode ser alterada ou vc pode fazer o cypress executar olhando para outros ambiente via scripts do arquivo package.json ou via linha de comando

#Esteira(Jenkinsfile)
cypress/devops

#Dockerfile
Pasta raiz do projeto - Imagem Docker com Node para execução dos testes na pipeline

#Arquivos json para serem usados como massa de teste ou para gerar massa de teste
cypress/fixtures

#Arquivos de teste (especificações de teste - arquivos executáveis de teste) - Testes de Interface Gráfica de Usuário
cypress/integration/GUI

#Arquivos de teste (especificações de teste - arquivos executáveis de teste) - Testes de API(Application Programming Interface)
cypress/integration/API

#Arquivos de teste (especificações de teste - arquivos executáveis de teste) - Execuções de teste que possuem o propósito de criar massa para a execução de outros testes
cypress/integration/Massa_de_Testes

#Arquivo com configurações de ViewPorts para simular Desktop, Tablet e Mobile
cypress/massa_dados

#Configuração de Plugins do Cypress
cypress/plugins

#Relatórios de execução dos testes
cypress/reports

#Evidências(Imagens) de execução dos testes
cypress/screenshots

#Comandos Customizados que visam fazer interações com a GUI (Interface Gráfica do Usuário)
cypress/support/GUI

#Comandos Customizados que visam fazer interações com a API (Application Programming Interface)
cypress/support/API

#Comandos Customizados que visam fazer interações com BD (Banco de Dados)
cypress/support/BD

#Arquivos onde os seletores das páginas(telas) são identificados unicamente para facilitar a manutenção
cypress/support/page_elements

#Arquivo onde foi configurado os prints ao final dos relórios e onde são indicados os caminhos dos arquivos de comando customizados 
cypress/support/index.js

#Arquivo onde são criadas funções facilitadoras para re-uso no dia a dia
cypress/support/utility.js

#Diretório onde são baixadas as dependencias do projeto(bibliotecas)
cypress/node_modules

#Arquivo onde se configura os arquivos e diretórios que serão ignorados pelo GIT(repositório)
cypress/.gitignore

#Arquivo que indica as dependencias de desenvolvimento e onde se criam os scrips como atalhos a linhas de comando
cypress/package.json

#Arquivo com explicações básicas da estrutura e uso do projeto
cypress/README



Comandos, terminal, diretório raiz do projeto:


Instalar Node e NPM
Instalar as dependencias do projeto: npm i
Abrir o cypress: npm run open
Limpar relatórios: npm run clean_reports
Limpar screenshots: npm run clean_screenshots
Limpar vídeos: npm run clean_videos
Limpar relatórios, screenshots e vídeos: npm run clean_all
