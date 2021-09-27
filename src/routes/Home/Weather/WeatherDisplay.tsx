import { formatTemperature } from '@/util/weather'
import qs from 'query-string'
import useSWR from 'swr'

export type Props = {
  coords?: {
    lat: number
    lon: number
  }
  name?: string
}

const WeatherDisplay = ({ coords, name }: Props) => {
  const { data, error } = useSWR(
    coords ? [coords.lat, coords.lon] : null,
    currentWeatherFetcher,
    {
      dedupingInterval: 10 * 60 * 1000,
    }
  )

  if (error) {
    throw new Error(error)
  }

  return (
    <div>
      <h1>Weather for {name ? name : 'location'}</h1>
      {data && <div>{formatTemperature(data.main.temp, 'C')}</div>}
    </div>
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
