import { login } from '../../../../login';

it('burenieRotorCreateNewNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="load_capacity"]').click()
cy.get('body').click()
// Открытие страницы "Выработка нагрузки"  

                                                            
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\tabLoadCapacityImport.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"

      cy.get('.ant-modal-body > .ant-form > .ant-flex > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-header > table > .ant-table-thead > :nth-child(1) > .dd-operation-column > .ant-btn').click()
      //cy.get('body').should('contain', 'r8jOa1') 
      // Проверка на корректность отображения данных в окне

    cy.get('#idWellSectionType').click()
    cy.get('[style="position: absolute; top: 5px; right: 15px; z-index: 500;"] > .ant-segmented > .ant-segmented-group > :nth-child(2) > .ant-segmented-item-label').click()
    cy.get('.ant-select-tree-title').contains('Направление 1').click()
    cy.get('#depthStart').clear().type(1)
    cy.get('#depthEnd').clear().type(100)
    cy.get('#timeLoadCapacityMin').clear().type(5)
    cy.get('#differentialPressureMin').clear().type(30)
    cy.get('#weightOnBitMin').type(40)
    cy.get('#note').type('good day')
// Добавление новой записи

cy.intercept('PUT', '/api/well/41/ProcessMapPlanLoadCapacity').as('putRequest'); 
//Перехват запроса PUT

cy.get('button[title="Сохранить"]').click();
cy.contains('button', 'Добавить к существующим').click();
cy.wait('@putRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
// Cохранение и проверка 
})

})
