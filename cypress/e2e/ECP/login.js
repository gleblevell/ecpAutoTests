export function login() {
  cy.visit('http://test.digitaldrilling.ru/login')
    cy.viewport(1920, 1080)
    cy.get('input#login').type("dev");
    cy.get('input#password').type("Pj39njWmhHaJy7J");
    cy.get('.ant-btn > span') .click()
}