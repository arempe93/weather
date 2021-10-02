import { StyleProps } from '@/types/styles'

import { WeatherCode, weatherCodeToIcon } from '@/util/weather'

export type Props = StyleProps & {
  code: WeatherCode
  isNight: boolean
}

const WeatherIcon = ({ code, isNight, ...rest }: Props) => {
  return <img {...rest} src={weatherCodeToIcon(code, isNight)} />
}

export default WeatherIcon
