import { Story, Meta } from '@storybook/react'

import BadgeComponent, { Props } from '@/components/Badge'

// import docs from './docs.mdx'

export const Badge: Story<Props> = (props) => <BadgeComponent {...props} />

export default {
  title: 'Components/Badge',
  component: BadgeComponent,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Status label',
    },
    status: {
      control: {
        type: 'select',
        options: ['neutral', 'theme', 'success', 'danger', 'warning'],
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
