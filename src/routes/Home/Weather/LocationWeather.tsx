import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useGeolocation from '@/hooks/useGeolocation'

import Display from './Display'

const LocationWeather = () => {
  const { error, position } = useGeolocation()

  if (error) {
    return (
      <div className="flex items-center gap-8 p-8 bg-danger-alpha-16 border border-danger rounded-lg text-[white] w-full">
        <FontAwesomeIcon className="text-2xl" icon={faExclamationTriangle} />
        <div>
          <h3>Unable to get location</h3>
          <small className="text-white-alpha-76">Reason: {error.message}</small>
        </div>
      </div>
    )
  }

  return (
    <Display
      coords={
        position
          ? { lat: position.coords.latitude, lon: position.coords.longitude }
          : undefined
      }
    />
  )
}

export default LocationWeather
