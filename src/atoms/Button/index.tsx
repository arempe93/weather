import type * as Polymorphic from '@radix-ui/react-polymorphic'
import cx from 'classnames'
import { forwardRef } from 'react'

import styles from './styles.module.css'

export type Variants = {
  appearance?: 'primary' | 'outline' | 'clear' | 'plain'
  hasPopup?: boolean
  iconic?: boolean
  size?: 'sm' | 'md' | 'lg'
  status?: 'theme' | 'success' | 'danger' | 'hi-contrast'
}

export type Props = Variants

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', Props>

const Button: PolymorphicButton = forwardRef(
  (
    {
      'aria-haspopup': ariaHasPopup = false,
      appearance = 'primary',
      as: Component = 'button',
      className,
      hasPopup = false,
      iconic = false,
      size = 'md',
      status = 'theme',
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      aria-haspopup={ariaHasPopup ?? hasPopup}
      className={cx(
        styles.button,
        className,
        styles[`appearance-${appearance}`],
        styles[`status-${status}`],
        styles[`size-${size}`],
        {
          [styles.hasPopup]: !!ariaHasPopup || hasPopup,
          [styles.iconic]: iconic,
        }
      )}
      {...props}
    />
  )
)

export { styles }

export default Button
