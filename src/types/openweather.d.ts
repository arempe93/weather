type WeatherDescriptor = {
  id: number
  main: string
  description: string
  icon: string
}

type TempPredictions = {
  day: number
  night: number
  eve: number
  morn: number
}

type CurrentWeather = {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust?: number
  rain?: {
    '1h': number
  }
  snow?: {
    '1h': number
  }
  weather: WeatherDescriptor[]
}

export type OneCallResponse = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: CurrentWeather & {
    sunrise: number
    sunset: number
  }
  minutely: {
    dt: number
    precipitation: number
  }[]
  hourly: (CurrentWeather & {
    pop: number
  })[]
  daily: {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    temp: TempPredictions & {
      min: number
      max: number
    }
    feels_like: TempPredictions
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: WeatherDescriptor[]
    clouds: number
    pop: number
    uvi: number
  }[]
}
