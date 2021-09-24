import cx from 'classnames'
import { forwardRef, HTMLProps } from 'react'

import styles from './styles.module.css'

export type Props = Omit<HTMLProps<HTMLInputElement>, 'type'> & {
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cx(className, styles.main)}
        type={type}
      />
    )
  }
)

export default TextInput
