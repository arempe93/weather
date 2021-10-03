const kelvinToC = (kelvin: number) => kelvin - 273.15
const kelvinToF = (kelvin: number) => (kelvinToC(kelvin) * 9) / 5 + 32

export type TemperatureUnit = 'C' | 'F'

export const convertTemperature = (kelvin: number, unit: TemperatureUnit) =>
  unit === 'C' ? kelvinToC(kelvin) : kelvinToF(kelvin)

export const formatTemperature = (kelvin: number, unit: TemperatureUnit) =>
  `${Math.round(convertTemperature(kelvin, unit))}°`

export enum WeatherCode {
  Storm,
  Drizzle,
  Rain,
  Snow,
  Fog,
  Clear,
  PartlyCloudy,
  MostlyCloudy,
  Cloudy,
}

export const openweatherIdToCode = (id: number): WeatherCode => {
  if (id >= 200 && id < 300) {
    return WeatherCode.Storm
  } else if (id >= 300 && id < 400) {
    return WeatherCode.Drizzle
  } else if (id >= 500 && id < 600) {
    return WeatherCode.Rain
  } else if (id >= 600 && id < 700) {
    return WeatherCode.Snow
  } else if (id >= 700 && id < 781) {
    return WeatherCode.Fog
  } else if (id === 781) {
    return WeatherCode.Storm
  } else if (id === 800) {
    return WeatherCode.Clear
  } else if (id === 801) {
    return WeatherCode.PartlyCloudy
  } else if (id === 802 || id === 803) {
    return WeatherCode.MostlyCloudy
  } else {
    return WeatherCode.Cloudy
  }
}

export const weatherCodeToIcon = (
  code: WeatherCode,
  isNight: boolean = false
) => {
  switch (code) {
    case WeatherCode.Storm:
      return '/storm.svg'
    case WeatherCode.Drizzle:
      return '/drizzle.svg'
    case WeatherCode.Rain:
      return '/rain.svg'
    case WeatherCode.Snow:
      return '/snow.svg'
    case WeatherCode.Fog:
      return '/fog.svg'
    case WeatherCode.Clear:
      return isNight ? '/clear_night.svg' : '/clear_day.svg'
    case WeatherCode.PartlyCloudy:
      return isNight ? 'partlycloudy_night.svg' : '/partlycloudy_day.svg'
    case WeatherCode.MostlyCloudy:
      return isNight ? 'mostlycloudy_night.svg' : '/mostlycloudy_day.svg'
    default:
      return '/cloudy.svg'
  }
}

export const weatherCodeToDescription = (code: WeatherCode) => {
  switch (code) {
    case WeatherCode.Storm:
      return 'Thunderstorms'
    case WeatherCode.Drizzle:
      return 'Drizzling'
    case WeatherCode.Rain:
      return 'Raining'
    case WeatherCode.Snow:
      return 'Snowing'
    case WeatherCode.Fog:
      return 'Foggy'
    case WeatherCode.Clear:
      return 'Clear skies'
    case WeatherCode.PartlyCloudy:
      return 'Partly cloudy'
    case WeatherCode.MostlyCloudy:
      return 'Mostly cloudy'
    default:
      return 'Cloudy'
  }
}

export type DistanceUnit = 'MI' | 'KM'

const metersPerSecondToMph = (mps: number) => mps * 2.237

const metersPerSecondToKmh = (mps: number) => mps * 3.6

export const convertSpeed = (mps: number, unit: DistanceUnit) =>
  unit === 'MI' ? metersPerSecondToMph(mps) : metersPerSecondToKmh(mps)

export const formatSpeed = (mps: number, unit: DistanceUnit) =>
  `${Math.round(convertSpeed(mps, unit))} ${unit === 'MI' ? 'mph' : 'km/h'}`

export const metersToMiles = (meters: number) => meters / 1609

export const metersToKilometers = (meters: number) => meters / 1000

export const convertDistance = (meters: number, unit: DistanceUnit) =>
  unit === 'MI' ? metersToMiles(meters) : metersToKilometers(meters)

export const formatDisance = (meters: number, unit: DistanceUnit) =>
  `${convertDistance(meters, unit).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  })} ${unit === 'MI' ? 'mi' : 'km'}`
