import { login } from '../../../../login';

it('antiCrushRotation_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="anti_crash_rotation"]').click()
cy.get('body').click()
// Открытие страницы Противоаварийное вращение

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 1').click()
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(99)
cy.get('#topDriveRpmMin').type(0)
cy.get('#topDriveStartMinFlowRate').type(1)
cy.get('#topDriveTorqueMax').type(1)
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanAntiCrashRotation').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})