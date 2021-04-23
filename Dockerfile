FROM cypress/browsers:chrome69
RUN npm i cypress
RUN sed -i -e 's|api_url:.*$|api_url: "https://sorry-cypress-demo-director.herokuapp.com/"|g' /*/.cache/Cypress/*/Cypress/resources/app/packages/server/config/app.yml

WORKDIR /home/projeto_base_gui_api_tests/

COPY . /home/projeto_base_gui_api_tests/

RUN CI=true npm i





