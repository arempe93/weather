import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import TagListComponent, { Props } from '@/components/TagList'

// import docs from './docs.mdx'

type StoryProps = Omit<Props, 'onRemove'> & { removeable?: boolean }

export const TagList: Story<StoryProps> = (props) => (
  <TagListComponent
    {...props}
    tags={['New customer', 'Priority', 'Testing data']}
    onRemove={props.removeable ? action('onRemove') : undefined}
  />
)

export default {
  title: 'Components/Tag List',
  component: TagListComponent,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
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
