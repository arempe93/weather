import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import TooltipComponent, { Props } from '@/components/Tooltip'

// import docs from './docs.mdx'

export const Tooltip: Story<Props> = (props) => (
  <TooltipComponent {...props}>
    <Button
      a11yLabel="Click this button"
      label="Click me"
      onClick={action('Clicked')}
    />
  </TooltipComponent>
)

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['center', 'end', 'start'],
      defaultValue: 'center',
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Tooltip label',
    },
    side: {
      control: { type: 'select' },
      options: ['bottom', 'left', 'right', 'top'],
      defaultValue: 'bottom',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
