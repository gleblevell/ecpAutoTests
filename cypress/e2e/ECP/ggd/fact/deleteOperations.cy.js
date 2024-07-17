import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    // открытие ггд/факт по скважине
    
cy.get('button[title="Отметить на удаление"]').eq(0).click()
cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()
cy.intercept('DELETE', '/api/well/41/wellOperations', (req) => {
    req.reply({ statusCode: 200 })
  }).as('deleteRequest')
// Перехват запроса на удаление

cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@deleteRequest').its('response.statusCode').should('eq', 200)
// Удаление и проверка удаления


    
  //*  cy.get('button[title="Отметить на удаление"]').eq(0).click()
// cy.get('.ant-btn-primary').eq(1).click()
 //   cy.get('button[type="button"]').contains('Сохранить').click();
 // Удаление первой записи на странице
})