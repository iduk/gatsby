import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Toggler = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 10;
`

const ThemeToggle = () => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }
  useEffect(() => {
    setTheme(window.__theme)
  }, [])

  const [theme, setTheme] = useState(websiteTheme)

  const toggleMode = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Toggler onClick={toggleMode}>
      {theme === 'dark' ? 'Light Mode 🌈' : 'Dark Mode 🌙'}
    </Toggler>
  )
}

export default ThemeToggle
