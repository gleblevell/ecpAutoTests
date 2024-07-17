describe('createNewDriller', () => {
    it('createNewDriller', async () => {
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
      
      cy.get('button.ant-btn').contains('Список бурильщиков').click();
      cy.get('button.ant-btn').contains('Список бурильщиков').click();
      cy.get('button[title="Добавление бурильщика"]').click()
      cy.get('#surname').type('driller')
      cy.get('#name').type('was created')
      cy.get('#patronymic').type('by autotest')
      cy.get('button[title="Сохранить"]').click() 
      // Создание нового бурильщика

    })
})
