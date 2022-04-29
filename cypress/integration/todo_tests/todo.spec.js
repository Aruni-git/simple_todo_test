/// <reference types="cypress" />
beforeEach(() => {
  const newItem = 'Go through cypress tutorial'

  cy.visit('http://localhost:3000/')

  cy.get('input', { setTimeout: 5000 }).type(`${newItem}{enter}`)
})

it('add a new task to todo list', () => {

  cy.get('span')
  cy.should('have.text', 'Go through cypress tutorial')

  cy.get('.App-tick').should('not.be.checked')
})

it('mark one task as completed in todo list', () => {

  cy.get('span')
  cy.should('have.text', 'Go through cypress tutorial')

  cy.get('.App-tick').click()
})