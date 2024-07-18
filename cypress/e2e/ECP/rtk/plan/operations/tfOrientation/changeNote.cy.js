import { login } from '../../../../login';

it('tfOrientation_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="tf_orientation"]').click()
cy.get('body').click()
// Открытие страницы "Выставление"   

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
cy.get('#depthStart').clear().type(199)
cy.get('#depthEnd').clear().type(299)
cy.get('#tfSetpoint').clear().type(360)
cy.get('#spring').clear().type(10000)
cy.get('#pressureMax').clear().type(400)
cy.get('#differentialPressure').clear().type(60)
cy.get('#tight').clear().type(33)
cy.get('#slackingOff').clear().type(35)
cy.get('#torqueMax').clear().type(8)
cy.get('#repetitionsCount').clear().type(99)
cy.get('#ropUp').clear().type(99)
cy.get('#ropDown').clear().type(10)
cy.get('#flowRateUp').clear().type(100)
cy.get('#flowRateDown').clear().type(10)
cy.get('#interval').clear().type(30)
cy.get('#stopPointOffBottom').clear().type(10)
cy.get('#note').clear().type('hello again')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение и сохранение

})


