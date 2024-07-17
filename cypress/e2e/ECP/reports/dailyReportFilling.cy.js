import 'cypress-xpath'
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// Это отключение какой то дурацкой ошибки

import { login } from '../login';

it('DailyReportFilling', () => {
    login() // Вызов функции авторизации


    
    cy.contains("1тест").click()
    cy.get('[route="reports"]').click()
    cy.contains("Суточный рапорт").click()
    // Открытие страницы "Суточный рапорт"
    
    cy.get('.ant-progress-steps-outer').eq(0).click()
    cy.get('#tvgLagDays').type("777")
    cy.get('#wellbore').type("777")
    cy.get('#totalRopPlan').type("777")
    cy.get('#measurementsPerDay').type("777")
    cy.get('#subsystems_0_usagePerDay_usedTimeHours').type("7")
    cy.get('#subsystems_1_usagePerDay_usedTimeHours').type("7")
    cy.get('#subsystems_0_usagePerDay_sumDepthInterval').type("7")
    cy.get('#subsystems_1_usagePerDay_sumDepthInterval').type("7")
    cy.get('#subsystems_0_usagePerDay_kUsage').type("7")
    cy.get('#subsystems_1_usagePerDay_kUsage').type("7")
    cy.get('#subsystems_0_usagePerWell_usedTimeHours').type("7")
    cy.get('#subsystems_1_usagePerWell_usedTimeHours').type("7")
    cy.get('#subsystems_0_usagePerWell_sumDepthInterval').type("7")
    cy.get('#subsystems_1_usagePerWell_sumDepthInterval').type("7")
    cy.get('#subsystems_0_usagePerWell_kUsage').type("7")
    cy.get('#subsystems_1_usagePerWell_kUsage').type("7")
    cy.get('#comment').type("hello from autotest")
    cy.contains("Сохранить").click()
    // Заполнение таблицы "Использование АКБ"
    

    

    cy.get('.ant-progress-steps-outer').eq(1).click()
    cy.get('#idSection').click()
    cy.get('.ant-select-item-option-content').eq(0).click()
    cy.get('#wellOperationSlipsTimeCount').type("777")
    cy.get('#wellOperations_0_durationHours_plan').type("7")
    cy.get('#wellOperations_1_durationHours_plan').type("7")
    cy.get('#wellOperations_2_durationHours_plan').type("7")
    cy.get('#wellOperations_3_durationHours_plan').type("7")
    cy.get('#wellOperations_0_durationHours_fact').type("7")
    cy.get('#wellOperations_1_durationHours_fact').type("7")
    cy.get('#wellOperations_2_durationHours_fact').type("7")
    cy.get('#wellOperations_3_durationHours_fact').type("7")
    cy.get('#wellOperations_0_reasonDeviation').type("7")
    cy.get('#wellOperations_1_reasonDeviation').type("7")
    cy.get('#wellOperations_2_reasonDeviation').type("7")
    cy.get('#wellOperations_3_reasonDeviation').type("7")
    cy.get('#wellOperations_0_drillingDeviationPerSection').type("7")
    cy.get('#wellOperations_1_drillingDeviationPerSection').type("7")
    cy.get('#wellOperations_2_drillingDeviationPerSection').type("7")
    cy.get('#wellOperations_3_drillingDeviationPerSection').type("7")
    cy.get('#wellOperations_0_drillingDeviationPerDay').type("7")
    cy.get('#wellOperations_1_drillingDeviationPerDay').type("7")
    cy.get('#wellOperations_2_drillingDeviationPerDay').type("7")
    cy.get('#wellOperations_3_drillingDeviationPerDay').type("7")
    cy.contains("Сохранить").click()
    // Заполнение таблицы "Баланс времени"
    
   
    cy.get('.ant-progress-steps-outer').eq(3).click()
    cy.get('#drillingMaster_surname').click().type('hello')
    cy.get('#drillingMaster_name').type("from")
    cy.get('#drillingMaster_patronymic').type("autotest")
    cy.get('#supervisor_surname').type("i eshe")
    cy.get('#supervisor_name').type("odin")
    cy.get('#supervisor_patronymic').type("hello")
    cy.contains("Сохранить").click()
    // Заполнение таблицы "Подпись"
  
    

  // Желательно бы добавить проверку на скачивание файла!
    
})