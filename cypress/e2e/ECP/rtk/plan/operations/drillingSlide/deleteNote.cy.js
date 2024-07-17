import { login } from '../../../../login';

it('drillingSlide_deleteNote', () => {
    login() // Вызов функции авторизации
    
    cy.contains("1тест").click()
    cy.get('[route="process_map"]').click()
    cy.get('[route="plan"]').click()
    cy.get('[route="operations"]').click()
    cy.get('[route="drilling_slide"]').click()
    cy.get('body').click()
    // Открытие страницы "Бурение слайд"  

    cy.intercept('DELETE', '/api/well/41/ProcessMapPlanSlide', (req) => {
        req.reply({ statusCode: 200 })
      }).as('deleteRequest')

    cy.get('button[title="Отметить на удаление"]').eq(0).click()
    cy.get('.ant-popconfirm-buttons > .ant-btn-primary > span').click()
    
    cy.get('button[type="button"]').contains('Сохранить').click();
    cy.wait('@deleteRequest').its('response.statusCode').should('eq', 200)
})