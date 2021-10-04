import { OneCallResponse } from '@/types/openweather'

import { useDisplaySettings } from '@/app/DisplaySettingsProvider'
import LoadingArea from '@/app/LoadingArea'
import ScrollArea from '@/app/ScrollArea'
import TemperatureRange from '@/app/TemperatureRange'
import WeatherIcon from '@/app/WeatherIcon'

import Skeleton from '@/components/Skeleton'
import Stack from '@/components/Stack'

import { FormatKind, formatUnix } from '@/util/date'
import {
  formatTemperature,
  openweatherIdToCode,
  weatherCodeToDescription,
} from '@/util/weather'
import Hourly from './Hourly'

export type Props = {
  data?: OneCallResponse
}

const MainPanel = ({ data }: Props) => {
  const { temperatureUnit, timeUnit } = useDisplaySettings()

  return (
    <Stack vertical className="laptop:flex-1" gap={48}>
      <Stack vertical>
        {data ? (
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
        ) : (
          <Skeleton.Text kind="h1" />
        )}
        <Stack align="end" gap={16}>
          <h2 className="text-[white] text-9xl font-thin">
            {data
              ? formatTemperature(data.current.temp, temperatureUnit)
              : '——°'}
          </h2>
          {data && (
            <TemperatureRange
              className="text-base"
              high={data.daily[0].temp.max}
              low={data.daily[0].temp.min}
              unit={temperatureUnit}
            />
          )}
        </Stack>
      </Stack>
      {data ? (
        <ScrollArea className="max-w-full">
          <Hourly
            data={data}
            temperatureUnit={temperatureUnit}
            timeUnit={timeUnit}
          />
        </ScrollArea>
      ) : (
        <LoadingArea />
      )}
    </Stack>
  )
}

export default MainPanel
