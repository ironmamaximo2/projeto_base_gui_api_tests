
// <reference types="cypress" />


const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'projeto_base_gui_api_tests/cypress/config', `${file}.json`)

  return fs.readJSON(pathToConfigFile)
}

/**
 * @type {Cypress.PluginConfig}
 */


module.exports = (on, config) => {
  const file = config.env.configFile  || 'hml'
  //return getConfigurationByFile(file)
  on("task", {
    dbQuery: (query) => require("cypress-postgres")(query.query, config.env.db)
    //const file = config.env.configFile || 'staging'
   
    
  });

  
  on('before:browser:launch', (browser = {}, launchOptions) => {
    //launchOptions.args.push('--use-fake-device-for-media-stream')
    //launchOptions.args.push('--use-fake-ui-for-media-stream')

    return launchOptions
  }
  );
  //const file = config.env.configFile || 'staging'
  return getConfigurationByFile(file)
};
