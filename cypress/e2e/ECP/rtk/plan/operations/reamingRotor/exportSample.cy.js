import { login } from '../../../../login';

it('reamingRotor_exportSample', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="rotor"]').click()
cy.get('body').click()
// Открытие страницы "Выход на режим" 

      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.contains('button', 'Скачать шаблон').click()
      // Нажатие на экспорт

      cy.request('GET', 'http://test.digitaldrilling.ru/well/41/telemetry/trajectory/plan')
  .should((response) => {
    expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
  });

      
    })