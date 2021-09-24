import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import Card from '@/components/Card'
import PageComponent, { Props } from '@/components/Page'

// import docs from './docs.mdx'

export const Page: Story<Props> = (props) => (
  <PageComponent
    {...props}
    primaryAction={{
      a11yLabel: 'Use the primary action',
      label: 'Primary action',
      onAction: action('Primary action'),
    }}
    secondaryActions={[
      {
        a11yLabel: 'Open more actions menu',
        label: 'More actions',
        actionGroups: [
          [
            {
              a11yLabel: 'Use the secondary action',
              label: 'Secondary action',
              onAction: action('Secondary action'),
            },
            {
              a11yLabel: 'Use the tertiary action',
              label: 'Tertiary action',
              onAction: action('Tertiary action'),
            },
          ],
        ],
      },
    ]}
  >
    <Card sectioned title="Column content">
      <p>The current column size is: {props.size}</p>
    </Card>
  </PageComponent>
)

export default {
  title: 'Components/Page',
  component: PageComponent,
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      defaultValue: 'md',
    },
    subtitle: {
      control: { type: 'text' },
      defaultValue: undefined,
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Page title',
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
