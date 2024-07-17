import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации
    
    cy.contains("1тест").click()
    cy.get('[route="process_map"]').click()
    cy.get('[route="plan"]').click()
    cy.get('[route="operations"]').click()
    cy.get('[route="drilling_slide"]').click()
    cy.get('body').click()
    // Открытие страницы "Бурение слайд"  

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 3').click()
cy.get('#depthStart').clear().type(99)
cy.get('#depthEnd').clear().type(199)
cy.get('#ropMax').clear().type(12)
cy.get('#pressureMax').clear().type(4)
cy.get('#differentialPressure').clear().type(2)
cy.get('#differentialPressureMax').clear().type(3)
cy.get('#weightOnBit').eq(0).clear().type(2)
cy.get('#weightOnBitMax').eq(0).clear().type(1)
cy.get('#spring').clear().type(99)
cy.get('#buckling').clear().type(100)
cy.get('#note').clear().type('dobrogo vremni sutok again')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение строки и сохранение
  });
