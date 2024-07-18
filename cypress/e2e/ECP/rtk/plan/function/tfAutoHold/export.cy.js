import { login } from '../../../../login';

it('tfAutoHold_export', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="auto_hold_tf"]').click()
cy.get('body').click()
// Открытие страницы автоудержание tf

cy.get('button[title="Импорт-Экспорт"]').click()
cy.contains('button', 'Экспорт').click()
// Нажатие на экспорт

cy.request('GET', 'http://test.digitaldrilling.ru/api/well/41/ProcessMapPlanAutoHoldTf/export')
.should((response) => {
expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
})
})