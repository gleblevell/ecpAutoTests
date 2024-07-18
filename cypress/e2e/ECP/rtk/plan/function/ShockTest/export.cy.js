import { login } from '../../../../login';

it('shockTest_exportSample', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="shock_test"]').click()
cy.get('body').click()
// Открытие страницы shockTest

cy.get('button[title="Импорт-Экспорт"]').click()
cy.contains('button', 'Экспорт').click()
// Нажатие на экспорт

cy.request('GET', 'http://test.digitaldrilling.ru/well/41/ShockTest')
.should((response) => {
expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
});


})