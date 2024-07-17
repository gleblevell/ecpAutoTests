import { login } from '../../../../login';

it('tfAutoHold_importToOld', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="auto_hold_tf"]').click()
cy.get('body').click()
// Открытие страницы автоудержание tf

      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\drillingRotorImport.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"

})