import { login } from '../../login';

it('burenieRotorCreateNewNote', () => {
    login() // Вызов функции авторизации
  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Фактические операции').click()
      cy.get('body').click()
      cy.wait(2000)
      // открытие ггд/план
    
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForImport\\factOperation.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"

      cy.contains('button', 'Сохранить новые и очистить старые записи').click();
      // Добавление с очисткой старых записей
      
      cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [tabindex="-1"] > .ant-modal-content > .ant-modal-close').click()
      cy.get('button[title="Редактировать"]').should('have.length', 2)
      // Проверка на то что записи добавились
    })


