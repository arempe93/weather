import { useMemo } from 'react'

import { OneCallResponse } from '@/types/openweather'

import WeatherIcon from '@/app/WeatherIcon'

import Stack from '@/components/Stack'

import { insertAtIndex } from '@/util/array'
import { FormatKind, formatUnix, TimeUnit } from '@/util/date'
import {
  formatTemperature,
  isNight,
  nextSunriseSunset,
  openweatherIdToCode,
  TemperatureUnit,
  WeatherCode,
} from '@/util/weather'

type BaseHour = {
  description: string
  unix: number
}
type WeatherHour = BaseHour & {
  code: WeatherCode
  isNight: boolean
  type: 'weather'
}
type SunriseSunsetHour = BaseHour & {
  type: 'sunrise' | 'sunset'
}

type Hour = WeatherHour | SunriseSunsetHour

export type Props = {
  data: OneCallResponse
  temperatureUnit: TemperatureUnit
  timeUnit: TimeUnit
}

const Hourly = ({ data, temperatureUnit, timeUnit }: Props) => {
  const hours = useMemo<Hour[]>(() => {
    const weatherHours: Hour[] = data.hourly.slice(0, 24).map((hour) => ({
      code: openweatherIdToCode(hour.weather[0].id),
      description: formatTemperature(hour.temp, temperatureUnit),
      isNight: isNight(hour.dt, data),
      type: 'weather',
      unix: hour.dt,
    }))

    let hours = Array.from(weatherHours)
    let didInsert = false
    let startTime = Date.now()

    const { sunrise, sunset } = nextSunriseSunset(data)

    weatherHours.forEach((weatherHour, index) => {
      if (sunrise >= startTime && sunrise < weatherHour.unix) {
        hours = insertAtIndex(hours, didInsert ? index + 1 : index, {
          description: 'Sunrise',
          unix: sunrise,
          type: 'sunrise',
        })
        didInsert = true
      }

      if (sunset >= startTime && sunset < weatherHour.unix) {
        hours = insertAtIndex(hours, didInsert ? index + 1 : index, {
          description: 'Sunset',
          unix: sunset,
          type: 'sunset',
        })
        didInsert = true
      }

      startTime = weatherHour.unix
    })

    return hours
  }, [data.current.dt])

  return (
    <div className="grid gap-4 grid-flow-col">
      {hours.map((hour) => (
        <Stack key={hour.unix} inline vertical align="center" gap={16}>
          <p className="text-[white] font-light whitespace-nowrap">
            {formatUnix(hour.unix, {
              formatKind:
                hour.type === 'weather' ? FormatKind.Hour : FormatKind.Time,
              tz: data.timezone,
              unit: timeUnit,
            })}
          </p>
          {hour.type === 'weather' ? (
            <div className="w-8 h-8">
              <WeatherIcon isNight={hour.isNight} code={hour.code} />
            </div>
          ) : (
            <img
              className="w-8 h-8"
              src={hour.type === 'sunrise' ? '/sunrise.svg' : '/sunset.svg'}
            />
          )}
          <p className="text-[white] font-light">{hour.description}</p>
        </Stack>
      ))}
    </div>
  )
}

export default Hourly
