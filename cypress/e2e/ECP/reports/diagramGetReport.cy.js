import 'cypress-xpath'
import { login } from '../login';

it('diagramGetReport', () => {
    login() // Вызов функции авторизации


      cy.contains("1тест").click()
      cy.get('[route="reports"]').click()
      cy.contains("Диаграмма").click()
      // Открытие страницы "Диаграмма"

      cy.get('[placeholder="Начальная дата"]').click().clear().type('10.10.2023')
      cy.get('[placeholder="Конечная дата"]').click().clear().type('11.10.2023')
      //Установка диапазона дат
     
      cy.get('.ant-select-selector').click()
      cy.get('.ant-select-selector').click()
      cy.get('.ant-select-selector').click()
      cy.get('.rc-virtual-list-scrollbar-thumb').scrollIntoView({ ensureScrollable: false })
      cy.contains('1 секунда').click()
      cy.get('button').contains('Получить рапорт').click()
      cy.wait(5000)
      //Формирование рапорта за интервал в 1 сек
      // короче я пока хз. не могу заставитьт проскроллить список с предлагаемыми интервалами

})