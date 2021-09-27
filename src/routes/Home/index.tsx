import {
  faLocationArrow,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import { useCallback, useMemo, useState } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

import GooglePlacesAutocomplete, {
  Suggestion,
} from '@/components/GooglePlacesAutocomplete'
import SingleColumnLayout from '@/components/SingleColumnLayout'
import Stack from '@/components/Stack'

import PlacePill from './PlacePill'
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
        <div className="py-8 laptop:py-12">
          <Stack vertical gap={64}>
            <Stack vertical gap={24}>
              <GooglePlacesAutocomplete
                autoFocus
                id="place-select"
                placeholder="Find your weather..."
                selectedItem={null}
                onSelect={(suggestion) => suggestion && addPlace(suggestion)}
              />
              <div className="overflow-x-auto max-w-full p-1 m-[-4px]">
                <div className="flex gap-2 laptop:flex-wrap">
                  <PlacePill
                    icon={faLocationArrow}
                    name="My location"
                    onSelect={() => setSelectedPlaceId(null)}
                  />
                  {places.map((place, index) => (
                    <PlacePill
                      key={place.id}
                      icon={faMapMarkerAlt}
                      name={place.name}
                      onRemove={() => removePlace(index)}
                      onSelect={() => setSelectedPlaceId(place.id)}
                    />
                  ))}
                </div>
              </div>
            </Stack>
            <Weather place={selectedPlace} />
          </Stack>
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default Home
