import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="rotor"]').click()
cy.get('body').click()
// Открытие страницы "Проработка ротор"   

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 1').click()
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(99)
cy.get('#pressureMax').type(5)
cy.get('#differentialPressure').type(5)
cy.get('#tight').type(5)
cy.get('#slackingOff').type(5)
cy.get('#torqueMax').type(5)
cy.get('#reaming1RepetitionsCount').type(12)
cy.get('#reaming1RopUp').type(13)
cy.get('#reaming1RopDown').type(14)
cy.get('#reaming1RpmUp').type(15)
cy.get('#reaming1RpmDown').type(16)
cy.get('.ant-table-body').scrollTo('right', { offset: 100 })
cy.get('#reaming1FlowRateUp').type(17)
cy.get('#reaming1FlowRateDown').type(20)
cy.get('#reaming1Interval').type(21)
cy.get('#reaming1StopPointOffBottom').type(22)
cy.get('#reaming2RepetitionsCount').type(23)
cy.get('#reaming2RopUp').type(24)
cy.get('#reaming2RopDown').type(25)
cy.get('#reaming2RpmUp').type(26)
cy.get('#reaming2RpmDown').type(27)
cy.get('#reaming2FlowRateUp').type(28)
cy.get('#reaming2FlowRateDown').type(29)
cy.get('#reaming2Interval').type(30)
cy.get('#reaming2StopPointOffBottom').type(31)
cy.get('.ant-table-body').scrollTo('right', { offset: 100 })
cy.get('#reaming3RepetitionsCount').type(33)
cy.get('#reaming3RopUp').type(35)
cy.get('#reaming3RopDown').type(20)
cy.get('#reaming3RpmDown').type(2)
cy.get('#reaming3RpmUp').type(20)
cy.get('#reaming3FlowRateUp').type(36)
cy.get('#reaming3FlowRateDown').type(44)
cy.get('#reaming3Interval').type(44)
cy.get('#reaming3StopPointOffBottom').type(22)
cy.get('#note').type('hello')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanReamingRotor').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})