import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import { PropsWithChildren } from 'react'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

export type Props = StyleProps & {
  error?: string
  id?: string
  label?: string
}

const FormElement = ({
  children,
  className,
  error,
  id,
  label,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <fieldset className={cx(className, styles.main)} {...props}>
      {label && label !== '' && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className={styles.error} role="alert">
          <FontAwesomeIcon className="text-xs" icon={faExclamationCircle} />
          <small className="text-current leading-none">{error}</small>
        </span>
      )}
    </fieldset>
  )
}

export default FormElement
