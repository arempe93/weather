import WeatherDisplay from './WeatherDisplay'

import { Place } from '../util'

export type Props = {
  place: Place
}

const PlaceWeather = ({ place }: Props) => {
  return <WeatherDisplay lat={place.lat} lon={place.lon} name={place.name} />
}

export default PlaceWeather
