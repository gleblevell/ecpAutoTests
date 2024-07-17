import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="load_capacity"]').click()
cy.get('body').click()
// Открытие страницы "Выработка нагрузки"  

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 1').click()
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(100)
cy.get('#timeLoadCapacityMin').clear().type(5)
cy.get('#differentialPressureMin').clear().type(30)
cy.get('#weightOnBitMin').type(40)
cy.get('#note').type('good day')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanLoadCapacity').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})