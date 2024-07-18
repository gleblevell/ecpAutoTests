import { login } from '../../../../login';

it('recordingStaticMeasurement_changeNote', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="operations"]').click()
cy.get('[route="recording_static_measurement"]').click()
cy.get('body').click()
// Открытие страницы "Запись статического замера"

cy.get('button[title="Редактировать"]').eq(0).click()
cy.get('.ant-select-selection-item').click()
cy.get('.ant-segmented-item-label').eq(3).click({force: true})
cy.get('.ant-select-tree-title').contains('Направление 2').then(($element) => {
    if (!$element) {
        cy.get('.ant-select-tree-title').contains('Техническая колонна 2').click()
    } else {
        $element.click()
    }
})
cy.get('#measurementRecordingTime').type(8)
cy.get('#note').clear().type('zdravstvyite eshe raz')
cy.get('button[title="Сохранить"]').click();
cy.get('button[type="button"]').contains('Сохранить').click();
// Заполнение и сохранение
})