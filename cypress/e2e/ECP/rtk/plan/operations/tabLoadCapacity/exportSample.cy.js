import { login } from '../../../../login';

it('tabLoadCapacity_ExportSample', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="load_capacity"]').click()
cy.get('body').click()
// Открытие страницы "Выработка нагрузки" 

      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.contains('button', 'Скачать шаблон').click()
      // Нажатие на экспорт

      cy.request('GET', 'http://test.digitaldrilling.ru/well/41/telemetry/trajectory/plan')
  .should((response) => {
    expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
  });

      
    })