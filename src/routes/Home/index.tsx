import Head from 'next/head'
import { useCallback, useState } from 'react'
import { getGeocode, getLatLng } from 'use-places-autocomplete'

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
  const [places, setPlaces] = useState<Place[]>(() => {
    if (typeof window === 'undefined') {
      return []
    }

    const serialized = window.localStorage.getItem(PLACES_STORAGE_KEY)
    if (!serialized) {
      return []
    }

    const parsed = JSON.parse(serialized)
    if (typeof parsed !== 'object' && typeof parsed.map !== 'function') {
      return []
    }

    return parsed as Place[]
  })

  const addPlace = useCallback(async (suggestion: Suggestion) => {
    const geocoding = await getGeocode({ placeId: suggestion.place_id })
    const latLon = await getLatLng(geocoding[0])

    const addressComponents = geocoding[0].address_components
    const city = addressComponents.find((component) =>
      component.types.includes('locality')
    )
    const state = addressComponents.find((component) =>
      component.types.includes('administrative_area_level_1')
    )

    const place: Place = {
      id: suggestion.place_id,
      lat: latLon.lat,
      lon: latLon.lng,
      name: `${city!.long_name}, ${state!.short_name}`,
    }

    setPlaces((places) => {
      const nextPlaces = [...places, place]

      window.localStorage.setItem(
        PLACES_STORAGE_KEY,
        JSON.stringify(nextPlaces)
      )
      return nextPlaces
    })
  }, [])

  const removePlace = useCallback(
    (index: number) =>
      setPlaces((places) => {
        const nextPlaces = removeAtIndex(places, index)

        window.localStorage.setItem(
          PLACES_STORAGE_KEY,
          JSON.stringify(nextPlaces)
        )
        return nextPlaces
      }),
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
            {places.map((place, index) => (
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

export default Home
