import { login } from '../../../../login';

it('drillTest_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="drill_test"]').click()
cy.get('body').click()
// Открытие страницы drillTest

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.ant-select-selection-item').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 5').click()
cy.get('#depthStart').clear().type(499)
cy.get('#depthEnd').clear().type(599)
cy.get('#weightOnBitMin').clear().type(30)
cy.get('#weightOnBitStepsCount').clear().type(5)
cy.get('#rpmMin').clear().type(200)
cy.get('#rpmStepsCount').clear().type(5)
cy.get('#lengthStep').clear().type(2)
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