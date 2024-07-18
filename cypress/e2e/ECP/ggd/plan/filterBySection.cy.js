import { login } from '../../login';

it('ggdPlan_filterBySection', () => {
    login() // Вызов функции авторизации
  
    cy.contains("1тест").click()
    cy.get('[route="tvd"]').click()
    cy.contains('Фактические операции').click()
    cy.get('body').click()
    // открытие ггд/факт по скважине
      // открытие ггд/план по скважине

      cy.get('.ant-select-selection-overflow').click()
      cy.get('span[title="Направление 1"]').click()
      cy.get('body').click()

      cy.contains('Кондуктор 1').should('not.exist')
      cy.contains('Эксплуатационная колонна 1').should('not.exist')
      cy.contains('Направление 2').should('not.exist')
      // Проверка на то что на стр отображается только направление 1

      
      

    })
