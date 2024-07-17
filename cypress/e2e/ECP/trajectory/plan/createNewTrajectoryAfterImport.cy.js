import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="plan"]').click()
      // Открытие страницы "Плановая траектория"

      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\cetest\\cypress\\planTrajectoryForAutotest.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Добавление файла и открытие окна обработки данных

      cy.get('.dd-operation-column > .ant-btn').click()
      cy.get('#wellboreDepth').clear().type(100)
      cy.get('#zenithAngle').clear().type(55)
      cy.get('#azimuthGeo').clear().type(66)
      cy.get('#azimuthMagnetic').clear().type(77)
      cy.get('#verticalDepth').clear().type(100)
      cy.get('#radius').clear().type(35)
      cy.get('#comment').type('newComment')
      cy.get('button[title="Сохранить"]').click()
      // Заполнение и сохранение новой записи

      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', 'hello').should('exist')
      // Проверка на то, что ново-созданная запись отобржается в окне обработки данных

      cy.contains('button', 'Сохранить новые и очистить старые записи').click();
      cy.contains('body', 'hello').should('exist')
      // Осуществление импорта на страницу и проверка на то, что новая запись добавилась вместе со всеми

    })
