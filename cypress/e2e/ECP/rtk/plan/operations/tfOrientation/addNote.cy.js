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

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
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
cy.get('#tfSetpoint').type(50)
cy.get('#spring').type(33)
cy.get('#pressureMax').type(180)
cy.get('#differentialPressure').type(60)
cy.get('#tight').type(100)
cy.get('#slackingOff').type(50)
cy.get('#torqueMax').type(8)
cy.get('#repetitionsCount').type(2)
cy.get('#ropUp').type(99)
cy.get('#ropDown').type(44)
cy.get('#flowRateUp').type(100)
cy.get('#flowRateDown').type(30)
cy.get('#interval').type(50)
cy.get('#stopPointOffBottom').type(25)
cy.get('#note').type('hello')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanTFOrientation').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})