import { getGeocode, getLatLng } from 'use-places-autocomplete'

import { Suggestion } from '@/components/GooglePlacesAutocomplete'

export const PLACES_STORAGE_KEY = '$places'

export type Place = {
  id: string
  lat: number
  lon: number
  name: string
}

export const suggestionToPlace = async (
  suggestion: Suggestion
): Promise<Place> => {
  const geocoding = await getGeocode({ placeId: suggestion.place_id })
  const latLon = await getLatLng(geocoding[0])

  const addressComponents = geocoding[0].address_components
  const country = addressComponents.find((component) =>
    component.types.includes('country')
  )
  const city = addressComponents.find((component) =>
    component.types.includes('locality')
  )
  const state = addressComponents.find((component) =>
    component.types.includes('administrative_area_level_1')
  )

  const name =
    country!.short_name === 'US'
      ? `${city!.long_name}, ${state!.short_name}`
      : `${city!.long_name}, ${country!.long_name}`

  return {
    id: suggestion.place_id,
    lat: latLon.lat,
    lon: latLon.lng,
    name,
  }
}
