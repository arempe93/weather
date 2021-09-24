import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

export type Props = StyleProps & {
  icon?: IconDefinition
  message: string
  status?: 'neutral' | 'danger' | 'warning'
}

const Alert = ({
  icon = faExclamationTriangle,
  message,
  status = 'neutral',
}: Props) => {
  return (
    <div className={cx(styles.main, styles[`status-${status}`])} role="alert">
      <div className={styles.icon} aria-hidden>
        <FontAwesomeIcon fixedWidth icon={icon} />
      </div>
      <p className="text-current">{message}</p>
    </div>
  )
}

export default Alert
