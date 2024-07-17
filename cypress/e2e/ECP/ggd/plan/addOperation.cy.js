import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Плановые операции').click()
    cy.get('body').click()
    // открытие ггд/план по скважине
    
    cy.get('.dd-operation-column > .ant-btn').click()
    cy.get('#idWellSectionType').click()
    cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
    cy.get('.ant-select-tree-title').contains('Направление 1').click()
    cy.get('input#idCategory').click()
    cy.get(':nth-child(6) > .ant-select-dropdown > :nth-child(1) > :nth-child(1) > [style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label > .ant-segmented-item-icon').click()
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
