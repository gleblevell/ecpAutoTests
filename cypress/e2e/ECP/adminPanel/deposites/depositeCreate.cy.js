describe('depositeCreate', () => {
    it('depositeCreate', async () => {
      cy.visit('http://test.digitaldrilling.ru/login')
      cy.viewport(1920, 1080)
      cy.get('input#login').type("dev");
      cy.get('input#password').type("Pj39njWmhHaJy7J");
      cy.get('.ant-btn > span') .click()
      // авторизация

      cy.get('li.ant-menu-item[title="Панель администратора"]').click()
      cy.get('[route="deposit"]').click()

      cy.get('tr > :nth-child(1) > .ant-btn').click()
      cy.get('#caption').type('newDeposite')
      cy.get('#longitude').type(57.85562221)
      cy.get('#latitude').type(56.23147222)
      cy.get('#timezone').click()
      cy.get('div[title="UTC+08 :: Иркутск"]').click();
      cy.get('button[title="Сохранить"]').click();
      //Создание нового месторождения
      
     // Добавить проверку на корректность сохранения
     
    })
    })