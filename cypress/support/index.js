//commands API

//import './API/commands_API'


//commands GUI
import './GUI/commands_gui'


//commands BD
//import './BD/commands_bd'

//commands Condições
//import './CONDITION/commands_condition'



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  const addContext = require('mochawesome/addContext')

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        //const screenshotFileName = `${runnable.parent.title} -- ${test.title}.png`
        addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
        
    }
    else {
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} -- after each hook.png`
      addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  }
})