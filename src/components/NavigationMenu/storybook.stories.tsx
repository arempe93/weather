import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import {
  faProjectDiagram,
  faTachometerAlt,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { Story, Meta } from '@storybook/react'

import NavigationMenuComponent, { Props } from '@/components/NavigationMenu'

// import docs from './docs.mdx'

export const NavigationMenu: Story<Props> = () => (
  <NavigationMenuComponent
    groups={[
      {
        items: [
          {
            a11yLabel: 'Go to dashboard',
            label: 'Dashboard',
            href: '/',
            icon: faTachometerAlt,
          },
        ],
      },
      {
        title: 'Content',
        items: [
          {
            a11yLabel: 'Go to notifications',
            label: 'Notifications',
            href: '/notifications',
            icon: faPaperPlane,
          },
          {
            a11yLabel: 'Go to channels',
            label: 'Channels',
            href: '/channels',
            icon: faProjectDiagram,
          },
          {
            a11yLabel: 'Go to profiles',
            label: 'Profiles',
            href: '/profiles',
            icon: faUserFriends,
          },
        ],
      },
    ]}
  />
)

export default {
  title: 'Components/Navigation Menu',
  component: NavigationMenuComponent,
  // argTypes: {},
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
