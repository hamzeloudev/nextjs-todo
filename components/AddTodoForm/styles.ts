import { Theme } from '@mui/material/styles'


export const addTodoFormStyles = (theme: Theme, mode?: string) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[400],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
})

