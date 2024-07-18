import 'cypress-xpath';
import { login } from '../../login';

it('ggdPlan_changeOperation', () => {
    login() // Вызов функции авторизации

  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Плановые операции').click()
      cy.get('body').click()
      // открытие ггд/план по скважине
     
      cy.get('button[title="Редактировать"]').eq(0).click()
      cy.get('#idWellSectionType').click( {force: true} )
      cy.get('.ant-segmented-item-label').eq(3).click({force: true})
      cy.get('.ant-select-tree-title').contains('Направление 3').click()
      cy.get('#idCategory').click( {force: true} )
      cy.get('.ant-segmented-item-label').eq(5).click({force: true})
      cy.get('span.ant-select-tree-title').contains('Бурение').click()
      cy.get('#categoryInfo').clear().type("hello from autotest")
      cy.get('#depthStart').clear().type('666');
      cy.get('#depthEnd').clear().type('777')
      cy.get('#day').clear().type('2')
      cy.get('#durationHours').clear().type('3')
      cy.get('#comment').type('hello from autotest')
      // Заполнение полей новыми данными
      
      cy.intercept('PUT', '/api/well/41/wellOperations').as('putRequest'); 
      //Перехват запроса PUT
      
      cy.get('button[title="Сохранить"]').click();
      cy.get('button[type="button"]').contains('Сохранить').click();
      cy.wait('@putRequest').then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
      // Cохранение и проверка 
      })
  })
  