import { login } from '../../../../login';

it('positioningAboveBottom_importWithCleaning', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="positioning_above_the_bottom"]').click()
cy.get('body').click()
// Открытие страницы "Позиционирование над забоем" 

cy.get('button[title="Импорт-Экспорт"]').click()
cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\positioningAboveBottom.xlsx", {force: true})
cy.get('button[type="button"]').contains('Импорт').click()
//Загрузка файла и открытие окна "Окно обратотки данных"

cy.contains('button', 'Сохранить новые и очистить старые записи').click();

cy.contains('body', 'das12tgga').should('exist')
})