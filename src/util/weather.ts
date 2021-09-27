const kelvinToC = (kelvin: number) => kelvin - 273.15
const kelvinToF = (kelvin: number) => (kelvinToC(kelvin) * 9) / 5 + 32

export const convertTemperature = (kelvin: number, unit: 'C' | 'F') =>
  unit === 'C' ? kelvinToC(kelvin) : kelvinToF(kelvin)

export const formatTemperature = (kelvin: number, unit: 'C' | 'F') =>
  `${Math.round(convertTemperature(kelvin, unit))}°`
