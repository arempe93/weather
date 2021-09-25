import { useEffect, useState } from 'react'

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [position, setPosition] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<GeolocationPositionError | null>(null)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos)
        setIsLoading(false)
      },
      (error) => {
        setError(error)
        setIsLoading(false)
      },
      {
        maximumAge: 10 * 60 * 1000,
      }
    )
  }, [])

  return { error, isLoading, position }
}

export default useGeolocation
