import {
  faLocationArrow,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import qs from 'query-string'
import useSWR from 'swr'

import { useDisplaySettings } from '@/app/DisplaySettingsProvider'

import ScrollArea from '@/app/ScrollArea'
import TemperatureRange from '@/app/TemperatureRange'
import WeatherIcon from '@/app/WeatherIcon'

import Stack from '@/components/Stack'

import { FormatKind, formatUnix } from '@/util/date'
import {
  formatDisance,
  formatSpeed,
  formatTemperature,
  openweatherIdToCode,
  weatherCodeToDescription,
} from '@/util/weather'

import data from './tempdata'

export type Props = {
  coords?: {
    lat: number
    lon: number
  }
  name?: string
}

const WeatherDisplay = ({ coords, name }: Props) => {
  // const { data, error } = useSWR(
  //   coords ? [coords.lat, coords.lon] : null,
  //   currentWeatherFetcher,
  //   {
  //     dedupingInterval: 10 * 60 * 1000,
  //   }
  // )

  const { distanceUnit, temperatureUnit, timeUnit } = useDisplaySettings()

  // if (error) {
  //   throw new Error(error)
  // }

  return (
    <Stack vertical gap={32}>
      <Stack align="center" justify="center" horizontalGap={16}>
        <FontAwesomeIcon
          fixedWidth
          className="text-[white] text-xl"
          icon={!!name ? faMapMarkerAlt : faLocationArrow}
        />

        <h1 className="text-[white] font-medium text-center">
          {name ? name : 'My location'}
        </h1>
      </Stack>
      {data && (
        <div className="grid gap-6 grid-cols-1 grid-rows-none laptop:grid-cols-2 laptop:gap-12">
          <Stack vertical className="laptop:flex-1" gap={48}>
            <Stack vertical>
              <Stack>
                <WeatherIcon
                  className="w-12 h-12"
                  code={openweatherIdToCode(data.current.weather[0].id)}
                  isNight={data.current.dt > data.current.sunset}
                />
                <h3 className="text-[white] text-4xl font-thin">
                  {weatherCodeToDescription(
                    openweatherIdToCode(data.current.weather[0].id)
                  )}
                </h3>
              </Stack>
              <Stack align="end" gap={16}>
                <h2 className="text-[white] text-9xl font-thin">
                  {formatTemperature(data.current.temp, temperatureUnit)}
                </h2>
                <TemperatureRange
                  className="text-base"
                  high={data.daily[0].temp.max}
                  low={data.daily[0].temp.min}
                  unit={temperatureUnit}
                />
              </Stack>
            </Stack>
            <ScrollArea className="max-w-full">
              <Stack>
                {data.hourly.slice(0, 24).map((hour) => (
                  <Stack
                    key={hour.dt}
                    inline
                    vertical
                    align="center"
                    className="p-2"
                    gap={16}
                  >
                    <p className="text-[white] font-light">
                      {formatUnix(hour.dt, {
                        formatKind: FormatKind.Hour,
                        tz: data.timezone,
                        unit: timeUnit,
                      })}
                    </p>
                    <WeatherIcon
                      className="w-8 h-8"
                      isNight={
                        hour.dt < data.daily[0].sunrise ||
                        (hour.dt > data.daily[0].sunset &&
                          hour.dt < data.daily[1].sunrise)
                      }
                      code={openweatherIdToCode(hour.weather[0].id)}
                    />
                    <p className="text-[white] font-light">
                      {formatTemperature(hour.temp, temperatureUnit)}
                    </p>
                  </Stack>
                ))}
              </Stack>
            </ScrollArea>
          </Stack>
          <Stack vertical className="laptop:flex-1">
            <Stack vertical className="py-2" gap={12}>
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Details
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
              <div className="grid grid-rows-2 grid-cols-3 w-full gap-4">
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/rain.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Percipitation</small>
                    <p className="text-[white] text-base">
                      {Math.ceil(data.daily[0].pop * 100)}%
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/thermostat.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Feels like</small>
                    <p className="text-[white] text-base">
                      {formatTemperature(
                        data.current.feels_like,
                        temperatureUnit
                      )}
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/humidity.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Humidity</small>
                    <p className="text-[white] text-base">
                      {Math.ceil(data.current.humidity)}%
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/drop.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Dew point</small>
                    <p className="text-[white] text-base">
                      {formatTemperature(
                        data.current.dew_point,
                        temperatureUnit
                      )}
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/wind.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Wind</small>
                    <p className="text-[white] text-base">
                      {formatSpeed(data.current.wind_speed, distanceUnit)}
                    </p>
                  </Stack>
                </Stack>
                <Stack
                  vertical
                  align="center"
                  className="p-2 rounded-lg bg-white-alpha-8"
                >
                  <img className="w-8 h-8" src="/visibility.svg" />
                  <Stack vertical align="center" gap={4}>
                    <small className="text-white-alpha-88">Visibility</small>
                    <p className="text-[white] text-base">
                      {formatDisance(data.current.visibility, distanceUnit)}
                    </p>
                  </Stack>
                </Stack>
              </div>
            </Stack>
            {/* <div className="w-full py-2">
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Chance of Rain
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
            </div>
            <div className="w-full py-2">
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Current Rainfall
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
            </div> */}
            <Stack vertical className="py-2" gap={12}>
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Next 7 Days
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
              <ScrollArea className="max-w-full">
                <Stack>
                  {data.daily.slice(1).map((daily) => (
                    <Stack
                      key={daily.dt}
                      inline
                      vertical
                      align="center"
                      className="p-2"
                      gap={16}
                    >
                      <p className="text-[white] font-light">
                        {formatUnix(daily.dt, {
                          formatKind: FormatKind.Weekday,
                          tz: data.timezone,
                          unit: timeUnit,
                        })}
                      </p>
                      <WeatherIcon
                        className="w-8 h-8"
                        isNight={false}
                        code={openweatherIdToCode(daily.weather[0].id)}
                      />
                      <TemperatureRange
                        high={daily.temp.max}
                        low={daily.temp.min}
                        unit={temperatureUnit}
                      />
                    </Stack>
                  ))}
                </Stack>
              </ScrollArea>
            </Stack>
          </Stack>
        </div>
      )}
    </Stack>
  )
}

const currentWeatherFetcher = async (lat: number, lon: number) => {
  const url = qs.stringifyUrl({
    url: '/api/openweather/data/2.5/weather',
    query: { lat, lon },
  })
  const result = await fetch(url)
  return await result.json()
}

export default WeatherDisplay
