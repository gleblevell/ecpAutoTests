import { login } from '../login';

it('wellDesign_addConstruction', () => {
    login() // Вызов функции авторизации

      cy.contains("1тест").click()
      cy.get('[route="process_map"]').click()
      cy.get('[route="plan"]').click()
      cy.get('[route="well_designs"]').click()
      //Открытие страницы "Конструкция скважины"

      cy.get('button[title="Добавление конструкции"]').click()
      cy.get('#idSectionType').click()

      cy.get('.ant-segmented-item-label').eq(3).click({force: true})
      cy.get('.ant-select-tree-node-content-wrapper > .ant-select-tree-title').eq(5).click()
      cy.get('#depthStart').type('100')
      cy.get('#depthEnd').type('200')
      cy.get('#outerDiameter').type('99')
      cy.get('#innerDiameter').type('55')
      cy.get('button[title="Сохранить"]').click()
      // Добавление новой конструкции

      
      cy.request('GET', 'http://test.digitaldrilling.ru/well/41/telemetry/trajectory/plan')
  .should((response) => {
    expect(response.status).to.equal(200);
  });
  // Проверка, что код ответа нажатия на кнопку равен 200
    })
