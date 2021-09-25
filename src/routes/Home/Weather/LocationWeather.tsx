import useGeolocation from '@/hooks/useGeolocation'
import WeatherDisplay from './WeatherDisplay'

const LocationWeather = () => {
  const { error, isLoading, position } = useGeolocation()

  if (error) {
    console.log(error)
  }
  if (position) {
    console.log(position)
  }

  return (
    <div>
      {position && (
        <WeatherDisplay
          lat={position.coords.latitude}
          lon={position.coords.longitude}
        />
      )}
      {error && (
        <div>
          <pre>Error: {error.message}</pre>
        </div>
      )}
    </div>
  )
}

export default LocationWeather
