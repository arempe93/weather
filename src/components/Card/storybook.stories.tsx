import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { PropsWithChildren } from 'react'

import CardComponent, { Props } from '@/components/Card'
import Stack from '@/components/Stack'

// import docs from './docs.mdx'

const Template: Story<PropsWithChildren<Props>> = (props) => (
  <CardComponent {...props} />
)

export const Simple = Template.bind({})
Simple.args = {
  title: 'Online dashboard',
  sectioned: true,
  children: <p>View a summary of your app’s performance.</p>,
}

export const FooterActions = Template.bind({})
FooterActions.args = {
  title: 'Setup 2-factor auth for your account',
  sectioned: true,
  secondaryFooterActions: [
    {
      a11yLabel: 'Maybe later',
      label: 'Maybe later',
      onAction: action('Maybe later'),
    },
  ],
  primaryFooterAction: {
    a11yLabel: 'Enable 2-factor auth',
    label: 'Enable now',
    onAction: action('Enable now'),
  },
  children: (
    <p>
      Two-factor authentication adds an extra layer of security when logging in
      to your account. A special code will be required each time you log in,
      ensuring only you can access your account.
    </p>
  ),
}

export const HeaderActions = Template.bind({})
HeaderActions.args = {
  title: 'Product variants',
  sectioned: true,
  actions: [
    {
      a11yLabel: 'Add product variant',
      label: 'Add variant',
      onAction: action('Add variant'),
    },
  ],
  children: (
    <p>
      Add variants if this product comes in multiple versions, like different
      sizes or colors.
    </p>
  ),
}

export const SectionActions: Story<PropsWithChildren<Props>> = () => (
  <CardComponent
    actions={[
      {
        a11yLabel: 'Edit customer',
        label: 'Edit',
        onAction: action('Edit'),
      },
      {
        a11yLabel: 'Remove customer',
        dangerous: true,
        label: 'Remove',
        onAction: action('Remove'),
      },
    ]}
    title="Customer"
  >
    <CardComponent.Section>
      <Stack vertical gap={2}>
        <p>Andrew Rempe</p>
        <small>arempe@area2k.com</small>
      </Stack>
    </CardComponent.Section>
    <CardComponent.Section
      actions={[
        {
          a11yLabel: 'Change primary address',
          label: 'Change',
          onAction: action('Change address'),
        },
      ]}
      title="Primary address"
    >
      <Stack vertical gap={2}>
        <p>1234 Main Street</p>
        <p className="text-light">APT 413</p>
        <small>Dallas, TX 75531</small>
      </Stack>
    </CardComponent.Section>
  </CardComponent>
)

export default {
  title: 'Components/Card',
  component: CardComponent,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-12">
        <div className="flex-initial w-full max-w-[768px]">{Story()}</div>
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'none',
    //   docs: {
    //     page: docs,
    //   },
    // layout: 'padded',
  },
} as Meta
