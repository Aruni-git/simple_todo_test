
export function navigate() {

    cy.visit('http://localhost:3000/')
}

export function addTask(taskName) {

    cy.get('input', { setTimeout: 5000 }).type(taskName + "{enter}")
}

export function validateText(expectedText) {

    cy.get('span').should('have.text', expectedText)
}

export function checkComplete() {

    cy.get('.App-tick').click()
}

export function notchecked() {

    cy.get('.App-tick').should('not.be.checked')
}

export function itemRemoved() {

    cy.get('ol')
    cy.contains('Go through cypress tutorial').should('not.exist')
}
