/// <reference types="cypress" />

import {
  navigate,
  addTask,
  validateText,
  notchecked,
  checkComplete,
  itemRemoved
} from "../../page-objects/todo-page"

const newItem = 'Go through cypress tutorial'

beforeEach(() => {

  navigate()

  //Create an Applitools test. This will start a session with the Applitools server.
  cy.eyesOpen({ appName: 'Simple todo test' })

  addTask(newItem)
})

//Close the applitools test and check that all screenshots are valid
afterEach(() => cy.eyesClose())

it('add a new task to todo list', () => {

  //Generate a screenshot of the current page and add it to the Applitools Test.
  cy.eyesCheckWindow('todo task is added')

  validateText(newItem)

  notchecked()

})

it('mark one task as completed in todo list', () => {

  validateText(newItem)

  checkComplete()
})

it('verify completed item is removed from the todo list', () => {

  checkComplete()

  itemRemoved()

  cy.eyesCheckWindow('empty todo list')
})
