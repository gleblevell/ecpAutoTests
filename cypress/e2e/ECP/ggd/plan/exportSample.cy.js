import { login } from '../../login';

it('ggdPlanExportSample', () => {
    login() // Вызов функции авторизации
    
  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Плановые операции').click()
      cy.get('body').click()
      cy.wait(2000)
      // открытие ггд/план по скважине
    
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.contains('button', 'Скачать шаблон').click()
      // Нажатие на экспорт

      cy.request('GET', 'http://test.digitaldrilling.ru/well/41/telemetry/trajectory/plan')
  .should((response) => {
    expect(response.status).to.equal(200); // Проверка, что код ответа нажатия на кнопку равен 200
  });

      
    })
