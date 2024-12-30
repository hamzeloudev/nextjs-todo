import { Theme } from '@mui/material/styles'

export const todoItemStyles = (theme: Theme, completed: boolean, mode?: string) => ({
  backgroundColor: completed
    ? mode === 'dark'
      ? theme.palette.success.dark
      : theme.palette.success.light
    : mode === 'dark'
    ? theme.palette.warning.dark
    : theme.palette.warning.light,
})
