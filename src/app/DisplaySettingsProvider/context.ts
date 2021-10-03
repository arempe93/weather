import { createContext, useContext } from 'react'

import { TimeUnit } from '@/util/date'
import { DistanceUnit, TemperatureUnit } from '@/util/weather'
import { ValueOrSetter } from '@/hooks/useLocalStorage'

export type DisplaySettingsContextShape = {
  distanceUnit: DistanceUnit
  temperatureUnit: TemperatureUnit
  timeUnit: TimeUnit
  setDistanceUnit: (valueOrSetter: ValueOrSetter<DistanceUnit>) => void
  setTemperatureUnit: (valueOrSetter: ValueOrSetter<TemperatureUnit>) => void
  setTimeUnit: (valueOrSetter: ValueOrSetter<TimeUnit>) => void
}

const Context = createContext<DisplaySettingsContextShape>({
  distanceUnit: 'MI',
  temperatureUnit: 'F',
  timeUnit: '12H',
  setDistanceUnit: () => undefined,
  setTemperatureUnit: () => undefined,
  setTimeUnit: () => undefined,
})

export const useDisplaySettings = () => useContext(Context)

export default Context
