import { Story, Meta } from '@storybook/react'

import AlertComponent, { Props } from '@/components/Alert'

// import docs from './docs.mdx'

export const Alert: Story<Props> = (props) => <AlertComponent {...props} />

export default {
  title: 'Components/Alert',
  component: AlertComponent,
  argTypes: {
    message: {
      control: { type: 'text' },
      defaultValue: 'Something needs the users attention!',
    },
    status: {
      control: {
        type: 'select',
        options: ['neutral', 'danger', 'warning'],
      },
      defaultValue: 'neutral',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
