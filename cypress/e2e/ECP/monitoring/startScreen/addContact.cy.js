import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации


      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.contains("Начальный экран").click()
      cy.contains('button', 'Контакты').click()
      cy.contains('button', 'Добавить контакт').click()
      cy.get('#fullName').type('Name')
      cy.get('#position').type('Position')
      cy.get('#company').type('Company')
      cy.contains('button', 'Сохранить').click()
    })


