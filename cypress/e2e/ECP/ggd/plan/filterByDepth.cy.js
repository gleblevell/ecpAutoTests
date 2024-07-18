import { login } from '../../login';

it('ggdPlan_filterByDepth', () => {
    login() // Вызов функции авторизации

  
    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    // открытие ггд/факт по скважине

      cy.get(':nth-child(2) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(10)
      cy.get(':nth-child(3) > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type(50)

      cy.get('button[title="Редактировать"]').should('have.length.at.most', 2);

    })
