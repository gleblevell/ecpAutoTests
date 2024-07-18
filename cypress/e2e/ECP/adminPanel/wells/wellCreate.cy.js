describe('wellCreate', () => {
    it('adminPanel_wellCreate', async () => {
      cy.visit('http://test.digitaldrilling.ru/login')
      cy.viewport(1920, 1080)
      cy.get('input#login').type("dev");
      cy.get('input#password').type("Pj39njWmhHaJy7J");
      cy.get('.ant-btn > span') .click()
      // авторизация

      cy.get('li.ant-menu-item[title="Панель администратора"]').click()
      cy.get('[route="well"]').click()
      //Открытие страницы "Скважины"
      
      cy.get('tr > :nth-child(1) > .ant-btn').click()
      cy.get('#idCluster').type('ТЕСТОВЫЙ.ТЕСТОВЫЙ')
      cy.get('.ant-segmented-item-label').eq(1).click() 
      cy.get('.ant-select-tree-title').contains('ТЕСТОВЫЙ.ТЕСТОВЫЙ').click()
      cy.get('#caption').type('newWell')
      cy.get('#idWellType').click()
      cy.get('.ant-select-item-option-active').click()
      cy.get('#longitude').type(57.32552221)
      cy.get('#latitude').type(56.23143333)
      cy.get('#timezone').click()
      cy.get('div[title="UTC+08 :: Иркутск"]').click();
      cy.get('#telemetry').click().type('542 / кв / 7гэ / 7н')
      cy.get('.ant-select-item-option-content')


      cy.get('.ant-select-item-option-active > .ant-select-item-option-content > span').click()
      cy.get('[title="Компании"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click()
      cy.get('[style="height: 2240px; position: relative; overflow: hidden;"] > .rc-virtual-list-holder-inner > .ant-select-item-option-active > .ant-select-item-option-content').click()
      cy.get('button[title="Сохранить"]').click();
      //Заполнение и сохранение скважины еще надо добавить проверку на 200 код после создания
   

      


    })
})
  