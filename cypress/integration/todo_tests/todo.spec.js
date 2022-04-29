/// <reference types="cypress" />

import {
  navigate,
  addTask,
  validateText,
  notchecked,
  checkComplete,
  itemRemoved
} from "../page-objects/todo-page"

const newItem = 'Go through cypress tutorial'

beforeEach(() => {

  navigate()

  addTask(newItem)
})

it('add a new task to todo list', () => {

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
})