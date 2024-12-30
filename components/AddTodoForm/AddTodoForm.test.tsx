import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddTodoForm } from './AddTodoForm'

describe('AddTodoForm', () => {
  it('renders input and button', () => {
    render(<AddTodoForm onAdd={() => {}} />)
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
  })

  it('calls onAdd with input value when form is submitted', () => {
    const mockOnAdd = jest.fn()
    render(<AddTodoForm onAdd={mockOnAdd} />)
    
    const input = screen.getByPlaceholderText('Add a new todo')
    const button = screen.getByRole('button', { name: 'Add' })

    fireEvent.change(input, { target: { value: 'New Todo' } })
    fireEvent.click(button)

    expect(mockOnAdd).toHaveBeenCalledWith('New Todo')
  })

  it('does not call onAdd when input is empty', () => {
    const mockOnAdd = jest.fn()
    render(<AddTodoForm onAdd={mockOnAdd} />)
    
    const button = screen.getByRole('button', { name: 'Add' })

    fireEvent.click(button)

    expect(mockOnAdd).not.toHaveBeenCalled()
  })
})

