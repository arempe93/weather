import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import qs from 'query-string'
import useSWR from 'swr'

import Stack from '@/components/Stack'

import {
  formatTemperature,
  openweatherIdToCode,
  weatherCodeToDescription,
  weatherCodeToIcon,
} from '@/util/weather'

import data from './tempdata'
import WeatherIcon from '@/app/WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

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
    <Stack vertical gap={32}>
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
        <Stack wrap align="start" gap={24}>
          <Stack vertical className="laptop:flex-1">
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
              <Stack inline vertical align="center" className="mb-3" gap={4}>
                <p className="text-[white] text-base font-light">
                  {formatTemperature(data.daily[0].temp.max, 'F')}
                </p>
                <div className="h-[1px] bg-white-alpha-48 w-full" />
                <p className="text-[white] text-base font-light">
                  {formatTemperature(data.daily[0].temp.min, 'F')}
                </p>
              </Stack>
            </Stack>
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
            <div className="w-full py-2">
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
            </div>
            <div className="w-full py-2">
              <Stack gap={16}>
                <p className="text-[white] uppercase text-sm font-light tracking-wider">
                  Next 7 Days
                </p>
                <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
              </Stack>
            </div>
          </Stack>
        </Stack>
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
