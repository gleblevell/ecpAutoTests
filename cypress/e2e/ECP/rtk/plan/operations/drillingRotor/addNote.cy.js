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

cy.get('.dd-operation-column > .ant-btn').click()
cy.get('#idWellSectionType').click()
cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
cy.get('.ant-select-tree-title').contains('Направление 2').click()
cy.get('#depthStart').clear().type(99)
cy.get('#depthEnd').clear().type(199)
cy.get('#ropMax').clear().type(250) // скорость max
cy.get('#pressureMax').type(360) //Давление макс
cy.get('#differentialPressure')//перепад давления
cy.get('#differentialPressure').type(88) //Перепад давления/Уставка
cy.get('#differentialPressureMax').type(199) //Перепард давления/Ограничения
cy.get('#weightOnBit').type(230) //нагрузка, т 
cy.get('#weightOnBitMax').type(21)
cy.get('#topDriveTorque').type(32)
cy.get('#topDriveTorqueMax').type(54)  //Момент на ВСП/Ограничение
cy.get('#rpm').type(66)
cy.get('#rpmMax').type(444)
cy.get('.ant-table-body').scrollTo('right')
cy.get('#flowRate').type(50)
cy.get('#flowRateMax').type('49')
cy.get('.ant-table-body').scrollTo('left')
// Заполнение строки

cy.intercept('PUT', '/api/well/41/ProcessMapPlanRotor').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})
})
