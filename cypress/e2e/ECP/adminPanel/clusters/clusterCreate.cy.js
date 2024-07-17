describe('clusterCreate', () => {
    it('clusterCreate', async () => {
      cy.visit('http://test.digitaldrilling.ru/login')
      cy.viewport(1920, 1080)
      cy.get('input#login').type("dev");
      cy.get('input#password').type("Pj39njWmhHaJy7J");
      cy.get('.ant-btn > span') .click()
      // авторизация

      cy.get('li.ant-menu-item[title="Панель администратора"]').click()

      cy.get('[route="cluster"]').click()
      cy.get('tr > :nth-child(1) > .ant-btn').click()
      
      cy.get('#idDeposit').click()
      cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
      cy.get('#caption').type('newCluster')
      cy.get('#longitude').type(57.1488132)
      cy.get('#latitude').type(56.12345122)
      cy.get('#timezone').click()
      cy.get('div[title="UTC+08 :: Иркутск"]').click();
      cy.get('button[title="Сохранить"]').click();
      // Заполнение и сохранение куста



    })})