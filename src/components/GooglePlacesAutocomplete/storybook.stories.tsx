import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import GooglePlacesAutocompleteComponent, {
  Props,
  Suggestion,
} from '@/components/GooglePlacesAutocomplete'

// import docs from './docs.mdx'

export const GooglePlacesAutocomplete: Story<Props> = (props) => {
  const [
    selectedSuggestion,
    setSelectedSuggestion,
  ] = useState<Suggestion | null>(null)

  return (
    <GooglePlacesAutocompleteComponent
      {...props}
      id="google-places-autocomplete"
      selectedItem={selectedSuggestion}
      onSelect={setSelectedSuggestion}
    />
  )
}

export default {
  title: 'Components/Google Places Autocomplete',
  component: GooglePlacesAutocompleteComponent,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Search for places...',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(100vw - 32px)', maxWidth: '24rem' }}>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
