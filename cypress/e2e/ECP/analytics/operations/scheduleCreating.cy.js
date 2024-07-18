describe('analytics_scheduleCreating', () => {
    it('scheduleCreating', async () => {
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

  
      
      cy.get('button.ant-btn').contains('Расписание бурильщиков').click();
      cy.get('button.ant-btn').contains('Расписание бурильщиков').click();
      cy.get('button[title="Добавление расписания"]').click();
      cy.get('#idDriller').click()
      cy.contains('Евстратенко Александр Иванович').click()
      cy.get('#drillStart').click().type('2024-06-01 00:00:00')
      cy.get('#drillEnd').click().type('2024-06-29 00:00:00')
      cy.get('#shiftStart').click().type('08:00:00')
      cy.get('#shiftEnd').click().type('20:00:00')
      cy.get('button[title="Сохранить"]').click()
      cy.get('button[title="Сохранить"]').click()
      // Создание нового расписания

      cy.contains('body', 'Евстратенко Александр Иванович').should('exist')
      // Проверка на то, что новое расписание отображается в окне 'Настройка бурильщиков и расписаний 

    })
})
