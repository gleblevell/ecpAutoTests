import { login } from '../../../../login';

it('drillingSlide_importToOld', () => {
login() // Вызов функции авторизации


cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="drilling_slide"]').click()
cy.get('body').click()
// Открытие страницы "Бурение слайд"   

                                                            
      cy.get('button[title="Импорт-Экспорт"]').click()
      cy.get('span > input[type="file"]').eq(0).selectFile("C:\\Users\\admin\\Desktop\\ECP\\cypress\\filesForAutoTests\\drillingRotorImport.xlsx", {force: true})
      cy.get('button[type="button"]').contains('Импорт').click()
      //Загрузка файла и открытие окна "Окно обратотки данных"

      //Пока не работает экспорт шаблона. не могу сделать файл для импорта


})