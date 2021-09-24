import { faTimes } from '@fortawesome/free-solid-svg-icons'
import * as Primitive from '@radix-ui/react-dialog'
import { PropsWithChildren } from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'

import styles from './styles.module.css'

const SIZE_MAP = {
  sm: '24rem',
  md: '32rem',
  lg: '40rem',
  xl: '48rem',
  full: 'initial',
} as const

export type Variants = {
  size?: keyof typeof SIZE_MAP
}

export type Props = Variants & {
  disableClickout?: boolean
  isOpen: boolean
  title: string
  onRequestClose: () => void
}

const Modal = ({
  children,
  disableClickout = false,
  isOpen,
  size = 'md',
  title,
  onRequestClose,
}: PropsWithChildren<Props>) => {
  return (
    <Primitive.Root open={isOpen}>
      <Primitive.Overlay className={styles.overlay} />
      <Primitive.Content
        aria-label={title}
        className={styles.content}
        style={{ maxWidth: SIZE_MAP[size] }}
        onEscapeKeyDown={onRequestClose}
        onPointerDownOutside={disableClickout ? undefined : onRequestClose}
      >
        <Card>
          <Card.Header title={title}>
            <div>
              <Primitive.Close
                as={Button}
                a11yLabel="Close dialog"
                appearance="clear"
                iconLeft={faTimes}
                size="sm"
                onClick={onRequestClose}
              />
            </div>
          </Card.Header>
          {children}
        </Card>
      </Primitive.Content>
    </Primitive.Root>
  )
}

export default Modal
