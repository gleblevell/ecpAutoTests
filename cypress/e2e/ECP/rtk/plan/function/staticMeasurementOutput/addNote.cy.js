import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="static_measurement_output"]').click()
cy.get('body').click()
// Открытие страницы автоудержание Выход статического замера

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Кондуктор 4').click()
cy.get('#depthStart').clear().type(899)
cy.get('#depthEnd').clear().type(999)
cy.get('#signalWaitingTime').type(0)
cy.get('#note').type('zdravstvyite')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanStaticMeasurementOutput').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})


})




