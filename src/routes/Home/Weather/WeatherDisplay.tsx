import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import qs from 'query-string'
import useSWR from 'swr'

import Stack from '@/components/Stack'

import {
  formatTemperature,
  openweatherIdToCode,
  WeatherCode,
  weatherCodeToDescription,
  weatherCodeToIcon,
} from '@/util/weather'

import data from './tempdata'
import WeatherIcon from '@/app/WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import {
  HOUR_FORMAT_12H,
  HOUR_FORMAT_24H,
  unixToZonedTime,
  WEEKDAY_FORMAT,
} from '@/util/date'
import ScrollArea from '@/app/ScrollArea'
import TemperatureRange from '@/app/TemperatureRange'

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

  // if (error) {
  //   throw new Error(error)
  // }

  return (
    <Stack vertical gap={64}>
      <Stack align="center" justify="center" horizontalGap={16}>
        {!name && (
          <FontAwesomeIcon
            fixedWidth
            className="text-[white] text-xl"
            icon={faLocationArrow}
          />
        )}
        <h1 className="text-[white] font-medium text-center laptop:text-5xl">
          {name ? name : 'My location'}
        </h1>
      </Stack>
      {data && (
        <div className="grid gap-6 grid-cols-1 grid-rows-2 laptop:grid-cols-2 laptop:grid-rows-none">
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
                  {formatTemperature(data.current.temp, 'F')}
                </h2>
                <TemperatureRange
                  className="text-base"
                  high={data.daily[0].temp.max}
                  low={data.daily[0].temp.min}
                  unit="F"
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
                      {format(
                        unixToZonedTime(hour.dt, data.timezone),
                        HOUR_FORMAT_12H
                      )}
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
                      {formatTemperature(hour.temp, 'F')}
                    </p>
                  </Stack>
                ))}
              </Stack>
            </ScrollArea>
          </Stack>
          <Stack vertical className="laptop:flex-1">
            <div className="w-full py-2">
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Details
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
            </div>
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
                        {format(
                          unixToZonedTime(daily.dt, data.timezone),
                          WEEKDAY_FORMAT
                        )}
                      </p>
                      <WeatherIcon
                        className="w-8 h-8"
                        isNight={false}
                        code={openweatherIdToCode(daily.weather[0].id)}
                      />
                      <TemperatureRange
                        high={daily.temp.max}
                        low={daily.temp.min}
                        unit="F"
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
