import { login } from '../../login';

it('ggdPlan_importWithCleaning', () => {
    login() // Вызов функции авторизации
  
      cy.contains("1тест").click()
      cy.get('[route="tvd"]').click()
      cy.contains('Плановые операции').click()
      cy.get('body').click()
      cy.wait(2000)
      // открытие ггд/план по скважине
    
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\cetest\\cypress\\fileforautotest.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"
    
      cy.get('body').should('contain', '14.10.2021 02:00') 
      // Проверка на то, что время при импорте не изменилось

      cy.contains('button', 'Сохранить новые и очистить старые записи').click();
      // Добавление с очисткой старых записей

      cy.get(':nth-child(5) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-close').click()
      cy.get('button[title="Редактировать"]').should('have.length.at.most', 3);
      // Проверка, что на странице отображаются только импортированные записи

    })


