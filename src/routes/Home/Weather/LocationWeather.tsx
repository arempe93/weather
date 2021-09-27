import useGeolocation from '@/hooks/useGeolocation'

import WeatherDisplay from './WeatherDisplay'

const LocationWeather = () => {
  const { error, position } = useGeolocation()

  if (error) {
    return <>{error.message}</>
  }

  return (
    <WeatherDisplay
      coords={
        position
          ? { lat: position.coords.latitude, lon: position.coords.longitude }
          : undefined
      }
    />
  )
}

export default LocationWeather
