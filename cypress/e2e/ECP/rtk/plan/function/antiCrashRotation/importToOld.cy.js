import { login } from '../../../../login';

it('antiCrushRotation_importToOld', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="anti_crash_rotation"]').click()
cy.get('body').click()
// Открытие страницы Противоаварийное вращение

cy.get('button[title="Импорт-Экспорт"]').click()
cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\сделатьФайл.xlsx", {force: true})
cy.get('button[type="button"]').contains('Импорт').click()
//Загрузка файла и открытие окна "Окно обратотки данных"



})
