Passo a passo:
1-Baixe e descompacte o Jmeter.

2-Baixe o Plugin Manager do Jmeter.

3-Coloque o arquivo .jar do plugin manager na pasta lib/ext do diretório do Jmeter.

4-Para abrir o Jmeter, abra o terminal no diretório do jmeter e rode o comando:  ./bin/jmeter

5-Copie o arquivo PT-Basico-API-Performance.jmx(que fica no diretório: cypress/performance/) e cole na pasta raiz do Jmeter.

6-Deixe o Jmeter instalar os plugins necessários.

7-Para gerar a massa de teste, no diretório raiz do projeto de automação(projeto_base_gui_api_tests), rode o comando: npm run create_10_users_products

8-Após finalizar a execução da criação de massa, no Jmeter abra a árvore do projeto, selecione "Massa - Emails" e em Filename > botão "Browse..." selecione o arquivo "Massa-Emails.txt" que fica em cypresss/fixture/data/

9-Selecione "Massa - Id's de Produtos" e em Filename > botão "Browse..." selecione o arquivo "Massa-Ids-Produtos.txt" que fica em cypresss/fixture/data/


10-Em "Grupo de Usuários Virtuais" defina o número de usuários simultâneos no campo "Numbers os Threads (users)". Obs: Por favor, por hora, nada acima de 8.


11-Clique no botão "Clean All"<ícone das duas vassouras>  (caso hajam resultados de execução, eles serão limpos).


12-Clique no botão "Start" para executar o teste.

Veja os resultados em "Relatório de Sumário"(Summary Report) ou em "Ver Árvore de Resultados"(View Results Tree)



13-Para executar o teste via linha de comando e gerar um dashboard do Jmeter com os resultados dos testes. Abra o terminal na pasta do jmeter e execute o comando(Necessário salvar o Plano de Teste caso tenha feito alguma alteração): 

./bin/jmeter -n -t PT-Basico-API-Performance.jmx -l resultado.jtl -e -o jmeter_dashboard_pt_basico_performance

Obs: porta 4445 deve estar liberada


14- A cada nova execução é necessário apagar o arquivo de resultado (results.jtl) e a pasta que é gerada com o resultado do Dashboard (jmeter_dashboard_pt_basico_performance) ou, se preferir, coloque outros nomes na linha de comando.


15-Para visualizar o Dashboard com os resultados no seu navegador, entre no diretório(dentro da pasta do jmeter) e encontre o diretório  jmeter_dashboard_pt_basico_performance. Lá dentro, clique em index.html