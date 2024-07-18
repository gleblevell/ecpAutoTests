import { login } from '../../../../login';

it('reamingRotor_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="rotor"]').click()
cy.get('body').click()
// Открытие страницы "Проработка ротор"   

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 2').then(($element) => {
    if (!$element) {
        cy.get('.ant-select-tree-title').contains('Техническая колонна 2').click()
    } else {
        $element.click()
    }
})
cy.get('#depthStart').clear().type(1)
cy.get('#depthEnd').clear().type(99)
cy.get('#pressureMax').clear().type(400)
cy.get('#differentialPressure').clear().type(60)
cy.get('#tight').clear().type(20)
cy.get('#slackingOff').clear().type(20)
cy.get('#torqueMax').clear().type(35)
cy.get('#reaming1RepetitionsCount').clear().type(99)
cy.get('#reaming1RopUp').clear().type(999)
cy.get('#reaming1RopDown').clear().type(999)
cy.get('#reaming1RpmUp').clear().type(270)
cy.get('#reaming1RpmDown').clear().type(270)
cy.get('.ant-table-body').scrollTo('right', { offset: 100 })
cy.get('#reaming1FlowRateUp').clear().type(100)
cy.get('#reaming1FlowRateDown').clear().type(100)
cy.get('#reaming1Interval').clear().type(30)
cy.get('#reaming1StopPointOffBottom').clear().type(10)
cy.get('#reaming2RepetitionsCount').clear().type(99)
cy.get('#reaming2RopUp').clear().type(999)
cy.get('#reaming2RopDown').clear().type(999)
cy.get('#reaming2RpmUp').clear().type(270)
cy.get('#reaming2RpmDown').clear().type(270)
cy.get('#reaming2FlowRateUp').clear().type(100)
cy.get('#reaming2FlowRateDown').clear().type(100)
cy.get('#reaming2Interval').clear().type(30)
cy.get('#reaming2StopPointOffBottom').clear().type(10)
cy.get('.ant-table-body').scrollTo('right', { offset: 100 })
cy.get('#reaming3RepetitionsCount').clear().type(99)
cy.get('#reaming3RopUp').clear().type(999)
cy.get('#reaming3RopDown').clear().type(999)
cy.get('#reaming3RpmDown').clear().type(270)
cy.get('#reaming3RpmUp').clear().type(270)
cy.get('#reaming3FlowRateUp').clear().type(100)
cy.get('#reaming3FlowRateDown').clear().type(100)
cy.get('#reaming3Interval').clear().type(30)
cy.get('#reaming3StopPointOffBottom').clear().type(10)
cy.get('#note').clear().type('hello again')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение и сохранение
})


