import { Story, Meta } from '@storybook/react'
import { ComponentPropsWithoutRef } from 'react'

import StackComponent from '@/components/Stack'

// import docs from './docs.mdx'

const Item = (props: ComponentPropsWithoutRef<'div'>) => (
  <div
    {...props}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      border: '1px solid red',
      borderRadius: 4,
    }}
  >
    Item
  </div>
)

export const Stack: Story = (props) => (
  <StackComponent {...props}>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </StackComponent>
)

export default {
  title: 'Components/Stack',
  component: StackComponent,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['baseline', 'center', 'end', 'start'],
      },
    },
    gap: {
      control: {
        type: 'range',
        min: 8,
        max: 64,
        step: 8,
      },
      defaultValue: 8,
    },
    inline: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    justify: {
      control: {
        type: 'select',
        options: ['apart', 'center', 'end', 'start'],
      },
    },
    vertical: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    wrap: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
    layout: 'padded',
  },
} as Meta
