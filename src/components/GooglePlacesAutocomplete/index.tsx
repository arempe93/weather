import Script from 'next/script'
import usePlacesAutocomplete, { RequestOptions } from 'use-places-autocomplete'

import Autocomplete, {
  Props as AutocompleteProps,
} from '@/components/Autocomplete'

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export type Suggestion = google.maps.places.AutocompletePrediction
export type Props = Omit<
  AutocompleteProps<Suggestion>,
  | 'items'
  | 'itemToKey'
  | 'itemToString'
  | 'onInputValueChange'
  | 'onSelectedItemChange'
> & {
  requestOptions?: RequestOptions
  onSelect: (value: Suggestion | null) => void
}

const GooglePlacesAutocomplete = ({
  requestOptions,
  onSelect,
  ...props
}: Props) => {
  const {
    ready,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions,
  })

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      <Autocomplete
        {...props}
        disabled={props.disabled || !ready}
        items={data}
        itemToKey={(suggestion) =>
          suggestion.id ? suggestion.id : suggestion.place_id
        }
        itemToString={(suggestion) =>
          suggestion ? suggestion.description : ''
        }
        onInputValueChange={({ inputValue }) =>
          inputValue ? setValue(inputValue) : setValue('')
        }
        onSelectedItemChange={({ selectedItem }) =>
          onSelect(selectedItem ?? null)
        }
      />
    </>
  )
}

export default GooglePlacesAutocomplete
