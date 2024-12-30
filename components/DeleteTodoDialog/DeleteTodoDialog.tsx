import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from '@mui/material'

interface DeleteTodoDialogProps {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

export const DeleteTodoDialog: React.FC<DeleteTodoDialogProps> = ({ isOpen, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete()
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this todo?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button data-testid="DeleteConfirm" onClick={handleDelete} variant="contained" color="error">Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

