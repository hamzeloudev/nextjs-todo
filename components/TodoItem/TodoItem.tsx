import React, { useState } from 'react'
import { Todo } from '@/store/todoStore'
import { CardContent, Checkbox, IconButton, Typography, useTheme } from '@mui/material'
import { useColorScheme } from "@mui/material/styles"
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { DeleteTodoDialog } from '../DeleteTodoDialog'
import { motion } from 'framer-motion'
import { todoItemVariants } from './animations'
import { todoItemStyles } from './styles'
import { EditTodoDialog } from '../EditTodoDialog'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onEdit: (id: number, text: string) => void
  onDelete: (id: number) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const theme = useTheme()
  const { mode } = useColorScheme()

  return (
    <>
      <motion.div
        variants={todoItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        layout
      >
        <motion.div
          style={todoItemStyles(theme, todo.completed, mode)}
          className="rounded-lg shadow-md overflow-hidden"
        >
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                color="primary"
              />
              <Typography
                variant="body1"
                className={`ml-2 ${todo.completed ? 'line-through' : ''}`}
                sx={{ color: theme.palette.text.primary }}
              >
                {todo.text}
              </Typography>
            </div>
            <div>
              <IconButton data-testid="Edit" onClick={() => setIsEditDialogOpen(true)} color="primary" size="small">
                <EditIcon />
              </IconButton>
              <IconButton data-testid="Delete" onClick={() => setIsDeleteDialogOpen(true)} color="error" size="small">
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </motion.div>
      </motion.div>

      <EditTodoDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        todo={todo}
        onEdit={onEdit}
      />

      <DeleteTodoDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={() => onDelete(todo.id)}
      />
    </>
  )
}

