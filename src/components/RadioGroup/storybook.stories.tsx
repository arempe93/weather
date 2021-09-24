import { Story, Meta } from '@storybook/react'

import RadioGroupComponent, { Props } from '@/components/RadioGroup'

// import docs from './docs.mdx'

export const RadioGroup: Story<Props> = (props) => (
  <RadioGroupComponent
    {...props}
    items={[
      { id: 'radioGroup-1', label: 'One', value: 'one' },
      { id: 'radioGroup-2', label: 'Two', value: 'two' },
    ]}
    name="radioGroup"
  />
)

export default {
  title: 'Components/Radio Group',
  component: RadioGroupComponent,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
