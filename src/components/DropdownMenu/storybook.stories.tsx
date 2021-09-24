import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import DropdownMenuComponent, { Props } from '@/components/DropdownMenu'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

// import docs from './docs.mdx'

export const DropdownMenu: Story<Props> = (props) => (
  <DropdownMenuComponent
    {...props}
    actionGroups={[
      [
        { a11yLabel: 'First item', label: 'Item 1', onAction: action('first') },
        {
          a11yLabel: 'Second item',
          label: 'Item 2',
          href: '/',
        },
      ],
      [
        {
          a11yLabel: 'Third item',
          label: 'Item 3',
          href: 'https://google.com',
          external: true,
        },
      ],
    ]}
  >
    <Button
      a11yLabel="Click this button"
      label="Click me"
      onClick={action('Clicked')}
    />
  </DropdownMenuComponent>
)

export default {
  title: 'Components/Dropdown Menu',
  component: DropdownMenuComponent,
  argTypes: {
    // align: {
    //   control: { type: 'select' },
    //   options: ['center', 'end', 'start'],
    //   defaultValue: 'center',
    // },
    // label: {
    //   control: { type: 'text' },
    //   defaultValue: 'Tooltip label',
    // },
    // side: {
    //   control: { type: 'select' },
    //   options: ['bottom', 'left', 'right', 'top'],
    //   defaultValue: 'bottom',
    // },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
