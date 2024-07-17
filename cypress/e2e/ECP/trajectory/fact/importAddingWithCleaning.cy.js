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

      cy.contains('button', 'Сохранить новые и очистить старые записи').click();
      // Добавление к существующим

      cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close').click()
      cy.get('button[title="Редактирование плановой траектории"]').should('have.length.at.most', 3);
      // Проверка на то, что на странице отображается только импортируемое кол-во записей
     
      cy.contains('body', '1111').should('exist')
      cy.contains('body', '111').should('exist')
      cy.contains('body', '222').should('exist')
      cy.contains('body', '333').should('exist')
      cy.contains('body', '999').should('exist')
      cy.contains('body', 'hello').should('exist')
      // Проверка на то, что данные в каждом столбике не изменились       
    })

