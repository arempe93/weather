import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import TextSelectComponent, { Props } from '@/components/TextSelect'

// import docs from './docs.mdx'

export const TextSelect: Story<Props> = (props) => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: 'calc(100vw - 32px)', maxWidth: '24rem' }}>
      <TextSelectComponent
        {...props}
        value={value}
        options={[
          { disabled: true, value: '', text: 'Select an option...' },
          { value: '1', text: 'First' },
          { value: '2', text: 'Second' },
          { value: '3', text: 'Third' },
          { value: '4', text: 'Fourth' },
        ]}
        onChange={setValue}
      />
    </div>
  )
}

export default {
  title: 'Components/Text Select',
  component: TextSelectComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
