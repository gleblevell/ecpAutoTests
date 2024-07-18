import { login } from '../../../../login';

it('oscillation_addNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="oscillation"]').click()
cy.get('body').click()
// Открытие страницы "Осцилляция"

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('.ant-segmented-item-label').eq(5).click({force: true})
cy.get('.ant-select-tree-title').contains('Кондуктор 1').click()
cy.get('#depthStart').clear().type(599)
cy.get('#depthEnd').clear().type(699)
cy.get('#optimalOscillationAngle').type(0)
cy.get('#rpmRight').type(0)
cy.get('#rpmLeft').type(0)
cy.get('#torqueMaxRight').type(0)
cy.get('#torqueMaxLeft').type(0)
cy.get('#mode > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
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