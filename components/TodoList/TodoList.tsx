'use client'

import React from 'react'
import { Grid } from '@mui/material'
import { TodoItem } from '../TodoItem'
import { useTodoStore } from '@/store/todoStore'
import { motion } from 'framer-motion'
import { todoListVariants } from '../TodoItem/animations'

export const TodoList: React.FC = () => {
  const { todos, toggleTodo, editTodo, deleteTodo } = useTodoStore()

  return (
    <motion.div
      variants={todoListVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={2}>
        {todos.map((todo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={todo.id}>
            <TodoItem
              todo={todo}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  )
}

