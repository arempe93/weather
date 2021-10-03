import { useDisplaySettings } from '@/app/DisplaySettingsProvider'

import Stack from '@/components/Stack'
import ToggleGroup from '@/components/ToggleGroup'
import { TimeUnit } from '@/util/date'

import { DistanceUnit, TemperatureUnit } from '@/util/weather'

const Menu = () => {
  const {
    distanceUnit,
    temperatureUnit,
    timeUnit,
    setDistanceUnit,
    setTemperatureUnit,
    setTimeUnit,
  } = useDisplaySettings()

  return (
    <Stack vertical className="py-2 min-w-[192px]" gap={16}>
      <Stack vertical>
        <small className="ml-1">Temperature</small>
        <div className="w-full">
          <ToggleGroup<TemperatureUnit>
            items={[
              { value: 'C', label: '°C' },
              { value: 'F', label: '°F' },
            ]}
            value={temperatureUnit}
            onChange={setTemperatureUnit}
          />
        </div>
      </Stack>
      <Stack vertical>
        <small className="ml-1">Distance</small>
        <div className="w-full">
          <ToggleGroup<DistanceUnit>
            items={[
              { value: 'MI', label: 'Mi.' },
              { value: 'KM', label: 'Km.' },
            ]}
            value={distanceUnit}
            onChange={setDistanceUnit}
          />
        </div>
      </Stack>
      <Stack vertical>
        <small className="ml-1">Clock</small>
        <div className="w-full">
          <ToggleGroup<TimeUnit>
            items={[
              { value: '12H', label: '12h' },
              { value: '24H', label: '24h' },
            ]}
            value={timeUnit}
            onChange={setTimeUnit}
          />
        </div>
      </Stack>
    </Stack>
  )
}

export default Menu
