import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации
   
     cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.contains("Автоопределенные операции").click()
      // Открытие страницы "Автоопределенные операции"


      cy.get('body').click()  
      cy.get('.dd-operation-column > .ant-btn').click();
      cy.get('#idCategory').click()
      cy.get('span[title="Бурение ротором"]').click()
      cy.get('#enabledSubsystems').click()
      cy.get('[title="АПД Ротор"] > .ant-select-item-option-content').click()
      cy.get('#dateStart').type('01.07.2024 00:00:00')
      cy.get('#dateEnd').type('10.07.2024 00:00:00')
      cy.get('#depthStart').clear().type(99)
      cy.get('#depthEnd').clear().type(199)
      // Заполнение стоки данными

      cy.get('button[title="Сохранить"]').click();
      cy.get('button[type="button"]').contains('Сохранить').click();
    // Сохранение записи

    cy.get('body').should('exist', 100)
    })