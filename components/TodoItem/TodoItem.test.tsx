import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from './TodoItem'

const mockTodo = {
  id: 1,
  text: 'Test Todo',
  completed: false,
}

describe('TodoItem', () => {
  it('renders todo text and buttons', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    )
    expect(screen.getByText('Test Todo')).toBeInTheDocument()
    expect(screen.getByTestId('Edit')).toBeInTheDocument()
    expect(screen.getByTestId('Delete')).toBeInTheDocument()
  })

  it('calls onToggle when checkbox is clicked', () => {
    const mockOnToggle = jest.fn()
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  it('opens edit modal when Edit button is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    )
    
    const editButton = screen.getByTestId('Edit')
    fireEvent.click(editButton)

    expect(screen.getByText('Edit Todo')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Test Todo')).toBeInTheDocument()
    expect(screen.getByTestId('Save')).toBeInTheDocument()
  })

  it('calls onEdit when Save button is clicked in edit modal', () => {
    const mockOnEdit = jest.fn()
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onEdit={mockOnEdit}
        onDelete={() => {}}
      />
    )
    
    const editButton = screen.getByTestId('Edit')
    fireEvent.click(editButton)

    const input = screen.getByDisplayValue('Test Todo')
    fireEvent.change(input, { target: { value: 'Updated Todo' } })

    const saveButton = screen.getByTestId('Save')
    fireEvent.click(saveButton)

    expect(mockOnEdit).toHaveBeenCalledWith(1, 'Updated Todo')
  })

  it('opens delete confirmation modal when Delete button is clicked', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    )
    
    const deleteButton = screen.getByTestId('Delete')
    fireEvent.click(deleteButton)

    expect(screen.getByText('Confirm Delete')).toBeInTheDocument()
    expect(screen.getByText('Are you sure you want to delete this todo?')).toBeInTheDocument()
    expect(screen.getByTestId('DeleteConfirm')).toBeInTheDocument()
  })

  // it('calls onDelete when Delete button is clicked in delete confirmation modal', () => {
  //   const mockOnDelete = jest.fn()
  //   render(
  //     <TodoItem
  //       todo={mockTodo}
  //       onToggle={() => {}}
  //       onEdit={() => {}}
  //       onDelete={mockOnDelete}
  //     />
  //   )
    
  //   const deleteButton = screen.getByTestId('Delete')
  //   fireEvent.click(deleteButton)

  //   const confirmDeleteButton = screen.getByTestId('Delete')
  //   fireEvent.click(confirmDeleteButton)

  //   expect(mockOnDelete).toHaveBeenCalledWith(1)
  // })
})

