import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import ToggleGroupComponent, { Props } from '@/components/ToggleGroup'

// import docs from './docs.mdx'

type Option = 'one' | 'two' | 'three'

export const ToggleGroup: Story<Props<Option>> = (props) => {
  const [value, setValue] = useState<Option>('one')

  return (
    <ToggleGroupComponent<Option>
      {...props}
      value={value}
      items={[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        // { value: 'three', label: 'Three' },
      ]}
      onChange={setValue}
    />
  )
}

export default {
  title: 'Components/Toggle Group',
  component: ToggleGroupComponent,
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(100vw - 32px)', maxWidth: '24rem' }}>
        {Story()}
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'white',
    },
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
