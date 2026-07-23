import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { colors } from './types/colors'

const toRgbChannels = (hexColor) => {
  const normalized = hexColor.replace('#', '').slice(0, 6)
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized

  const number = Number.parseInt(value, 16)

  return `${(number >> 16) & 255} ${(number >> 8) & 255} ${number & 255}`
}

const themeVariables = {
  '--color-primary': colors.primary,
  '--color-primary-dark': colors.primaryDark,
  '--color-primary-soft': colors.primarySoft,
  '--color-background': colors.background,
  '--color-background-deep': colors.backgroundDeep,
  '--color-background-warm': colors.backgroundWarm,
  '--color-text': colors.text,
  '--color-text-muted': colors.textMuted,
  '--color-border': colors.border,
  '--color-border-strong': colors.borderStrong,
  '--color-white': colors.white,
  '--color-accent': colors.accent,
  '--color-primary-rgb': toRgbChannels(colors.primary),
  '--color-primary-dark-rgb': toRgbChannels(colors.primaryDark),
  '--color-primary-light-rgb': toRgbChannels(colors.primaryLight),
  '--color-surface-rgb': toRgbChannels(colors.surface),
  '--color-white-rgb': toRgbChannels(colors.white),
  '--color-accent-rgb': toRgbChannels(colors.accent),
  '--color-shadow-rgb': toRgbChannels(colors.shadow),
}

Object.entries(themeVariables).forEach(([property, value]) => {
  document.documentElement.style.setProperty(property, value)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
