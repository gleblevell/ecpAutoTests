import { cy } from 'cypress'

export const auth = async () => {
    await cy.login('dev', 'Pj39njWmhHaJy7J')
    return await cy.session('authSession')
}
