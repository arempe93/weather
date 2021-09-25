import qs from 'query-string'
import useSWR from 'swr'

export type Props = {
  lat: number
  lon: number
  name?: string
}

const WeatherDisplay = ({ lat, lon, name }: Props) => {
  const { data, error } = useSWR([lat, lon], currentWeatherFetcher)

  if (error) {
    throw new Error(error)
  }

  return (
    <div>
      <h1>Weather for {name ? name : 'location'}</h1>
      {data && (
        <div>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
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
