import { login } from '../../../../login';

it('positioningAboveBottom_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="positioning_above_the_bottom"]').click()
cy.get('body').click()
// Открытие страницы "Позиционирование над забоем" 

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

cy.get('#depthStart').clear().type(99)
cy.get('#depthEnd').clear().type(199)
cy.get('#stopOffTheBottom').type(88)
cy.get('#pressureMax').type(360) 
cy.get('#differentialPressure').type(360) 
cy.get('#tight').type(160)
cy.get('#slackingOff').type(100)
cy.get('#torqueMax').type(100)
cy.get('#ropUp').type(100)
cy.get('#ropDown').type(50)
cy.get('#rpmUp').type(150)
cy.get('#rpmDown').type(99)
cy.get('#flowRateUp').type(122)
cy.get('#flowRateDown').type(111)
cy.get('#note').type('zdravstvyite')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanPositioningOffTheBottom').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})
