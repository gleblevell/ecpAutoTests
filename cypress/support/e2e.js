// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
    cy.visit('http://test.digitaldrilling.ru/login')
    cy.get('input#login').type(username);
    cy.get('input#password').type(password);
    cy.get('.ant-btn > span') .click()

      cy.url().should('contain', '/test.digitaldrilling.ru')
    })
  })