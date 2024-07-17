import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Плановые операции').click()
      cy.get('body').click()
      cy.wait(2000)
      // открытие ггд/план по скважине
     
      cy.get('button[title="Редактировать"]').eq(0).click()
      cy.xpath('//*[@id="root"]/div/div/div/div/main/div[2]/div/div/div[2]/form/div/div/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]/div/div/div/div/div/div').click()
      cy.get('.ant-segmented-item-label').eq(1).click() 
      cy.get('.ant-select-tree-title').contains('Направление 2').click() 
      cy.xpath('//*[@id="root"]/div/div/div/div/main/div[2]/div/div/div[2]/form/div/div/div/div/div/div/div[2]/table/tbody/tr[2]/td[3]/div/div/div/div/div/div').click()
      cy.get('.ant-segmented-group').eq(1).click()
      cy.get('.ant-select-tree-title').contains('Разборка КНБК').click()
      cy.wait(1500)
      cy.get('#categoryInfo').clear().type("hello from autotest")
      cy.get('#depthStart').clear().type('666');
      cy.get('#depthEnd').clear().type('777')
      cy.get('#day').clear().type('2')
      cy.get('#durationHours').clear().type('3')
      cy.get('#comment').type('hello from autotest')
      // Заполнение полей новыми данными

      cy.get('button[title="Сохранить"]').click();
      cy.get('button[type="button"]').contains('Сохранить').click();
      // Сохранение записи

    })
    