import { login } from '../../../../login';

it('tfAutoHold_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="auto_hold_tf"]').click()
cy.get('body').click()
// Открытие страницы автоудержание tf

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Кондуктор 4').click()
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(99)
cy.get('#zenithAngle').type(99)
cy.get('#note').type('zdravstvyie')
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

