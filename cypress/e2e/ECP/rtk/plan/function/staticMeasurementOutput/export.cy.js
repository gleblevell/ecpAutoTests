import { login } from '../../../../login';

it('staticMeasurementOutput_export', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="static_measurement_output"]').click()
cy.get('body').click()
// Открытие страницы автоудержание Выход статического замера



cy.intercept('GET', '/api/well/41/ProcessMapPlanStaticMeasurementOutput/export').as('putRequest'); 
//Перехват запроса

cy.get('button[title="Импорт-Экспорт"]').click()
cy.contains('button', 'Экспорт').click()
// Нажатие на экспорт

cy.wait('@getRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Проверка на 200 код при нажатии на экспорт

})})