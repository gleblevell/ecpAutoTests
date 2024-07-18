import { login } from '../../../../login';

it('positioningAboveBottom_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="positioning_above_the_bottom"]').click()
cy.get('body').click()
// Открытие страницы "Позиционирование над забоем" ]

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
cy.get('#stopOffTheBottom').type(78)
cy.get('#pressureMax').type(180) 
cy.get('#differentialPressure').type(260) 
cy.get('#tight').clear().type(110)
cy.get('#slackingOff').clear().type(88)
cy.get('#torqueMax').clear().type(99)
cy.get('#ropUp').clear().type(44)
cy.get('#ropDown').clear().type(20)
cy.get('#rpmUp').clear().type(110)
cy.get('#rpmDown').clear().type(55)
cy.get('#flowRateUp').clear().type(100)
cy.get('#flowRateDown').clear().type(99)
cy.get('#note').clear().type('zdravstvyite again')
// Заполнение строки

cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение строки и сохранение
  });
