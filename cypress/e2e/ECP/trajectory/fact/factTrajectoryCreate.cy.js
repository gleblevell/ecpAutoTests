import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="fact"]').trigger('mouseover')
      cy.get('[route="manual"]').click()
      // Открытие страницы "Импортированные значение"

      cy.get('button[title="Добавление фактической траектории"]').click()
      cy.get('#wellboreDepth').type('555')
      cy.get('#zenithAngle').type('666')
      cy.get('#azimuthGeo').type('777')
      cy.get('#azimuthMagnetic').type('888')
      cy.get('#verticalDepth').type('999')
      cy.get('#comment').type('hello from autotest')
      cy.get('button[title="Сохранить"]').click()

      cy.contains('hello from autotest').should('exist');
      // Проверка на наличие созданной записи (поиск по тексту коммента)
      
    })