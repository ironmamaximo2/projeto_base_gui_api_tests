pipeline {
  agent any

  tools { nodejs 'node' }

  environment {
        PATH = '/*/.cache/Cypress/*/Cypress/resources/app/packages/server/config/app.yml'
  }

  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ironmamaximo2/projeto_base_gui_api_tests.git'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

  /*  stage('Change api_url Cypress') {
      steps {
        sh ''''sed -i //'-e'//'''
        sh '''sed -i //'-e'//'''
        sh '''sed -i -e '//s|api_url:.*$|api_url: |g//' '''
        sh '''sed -i -e '//s|api_url:.*$|api_url: "//https://sorry-cypress-demo-director.herokuapp.com///"|g//' $PATH'''
        sh '''sed -i -e '//'''
      }
    } */

    stage('Change api_url Cypress') {
      steps {
        sh '''sed -i -e '//s|api_url:.*$|api_url: "//https://sorry-cypress-demo-director.herokuapp.com///"|g//' $PATH'''
      }
    }

    stage('Test') {
      steps {
        sh 'npm test_all'
        sh 'test'
      }
    }
  }
}
