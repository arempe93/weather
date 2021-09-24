import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import TagComponent, { Props } from '@/components/Tag'

// import docs from './docs.mdx'

type StoryProps = Omit<Props, 'onRemove'> & { removeable?: boolean }

export const Tag: Story<StoryProps> = (props) => (
  <TagComponent
    {...props}
    onRemove={props.removeable ? action('onRemove') : undefined}
  />
)

export default {
  title: 'Components/Tag',
  component: TagComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Tag label',
    },
    removeable: {
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
