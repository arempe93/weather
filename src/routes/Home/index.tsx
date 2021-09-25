import Head from 'next/head'
import { useCallback, useMemo, useState } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

import GooglePlacesAutocomplete, {
  Suggestion,
} from '@/components/GooglePlacesAutocomplete'
import SingleColumnLayout from '@/components/SingleColumnLayout'

import Weather from './Weather'

import { removeAtIndex } from '@/util/array'

import { Place, suggestionToPlace, PLACES_STORAGE_KEY } from './util'

const Home = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null)
  const [storedPlaces, setPlaces] = useLocalStorage<Place[]>(
    PLACES_STORAGE_KEY,
    (serialized) => {
      const parsed = JSON.parse(serialized)
      if (!Array.isArray(parsed)) {
        return null
      }

      return parsed as Place[]
    }
  )

  const selectedPlace = useMemo(() => {
    if (selectedPlaceId === null || storedPlaces === null) {
      return null
    }

    return storedPlaces.find((place) => place.id === selectedPlaceId) ?? null
  }, [selectedPlaceId, storedPlaces])

  const addPlace = useCallback(async (suggestion: Suggestion) => {
    const place = await suggestionToPlace(suggestion)
    setPlaces((places) => (places ? [...places, place] : [place]))
    setSelectedPlaceId(place.id)
  }, [])

  const removePlace = useCallback(
    (index: number) =>
      setPlaces((places) => (places ? removeAtIndex(places, index) : [])),
    []
  )

  const places = storedPlaces ?? []

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
            <div>
              <span>My location</span>
              <button onClick={() => setSelectedPlaceId(null)}>Select</button>
            </div>
            {places.map((place, index) => (
              <div key={place.id}>
                <span>
                  {place.name} ({place.lat}, {place.lon})
                </span>
                <button onClick={() => setSelectedPlaceId(place.id)}>
                  Select
                </button>
                <button onClick={() => removePlace(index)}>Remove</button>
              </div>
            ))}
          </div>
          <div>
            <Weather place={selectedPlace} />
          </div>
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default Home
