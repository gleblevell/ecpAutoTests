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

      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '1723').should('exist')
      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '180').should('exist')
      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '321').should('exist')
      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '123').should('exist')
      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '999').should('exist')
      cy.contains(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content', '15').should('exist')
      // Проверка на то, что данные в каждом столбике не изменились 
    
      cy.contains('button', 'Сохранить новые и очистить старые записи').click();
      // Добавление с очисткой старых записей

      cy.get(':nth-child(6) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close').click()
      // Закрытие окна "Импорт-экспорт"

      cy.get('button[title="Редактирование плановой траектории"]').should('have.length.at.most', 3);
      // Проверка на то, что на странице отображается только импортируемое кол-во записей

      cy.contains('body', '1723').should('exist')
      cy.contains('body', '180').should('exist')
      cy.contains('body', '321').should('exist')
      cy.contains('body', '123').should('exist')
      cy.contains('body', '999').should('exist')
      cy.contains('body', '15').should('exist')
      // Проверка на то, что данные в каждом столбике не изменились 
    })