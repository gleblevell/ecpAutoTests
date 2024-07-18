import 'cypress-xpath'
import { login } from '../../login';

it('ggdFact_changeOperation', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    cy.wait(200)
    // открытие ггд/факт по скважине

    cy.get('button[title="Редактировать"]').eq(0).click()
    cy.get('#idWellSectionType').click( {force: true} )
    cy.get('.ant-segmented-item-label').eq(3).click({force: true})
    cy.get('.ant-select-tree-title').contains('Направление 3').click()
    cy.get('#idCategory').click( {force: true} )
    cy.get('.ant-segmented-item-label').eq(3).click({force: true})
    cy.get('span.ant-select-tree-title').contains('Бурение').click()
    cy.get('#categoryInfo').type("text")
    cy.get('#depthStart').clear().type('299');
    cy.get('#depthEnd').clear().type('399')
    cy.get('#day').clear().type('1')
    cy.get('#durationHours').clear().type('2')
    cy.get('#comment').type('hello from autotest')

    cy.intercept('PUT', '/api/well/41/wellOperations').as('putRequest'); 
    //Перехват запроса PUT
    
    cy.get('button[title="Сохранить"]').click();
    cy.get('button[type="button"]').contains('Сохранить').click();
    cy.wait('@putRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
    // Cохранение и проверка 
    })
})
