import { login } from '../../../../login';

it('staticMeasurementOutput_exportSample', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="static_measurement_output"]').click()
cy.get('body').click()
// Открытие страницы автоудержание Выход статического замера

cy.get('button[title="Импорт-Экспорт"]').click()
cy.contains('button', 'Скачать шаблон').click()
// Нажатие на экспорт

cy.request('GET', 'http://test.digitaldrilling.ru/api/well/41/ProcessMapPlanStaticMeasurementOutput/template')
.should((response) => {
expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
});


})