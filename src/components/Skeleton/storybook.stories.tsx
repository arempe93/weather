import { Story, Meta } from '@storybook/react'

import SkeletonComponent, { LinesProps, TextProps } from '@/components/Skeleton'

// import docs from './docs.mdx'

export const Action: Story = () => <SkeletonComponent.Action />

export const Text: Story<TextProps> = (props) => (
  <div style={{ width: 500 }}>
    <SkeletonComponent.Text {...props} />
  </div>
)
Text.argTypes = {
  kind: {
    control: {
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'small'],
    },
    defaultValue: 'p',
  },
}

export const Lines: Story<LinesProps> = (props) => (
  <div style={{ width: 500 }}>
    <SkeletonComponent.Lines {...props} />
  </div>
)
Lines.argTypes = {
  count: {
    control: {
      type: 'range',
      min: 1,
      max: 8,
      step: 1,
    },
    defaultValue: 3,
  },
}

export default {
  title: 'Components/Skeleton',
  argTypes: {},
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
