import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useTheme, useColorScheme } from '@mui/material/styles'
import { addTodoFormStyles } from './styles'

interface AddTodoFormProps {
  onAdd: (text: string) => void
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('')
  const theme = useTheme()
  const { mode } = useColorScheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTodo.trim()) {
      onAdd(newTodo)
      setNewTodo('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-8">
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        variant="outlined"
        fullWidth
        className="flex-grow"
        sx={addTodoFormStyles(theme, mode)}
      />
      <Button name="Add" type="submit" variant="contained" color="primary" className="w-full sm:w-auto">
        Add
      </Button>
    </form>
  )
}

