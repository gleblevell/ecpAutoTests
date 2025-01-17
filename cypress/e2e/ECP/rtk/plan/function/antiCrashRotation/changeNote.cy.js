import { login } from '../../../../login';

it('antiCrushRotation_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="anti_crash_rotation"]').click()
cy.get('body').click()
// Открытие страницы Противоаварийное вращение

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.ant-select-selection-item').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 2').click()
cy.get('#depthStart').clear().type(99)
cy.get('#depthEnd').clear().type(199)
cy.get('#topDriveRpmMin').clear().type(250)
cy.get('#topDriveStartMinFlowRate').clear().type(100)
cy.get('#topDriveTorqueMax').clear().type(35)
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