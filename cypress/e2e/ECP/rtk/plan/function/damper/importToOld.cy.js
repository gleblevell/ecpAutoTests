import { login } from '../../../../login';

it('damper_importToOld', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="damper"]').click()
cy.get('body').click()
// Открытие страницы демпфер

cy.get('button[title="Импорт-Экспорт"]').click()
cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\сделать файл.xlsx", {force: true})
cy.get('button[type="button"]').contains('Импорт').click()
//Загрузка файла и открытие окна "Окно обратотки данных"

//nifiga ne rabotaet. i can't download the sample.
})
