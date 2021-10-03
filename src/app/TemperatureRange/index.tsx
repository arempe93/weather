import cx from 'classnames'

import { StyleProps } from '@/types/styles'

import Stack from '@/components/Stack'

import { TemperatureUnit, formatTemperature } from '@/util/weather'

export type Props = StyleProps & {
  high: number
  low: number
  unit: TemperatureUnit
}

const TemperatureRange = ({ className, high, low, unit, ...rest }: Props) => {
  return (
    <Stack inline vertical align="center" className="mb-3" gap={4}>
      <p {...rest} className={cx(className, 'text-[white] font-light')}>
        {formatTemperature(high, unit)}
      </p>
      <div className="h-[1px] bg-white-alpha-48 w-full" />
      <p {...rest} className={cx(className, 'text-[white] font-light')}>
        {formatTemperature(low, unit)}
      </p>
    </Stack>
  )
}

export default TemperatureRange
