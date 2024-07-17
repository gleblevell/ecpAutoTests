import 'cypress-xpath'
import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    cy.wait(200)
    // открытие ггд/факт по скважине

    cy.get('button[title="Редактировать"]').eq(0).click()
    cy.contains('span', 'Направление 1').click()
    cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label > .ant-segmented-item-icon').click()
    cy.get('.ant-select-tree-title').contains('Направление 3').click()
    cy.get(':nth-child(3) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click() //
    cy.get(':nth-child(3) > .ant-select-tree-switcher').click( { multiple: true } )

})