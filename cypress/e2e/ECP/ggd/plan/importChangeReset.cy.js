import { login } from '../../login';

it('ggdPlanImportChangeReset', () => {
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

      cy.get('.ant-modal-body > .ant-form > .ant-flex-align-stretch > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body > table > .ant-table-tbody > :nth-child(3) > .dd-operation-column > .ant-flex > :nth-child(2)').click()
      cy.contains('button','OK').click()
      cy.contains('body', 'it means that').should('not.exist');
      //Внесение изменений и проверка, что изменения отображаются в окне

      cy.contains('button', 'Сбросить внесённые изменения').click();
      cy.contains('body', 'it means that').should('exist');
      // Отмена изменений и проверка на это. 

      // Тест успешно завершится, только если на странице до этого не было никаких записей, поэтому важно чтобы этот тест прогонялся перед тестами на импорт
      
  
})
