import { login } from '../../../../login';

it('shockTest_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="shock_test"]').click()
cy.get('body').click()
// Открытие страницы shockTest

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
// заменить верхнюю строчку на     cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Кондуктор 3').click()
cy.get('#depthStart').clear().type(799)
cy.get('#depthEnd').clear().type(899)
cy.get('#stickSlip').clear().type(1000)
cy.get('#whirl').clear().type(1000)
cy.get('#axialVibrations').clear().type(1000)
cy.get('#combinedVibrations').clear().type(30)
cy.get('#weightOnBitMin').clear().type(200)
cy.get('#note').type(' eshe raz')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanStaticShockTest').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})