import React from 'react'
import { IconButton } from '@mui/material'
import { useColorScheme } from "@mui/material/styles"
import { Brightness4, Brightness7 } from '@mui/icons-material'

export const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme()

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}

