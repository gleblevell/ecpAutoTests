import { login } from '../../login';

it('ggdPlan_deleteOperation', () => {
    login() // Вызов функции авторизации

  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Плановые операции').click()
      cy.wait(1500)
      cy.get('body').click()
      // открытие ггд/план по скважине

      cy.get('button[title="Отметить на удаление"]').eq(0).click()
      cy.get('.ant-btn-primary').eq(1).click()
      cy.get('button[type="button"]').contains('Сохранить').click();
      // Удаление первой записи на странице
      
    })
