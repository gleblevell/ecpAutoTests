import { login } from '../../../../login';

it('drillTest_importToOld', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="drill_test"]').click()
cy.get('body').click()
// Открытие страницы drillTest

cy.get('button[title="Импорт-Экспорт"]').click()
cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\drillTest.xlsx", {force: true})
cy.get('button[type="button"]').contains('Импорт').click()
//Загрузка файла и открытие окна "Окно обратотки данных"

//все. пока сломано дальше не прет.


})