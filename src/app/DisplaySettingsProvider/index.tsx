import { PropsWithChildren, useMemo } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

import { TimeUnit } from '@/util/date'
import { DistanceUnit, TemperatureUnit } from '@/util/weather'

import Context, { DisplaySettingsContextShape } from './context'

const DisplaySettingsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [distanceUnit, setDistanceUnit] = useLocalStorage<DistanceUnit>(
    '$distance',
    (serialized) => {
      return (JSON.parse(serialized) ?? 'MI') as DistanceUnit
    }
  )

  const [
    temperatureUnit,
    setTemperatureUnit,
  ] = useLocalStorage<TemperatureUnit>('$temperature', (serialized) => {
    return (JSON.parse(serialized) ?? 'F') as TemperatureUnit
  })

  const [timeUnit, setTimeUnit] = useLocalStorage<TimeUnit>(
    '$time',
    (serialized) => {
      return (JSON.parse(serialized) ?? '12H') as TimeUnit
    }
  )

  const value = useMemo<DisplaySettingsContextShape>(
    () => ({
      distanceUnit: distanceUnit ?? 'MI',
      temperatureUnit: temperatureUnit ?? 'F',
      timeUnit: timeUnit ?? '12H',
      setDistanceUnit,
      setTemperatureUnit,
      setTimeUnit,
    }),
    [distanceUnit, temperatureUnit, timeUnit]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default DisplaySettingsProvider

export { useDisplaySettings } from './context'
