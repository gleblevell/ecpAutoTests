import { login } from '../../login';

it('ggdFactImportToOld', () => {
    login() // Вызов функции авторизации
  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Фактические операции').click()
      cy.get('body').click()
      // открытие ггд/план
    
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForImport\\factOperation.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"

      cy.contains('button', 'Добавить к существующим').click();
      // Добавление к существующим
      
      cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [tabindex="-1"] > .ant-modal-content > .ant-modal-close').click()
      cy.get('button[title="Редактировать"]').should('have.length.greaterThan', 3);
      // Проверка на то что записи добавились
    })
