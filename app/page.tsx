'use client'

import React from 'react'
import { Container, Typography, AppBar, Toolbar } from '@mui/material'
import { ThemeProvider } from '../providers/ThemeProvider'
import { TodoList } from '../components/TodoList'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTodoStore } from '@/store/todoStore'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { AddTodoForm } from '@/components/AddTodoForm'

export default function Home() {
  const { addTodo } = useTodoStore()

  return (
    <CssVarsProvider>
      <ThemeProvider>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sticky Todo List
            </Typography>
            <ThemeToggle />
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" className="py-8">
          <AddTodoForm onAdd={addTodo} />
          <TodoList />
        </Container>
      </ThemeProvider>
    </CssVarsProvider>
  )
}

