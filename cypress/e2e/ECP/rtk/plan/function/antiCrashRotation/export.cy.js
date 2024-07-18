import { login } from '../../../../login';

it('antiCrushRotation_exportSample', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="anti_crash_rotation"]').click()
cy.get('body').click()
// Открытие страницы Противоаварийное вращение


cy.get('button[title="Импорт-Экспорт"]').click()
cy.contains('button', 'Экспорт').click()
// Нажатие на экспорт

cy.request('GET', '/api/well/41/ProcessMapPlanAntiCrashRotation')
.should((response) => {
expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
});


})