import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации

      cy.contains("1тест").click()
      cy.get('[route="telemetry"]').trigger('mouseover')
      cy.get('[route="trajectory"]').trigger('mouseover')
      cy.get('[route="fact"]').trigger('mouseover')
      cy.get('[route="manual"]').click()
      // Открытие страницы "Импортированные значение"

      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\cetest\\cypress\\filesForImport\\factTrajectory.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Добавление файла и открытие окна обработки данных

      cy.contains('button', 'Добавить к существующим').click();
      // Добавление к существующим

      cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close').click()
      cy.get('button[title="Редактирование фактической траектории"]').should('have.length.greaterThan', 3);
      // Проверка на то что, на странице присутствуют записи которые мы добавили + записи которые уже были
    })

