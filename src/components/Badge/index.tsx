import cx from 'classnames'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

export type Props = StyleProps & {
  label: string
  status?: 'neutral' | 'theme' | 'danger' | 'success' | 'warning'
}

const Badge = ({ className, status = 'neutral', label, ...rest }: Props) => {
  return (
    <span
      {...rest}
      className={cx(className, styles.main, styles[`status-${status}`])}
    >
      {label}
    </span>
  )
}

export default Badge
