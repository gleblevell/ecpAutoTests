import { login } from '../../../../login';

it('shockTest_importWithCleaning', () => {
login() // Вызов функции авторизации

cy.contains("1тест").click()
cy.get('[route="process_map"]').click()
cy.get('[route="plan"]').click()
cy.get('[route="functions"]').click()
cy.get('[route="shock_test"]').click()
cy.get('body').click()

//right now here we have failure with import. import is impossible