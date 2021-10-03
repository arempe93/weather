import * as Primitive from '@radix-ui/react-popover'
import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import PopoverComponent from '@/components/Popover'

// import docs from './docs.mdx'

type Args = {
  align: Primitive.PopoverContentProps['align']
}

export const Popover: Story<Args> = (props) => (
  <PopoverComponent>
    <PopoverComponent.Trigger>
      <Button a11yLabel="Open popover" label="Open" />
    </PopoverComponent.Trigger>
    <PopoverComponent.Content align={props.align}>
      Menu content!
    </PopoverComponent.Content>
  </PopoverComponent>
)

export default {
  title: 'Components/Popover',
  component: PopoverComponent,
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end'],
      defaulValue: 'center',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
