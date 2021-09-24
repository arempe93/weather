import { Story, Meta } from '@storybook/react'

import CheckboxComponent, { Props } from '@/components/Checkbox'

// import docs from './docs.mdx'

export const Checkbox: Story<Props> = (props) => (
  <CheckboxComponent {...props} id="checkbox" />
)

export default {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Checkbox label',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
