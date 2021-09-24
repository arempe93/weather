import { Story, Meta } from '@storybook/react'
import { useModal } from 'react-modal-hook'

import Button from '@/components/Button'
import Card from '@/components/Card'
import ModalComponent, { Props } from '@/components/Modal'

// import docs from './docs.mdx'

export const Modal: Story<Props> = (props) => {
  const [showModal, closeModal] = useModal(() => (
    <ModalComponent {...props} isOpen onRequestClose={closeModal}>
      <Card.Section>Content of the modal.</Card.Section>
    </ModalComponent>
  ))

  return <Button a11yLabel="Open modal" label="Open" onClick={showModal} />
}

export default {
  title: 'Components/Modal',
  component: ModalComponent,
  argTypes: {
    disableClickout: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      defaultValue: 'md',
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'Modal title',
    },
  },
  parameters: {
    //   docs: {
    //     page: docs,
    //   },
  },
} as Meta
