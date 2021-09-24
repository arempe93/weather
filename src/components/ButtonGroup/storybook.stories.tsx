import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import ButtonGroupComponent from '@/components/ButtonGroup'
import Button from '../Button'

// import docs from './docs.mdx'

export const ButtonGroup: Story = (props) => (
  <ButtonGroupComponent>
    <Button
      a11yLabel="Click this button"
      appearance="outline"
      label="Click me"
      onClick={action('Click me')}
    />
    <Button
      a11yLabel="No, click this button"
      appearance="outline"
      label="No, click me"
      onClick={action('No, click me')}
    />
  </ButtonGroupComponent>
)

export default {
  title: 'Components/Button Group',
  component: ButtonGroupComponent,
  argTypes: {},
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
