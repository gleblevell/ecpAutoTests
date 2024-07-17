import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="plan"]').click()
      // Открытие страницы "Плановая траектория"

      cy.get('button[title="Редактирование плановой траектории"]').eq(0).click()
      cy.get('#wellboreDepth').clear().type('111')
      cy.get('#zenithAngle').clear().type('222')
      cy.get('#azimuthGeo').clear().type('333')
      cy.get('#azimuthMagnetic').clear().type('444')
      cy.get('#verticalDepth').clear().type('555')
      cy.get('#radius').clear().type('666')
      cy.get('#comment').clear().type('hello from autotest111')
      cy.get('button[title="Сохранить"]').click()
      // Заполнение строки новыми данными

      cy.contains('hello from autotest111').should('exist');

    })
