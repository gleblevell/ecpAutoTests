import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="load_capacity"]').click()
cy.get('body').click()
// Открытие страницы "Выработка нагрузки"  

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 2').click()
cy.get('#depthStart').clear().type(199)
cy.get('#depthEnd').clear().type(299)
cy.get('#timeLoadCapacityMin').clear().type(4)
cy.get('#differentialPressureMin').clear().type(22)
cy.get('#weightOnBitMin').clear().type(30)
cy.get('#note').clear().type('good morning')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
//Заполнение, сохранение строки

// добавить проверку на получение 200 после сохранения
})