import { OneCallResponse } from '@/types/openweather'

import { useDisplaySettings } from '@/app/DisplaySettingsProvider'
import LoadingArea from '@/app/LoadingArea'
import ScrollArea from '@/app/ScrollArea'
import TemperatureRange from '@/app/TemperatureRange'
import WeatherIcon from '@/app/WeatherIcon'

import Stack from '@/components/Stack'

import Detail from './Detail'
import Section from './Section'

import { FormatKind, formatUnix } from '@/util/date'
import {
  formatDisance,
  formatSpeed,
  formatTemperature,
  openweatherIdToCode,
} from '@/util/weather'

export type Props = {
  data?: OneCallResponse
}

const SidePanel = ({ data }: Props) => {
  const { distanceUnit, temperatureUnit, timeUnit } = useDisplaySettings()

  return (
    <Stack vertical className="laptop:flex-1">
      <Section title="Details">
        <div className="grid grid-rows-2 grid-cols-3 w-full gap-4">
          <Detail iconSrc="/rain.svg" title="Percipitation">
            {data ? `${Math.ceil(data.daily[0].pop * 100)}%` : '—'}
          </Detail>
          <Detail iconSrc="/thermostat.svg" title="Feels like">
            {data
              ? formatTemperature(data.current.feels_like, temperatureUnit)
              : '—'}
          </Detail>
          <Detail iconSrc="/humidity.svg" title="Humidity">
            {data ? `${Math.ceil(data.current.humidity)}%` : '—'}
          </Detail>
          <Detail iconSrc="/drop.svg" title="Dew point">
            {data
              ? formatTemperature(data.current.dew_point, temperatureUnit)
              : '—'}
          </Detail>
          <Detail iconSrc="/wind.svg" title="Wind">
            {data ? formatSpeed(data.current.wind_speed, distanceUnit) : '—'}
          </Detail>
          <Detail iconSrc="/visibility.svg" title="Visibility">
            {data ? formatDisance(data.current.visibility, distanceUnit) : '—'}
          </Detail>
        </div>
      </Section>
      {/* <Section title='Next hour' />
      <Section title='Chance of rain' /> */}
      <Section title="Next 7 days">
        {data ? (
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
        ) : (
          <LoadingArea className="h-32" />
        )}
      </Section>
    </Stack>
  )
}

export default SidePanel
