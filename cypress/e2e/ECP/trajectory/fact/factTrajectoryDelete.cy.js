describe('factTrajectoryDelete', () => {
    it('factTrajectoryDelete', async () => {
      cy.visit('http://test.digitaldrilling.ru/login')
      cy.viewport(1920, 1080)
      cy.get('input#login').type("dev");
      cy.get('input#password').type("Pj39njWmhHaJy7J");
      cy.get('.ant-btn > span') .click()
      // авторизация

      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="fact"]').trigger('mouseover')
      cy.get('[route="manual"]').click()
      // Открытие страницы "Импортированные значения"

      cy.get('button[title="Удаление фактической траектории"]').eq(0).click()
      cy.intercept('DELETE', '/api/well/41/TrajectoryFactManual/*').as('deleteRequest')
      cy.contains('OK').click()
      cy.wait('@deleteRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
      })
 
    })
})