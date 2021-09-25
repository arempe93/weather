import LocationWeather from './LocationWeather'
import PlaceWeather from './PlaceWeather'

import { Place } from '../util'

export type Props = {
  place: Place | null
}

const Weather = ({ place }: Props) => {
  if (place) {
    return <PlaceWeather place={place} />
  } else {
    return <LocationWeather />
  }
}

export default Weather
