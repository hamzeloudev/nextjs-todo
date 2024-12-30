import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material'
import { Todo } from '@/store/todoStore'

interface EditTodoDialogProps {
  isOpen: boolean
  onClose: () => void
  todo: Todo
  onEdit: (id: number, text: string) => void
}

export const EditTodoDialog: React.FC<EditTodoDialogProps> = ({ isOpen, onClose, todo, onEdit }) => {
  const [editText, setEditText] = useState(todo.text)

  const handleEditSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Todo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Todo"
          type="text"
          fullWidth
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button data-testid="Save" onClick={handleEditSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  )
}

