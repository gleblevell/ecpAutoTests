import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="static_measurement_output"]').click()
cy.get('body').click()
// Открытие страницы автоудержание Выход статического замера

cy.get('button[title="Отметить на удаление"]').eq(0).click()
cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()
cy.intercept('DELETE', '/api/well/41/ProcessMapPlanStaticMeasurementOutput', (req) => {
    req.reply({ statusCode: 200 })
  }).as('deleteRequest')
// Перехват запроса на удаление

cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@deleteRequest').its('response.statusCode').should('eq', 200)
// Удаление и проверка удаления
})