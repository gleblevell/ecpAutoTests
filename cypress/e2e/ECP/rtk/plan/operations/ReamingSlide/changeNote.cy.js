import { login } from '../../../../login';

it('reamingSlide_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="slide"]').click()
cy.get('body').click()
// Открытие страницы Проработка слайд   

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 2').click()

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
cy.get('#reaming2RpmDown').type(11)
cy.get('#reaming2FlowRateUp').type(12)
cy.get('#reaming2FlowRateDown').type(19)
cy.get('#reaming2Interval').type(30)
cy.get('#reaming2StopPointOffBottom').type(31)
cy.get('.ant-table-body').scrollTo('right', { offset: 100 })
cy.get('#reaming3RepetitionsCount').type(99)
cy.get('#reaming3RopUp').type(99)
cy.get('#reaming3RopDown').type(270)
cy.get('#reaming3RpmDown').type(2)
cy.get('#reaming3RpmUp').type(270)
cy.get('#reaming3FlowRateUp').type(100)
cy.get('#reaming3FlowRateDown').type(100)
cy.get('#reaming3Interval').clear().type(30)
cy.get('#reaming3StopPointOffBottom').clear().type(10)
cy.get('#note').type(' hello again')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение и сохранение

})