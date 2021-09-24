import { Story, Meta } from '@storybook/react'

import Card from '@/components/Card'
import PrimarySecondaryLayoutComponent, {
  Props,
} from '@/components/PrimarySecondaryLayout'

// import docs from './docs.mdx'

export const PrimarySecondaryLayout: Story<Props> = (props) => (
  <PrimarySecondaryLayoutComponent {...props}>
    <PrimarySecondaryLayoutComponent.Primary>
      <div style={{ padding: '2rem 0' }}>
        <Card sectioned title="Primary content">
          <p>Main page content goes here.</p>
        </Card>
      </div>
    </PrimarySecondaryLayoutComponent.Primary>
    <PrimarySecondaryLayoutComponent.Secondary>
      <div style={{ padding: '2rem 0' }}>
        <Card sectioned title="Secondary content">
          <p>Additional content goes here.</p>
        </Card>
      </div>
    </PrimarySecondaryLayoutComponent.Secondary>
  </PrimarySecondaryLayoutComponent>
)

export default {
  title: 'Components/Primary Secondary Layout',
  component: PrimarySecondaryLayoutComponent,
  argTypes: {
    flipped: {
      control: { type: 'boolean' },
      defaultValue: false,
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
