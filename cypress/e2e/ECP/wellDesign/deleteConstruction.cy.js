import { login } from '../login';

it('wellDesign_deleteConstruction', () => {
    login() // Вызов функции авторизации

    cy.contains("1тест").click()
    cy.get('[route="process_map"]').click()
    cy.get('[route="plan"]').click()
    cy.get('[route="well_designs"]').click()
    //Открытие страницы "Конструкция скважины"

      
      cy.get('button[title="Удаление конструкции"]').eq(0).click()
      cy.intercept('DELETE', 'http://test.digitaldrilling.ru/api/well/41/WellSectionPlan?*').as('deleteRequest')
      cy.contains('button', 'OK').click()
      cy.wait('@deleteRequest').its('response.statusCode').should('eq', 200) // проверяем, что получаем ответ с кодом 200
         // Удаление и проверка на удаление
    })

