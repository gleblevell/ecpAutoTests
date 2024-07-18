describe('analytics_drillerNameChange', () => {
    it('drillerNameChange', async () => {
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
      cy.get('button[title="Редактирование бурильщика"]').eq(0).click()
      cy.get('#surname').clear().type('driller')
      cy.get('#name').clear().type('was changed')
      cy.get('#patronymic').clear().type('by autotest')
      cy.get('button[title="Сохранить"]').click()
      // Изменение данных бурильщика      
    })
})
