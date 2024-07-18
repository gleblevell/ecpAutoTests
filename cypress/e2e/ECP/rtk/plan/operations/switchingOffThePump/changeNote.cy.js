import { login } from '../../../../login';

it('switchingOffThePump_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="switching_off_the_pump"]').click()
cy.get('body').click()
// Открытие страницы Выключение насоса

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
cy.get('#duration').clear().type(0)
cy.get('#residualPressureLimit').clear().type(100)
cy.get('#note').clear().type('zdravstvyite eshe raz')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение и сохранение

})

