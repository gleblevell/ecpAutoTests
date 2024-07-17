import { login } from '../../../../login';

it('tfAutoHold_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="auto_hold_tf"]').click()
cy.get('body').click()
// Открытие страницы автоудержание tf

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 2').click()
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(99)
cy.get('#zenithAngle').clear().type(100)
cy.get('#note').type(' hello')
// Заполнение строки 

cy.intercept('PUT', '/api/well/41/ProcessMapPlanAutoHoldTF').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})