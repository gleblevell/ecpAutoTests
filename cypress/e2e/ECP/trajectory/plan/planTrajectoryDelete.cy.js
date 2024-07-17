import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации
    
      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="plan"]').click()
      // Открытие страницы "Плановая траектория"

      cy.get('button[title="Удаление плановой траектории"]').eq(0).click()
      cy.intercept('DELETE', '/api/well/41/TrajectoryPlan/*').as('deleteRequest')
      cy.contains('OK').click()
      cy.wait('@deleteRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
      })
      // Удаление записи + проверка на то что сервер прислал 200 код после выполнения действия
      })