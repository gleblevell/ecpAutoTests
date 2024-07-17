import { login } from '../../../../login';

it('drillTest_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="drill_test"]').click()
cy.get('body').click()
// Открытие страницы drillTest

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 4').click()
cy.get('#depthStart').clear().type(399)
cy.get('#depthEnd').clear().type(499)
cy.get('#weightOnBitMin').type(1)
cy.get('#weightOnBitStepsCount').type(1)
cy.get('#rpmMin').type(5)
cy.get('#rpmStepsCount').type(1)
cy.get('#lengthStep').type(0.1)
cy.get('#note').type('dobrogo vremni sutok')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanDrillTest').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})