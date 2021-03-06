import { Story, Meta } from '@storybook/react'

import SingleColumnLayoutComponent, {
  Props,
} from '@/components/SingleColumnLayout'

// import docs from './docs.mdx'

export const SingleColumnLayout: Story<Props> = (props) => (
  <SingleColumnLayoutComponent {...props}>
    <div style={{ padding: '2rem 0' }}>
      <p>The current column size is: {props.size}</p>
    </div>
  </SingleColumnLayoutComponent>
)

export default {
  title: 'Components/Single Column Layout',
  component: SingleColumnLayoutComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      defaultValue: 'md',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'none',
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
