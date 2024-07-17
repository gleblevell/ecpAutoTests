describe('diagramGetReport', () => {
    it('diagramGetReport', async () => {
      cy.visit('http://test.digitaldrilling.ru/login')
      cy.viewport(1920, 1080)
      cy.get('input#login').type("dev");
      cy.get('input#password').type("Pj39njWmhHaJy7J");
      cy.get('.ant-btn > span') .click()
      // авторизация

      cy.contains("1тест").click()
      cy.get('[route="analytics"]').click()
      cy.get('[route="operations"]').click()
      //Открытие страницы "Операции"

      cy.contains('button', 'Цели').click()
      cy.get('button[title="Добавление цели"]').click()
      cy.get('#idOperationCategory').type('Аварийные работы')
      cy.get('#4015').click()
      cy.get('#targetValue').type(1000)
      cy.get('#standardValue').type(500)
      cy.get('#depthStart').type(100)
      cy.get('#depthEnd').type(999)
      cy.get('button[title="Сохранить"]').click()
      // Создание новой цели

      cy.get('.ant-modal-content').should('exist', 'Аварийные работы')
      // Проверка на наличие созданной цели
    }
)})
