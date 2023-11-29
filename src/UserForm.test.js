import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button', () => {
  render(<UserForm />)

  // get inputs and button
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  // assertions
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('it calls onUserAdd when the form is submitted', async () => {
  // mock funtions
  const onUserAdd = jest.fn()
  render(<UserForm onUserAdd={onUserAdd} />)

  // get inputs and button
  const [nameInput, emailInput] = screen.getAllByRole('textbox')
  const button = screen.getByRole('button') 

  // simulate user input
  user.type(nameInput, 'odin')
  user.type(emailInput, 'odin@gmail.com')

  // simulate form submission
  user.click(button)

  // assertions
  expect(onUserAdd).toHaveBeenCalledTimes(1)
  expect(onUserAdd).toHaveBeenCalledWith({name: 'odin', email: 'odin@gmail.com'})
})