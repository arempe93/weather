const hexToRgba = (hexString) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString)

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

const ALPHAS = [2, 4, 8, 12, 16, 24, 32, 48, 52, 68, 76, 84, 88, 92, 96]

const generateAlphas = (hexString) => {
  const result = {}
  const { r, g, b } = hexToRgba(hexString)

  ALPHAS.forEach((alpha) => {
    result[alpha] = `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
  })

  return result
}

const theme = {
  ink: '#122166',
  darkest: '#1F3AB2',
  darker: '#2442CB',
  dark: '#294BE5',
  DEFAULT: '#2D53FE',
  light: '#5775FE',
  lighter: '#8198FE',
  lightest: '#ABBAFF',
  alpha: generateAlphas('#2D53FE'),
}

const success = {
  darkest: '#107163',
  darker: '#128172',
  dark: '#159180',
  DEFAULT: '#17a18e',
  light: '#45b4a5',
  lighter: '#74c7bb',
  lightest: '#a2d9d2',
  alpha: generateAlphas('#17a18e'),
}

const warning = {
  darkest: '#b37839',
  darker: '#cc8941',
  dark: '#e69a49',
  DEFAULT: '#ffab51',
  light: '#ffbc74',
  lighter: '#ffcd97',
  lightest: '#ffddb9',
  alpha: generateAlphas('#ffab51'),
}

const danger = {
  darkest: '#B02A2A',
  darker: '#CA3030',
  dark: '#E33636',
  DEFAULT: '#FC3C3C',
  light: '#FD6363',
  lighter: '#FD8A8A',
  lightest: '#FEB1B1',
  alpha: generateAlphas('#FC3C3C'),
}

const neutral = {
  darkest: '#091E42',
  darker: '#253858',
  dark: '#505F79',
  DEFAULT: '#7A869A',
  light: '#B3BAC5',
  lighter: '#DFE1E6',
  lightest: '#EBECF0',
  ghost: '#F4F5F7',
  alpha: generateAlphas('#7A869A'),
}

const text = {
  default: '#091E42',
  light: '#344563',
  lighter: '#5E6C84',
  lightest: '#97A0AF',
}

module.exports = {
  theme,
  success,
  warning,
  danger,
  neutral,
  text,
  white: {
    alpha: generateAlphas('#ffffff'),
  },
}
