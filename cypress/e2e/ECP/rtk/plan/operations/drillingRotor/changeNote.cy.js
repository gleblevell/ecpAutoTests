import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="drilling_rotor"]').click()
cy.get('body').click()
// Открытие страницы "Бурение ротор"

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 3').click()
cy.get('#depthStart').clear().type(99)
cy.get('#depthEnd').clear().type(199)
cy.get('#ropMax').clear().type(800) // скорость max
cy.get('#pressureMax').clear().type(400) //Давление макс
cy.get('#differentialPressure').clear().type(60) //Перепад давления/Уставка
cy.get('#differentialPressureMax').clear().type(60) //Перепард давления/Ограничения
cy.get('#weightOnBit').clear().type(99) //нагрузка, т 
cy.get('#weightOnBitMax').clear().type(99)
cy.get('#topDriveTorque').clear().type(35)
cy.get('#topDriveTorqueMax').clear().type(35)  //Момент на ВСП/Ограничение
cy.get('#rpm').clear().type(270)
cy.get('#rpmMax').clear().type(270)
cy.get('.ant-table-body').clear().scrollTo('right')
cy.get('#flowRate').clear().type(100)
cy.get('#flowRateMax').clear().type('100')
cy.get('.ant-table-body').clear().scrollTo('left')
cy.get('#note').type('dobrogo vremni sutok')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
//Сохранение


});