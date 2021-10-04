import Display from './Display'

import { Place } from '../util'

export type Props = {
  place: Place
}

const PlaceWeather = ({ place }: Props) => {
  return (
    <Display coords={{ lat: place.lat, lon: place.lon }} name={place.name} />
  )
}

export default PlaceWeather
