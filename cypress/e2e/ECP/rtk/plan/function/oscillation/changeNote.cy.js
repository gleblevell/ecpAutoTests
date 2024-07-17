import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="oscillation"]').click()
cy.get('body').click()
// Открытие страницы "Осцилляция"

cy.get('button[title="Редактировать"]').eq(0).click()

cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Кондуктор 2').click()
cy.get('#depthStart').clear().type(699)
cy.get('#depthEnd').clear().type(799)
cy.get('#optimalOscillationAngle').clear().type(6000)
cy.get('#rpmRight').clear().type(270)
cy.get('#rpmLeft').clear().type(270)
cy.get('#torqueMaxRight').clear().type(35)
cy.get('#torqueMaxLeft').clear().type(35)
cy.get('#mode > .ant-segmented-group > :nth-child(1) > .ant-segmented-item-label').click()
cy.get('#note').type('dobrogo vremni sutok')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanOscillation').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})