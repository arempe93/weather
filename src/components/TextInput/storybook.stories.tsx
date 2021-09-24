import { Story, Meta } from '@storybook/react'

import TextInputComponent, { Props } from '@/components/TextInput'

// import docs from './docs.mdx'

export const TextInput: Story<Props> = (props) => (
  <div style={{ width: 'calc(100vw - 32px)', maxWidth: '24rem' }}>
    <TextInputComponent {...props} />
  </div>
)

export default {
  title: 'Components/Text Input',
  component: TextInputComponent,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Input placeholder',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
