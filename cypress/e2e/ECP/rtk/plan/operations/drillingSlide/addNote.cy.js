import { login } from '../../../../login';

it('drillingSlide_addNote', () => {
    login() // Вызов функции авторизации
    
    cy.contains("1тест").click()
    cy.get('[route="process_map"]').click()
    cy.get('[route="plan"]').click()
    cy.get('[route="operations"]').click()
    cy.get('[route="drilling_slide"]').click()
    cy.get('body').click()
    // Открытие страницы "Бурение слайд"   
    
    cy.get('.dd-operation-column > .ant-btn').click()
    cy.get('#idWellSectionType').click()
    cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
    cy.get('.ant-select-tree-title').contains('Направление 1').click()
    cy.get('#depthStart').clear().type(1)
    cy.get('#depthEnd').clear().type(99)
    cy.get('#ropMax').type(12)
    cy.get('#pressureMax').type(4)
    cy.get('#differentialPressure').type(2)
    cy.get('#differentialPressureMax').type(3)
    cy.get('#weightOnBit').eq(0).type(2)
    cy.get('#weightOnBitMax').eq(0).type(1)
    cy.get('#spring').type(99)
    cy.get('#buckling').type(100)
    cy.get('#note').type('dobrogo vremni sutok')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanSlide').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})
