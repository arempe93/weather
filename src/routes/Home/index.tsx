import Head from 'next/head'
import { useCallback } from 'react'
import { getGeocode, getLatLng } from 'use-places-autocomplete'

import useLocalStorage from '@/hooks/useLocalStorage'

import GooglePlacesAutocomplete, {
  Suggestion,
} from '@/components/GooglePlacesAutocomplete'
import SingleColumnLayout from '@/components/SingleColumnLayout'

import { removeAtIndex } from '@/util/array'

const PLACES_STORAGE_KEY = '$places'

type Place = {
  id: string
  lat: number
  lon: number
  name: string
}

const Home = () => {
  const [places, setPlaces] = useLocalStorage<Place[]>(
    PLACES_STORAGE_KEY,
    (serialized) => {
      const parsed = JSON.parse(serialized)
      if (!Array.isArray(parsed)) {
        return null
      }

      return parsed as Place[]
    }
  )

  const addPlace = useCallback(async (suggestion: Suggestion) => {
    const place = await suggestionToPlace(suggestion)
    setPlaces((places) => (places ? [...places, place] : [place]))
  }, [])

  const removePlace = useCallback(
    (index: number) =>
      setPlaces((places) => (places ? removeAtIndex(places, index) : [])),
    []
  )

  return (
    <>
      <Head>
        <title>Palmetto Weather</title>
      </Head>
      <SingleColumnLayout>
        <div className="py-8 laptop:py-24">
          <GooglePlacesAutocomplete
            autoFocus
            id="place-select"
            placeholder="Find your weather..."
            selectedItem={null}
            onSelect={(suggestion) => suggestion && addPlace(suggestion)}
          />
          <div>
            {places &&
              places.map((place, index) => (
                <div key={place.id}>
                  {place.name} ({place.lat}, {place.lon})
                  <button onClick={() => removePlace(index)}>Remove</button>
                </div>
              ))}
          </div>
        </div>
      </SingleColumnLayout>
    </>
  )
}

const suggestionToPlace = async (suggestion: Suggestion): Promise<Place> => {
  const geocoding = await getGeocode({ placeId: suggestion.place_id })
  const latLon = await getLatLng(geocoding[0])

  const addressComponents = geocoding[0].address_components
  const city = addressComponents.find((component) =>
    component.types.includes('locality')
  )
  const state = addressComponents.find((component) =>
    component.types.includes('administrative_area_level_1')
  )

  return {
    id: suggestion.place_id,
    lat: latLon.lat,
    lon: latLon.lng,
    name: `${city!.long_name}, ${state!.short_name}`,
  }
}

export default Home
