import { login } from '../../login';

it('ggdFact_addOperation', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    // открытие ггд/факт по скважине
    
    cy.get('.dd-operation-column > .ant-btn').click()
    cy.get('#idWellSectionType').click()
    cy.get('.ant-segmented-item-label').eq(3).click({force: true})
    cy.get('.ant-select-tree-title').contains('Направление 1').click()
    cy.get('input#idCategory').click()
    cy.get('.ant-segmented-item-label').eq(3).click({force: true})
    cy.get('span.ant-select-tree-title').contains('Разборка КНБК').click()
    cy.get('#categoryInfo').type("text")
    cy.get('#depthStart').clear().type('1000');
    cy.get('#depthEnd').clear().type('2000')
    cy.get('#day').clear().type('1')
    cy.get('#durationHours').clear().type('2')
    cy.get('#comment').type('hello from autotest')
    // Заполнение строки

    cy.get('button[title="Сохранить"]').click();
    cy.get('button[type="button"]').contains('Сохранить').click();
    // Сохранение записи
  })
