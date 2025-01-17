import { login } from '../../../../login';

it('damper_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="damper"]').click()
cy.get('body').click()
// Открытие страницы демпфер

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.ant-select-selection-item').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 4').click()
cy.get('#depthStart').clear().type(299)
cy.get('#depthEnd').clear().type(399)
cy.get('#stickSlip').clear().type(1000)
cy.get('#note').type(' eshe raz')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanDamper').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})