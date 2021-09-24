import cx from 'classnames'
import { StyleProps } from '@/types/styles'
import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

export type Props = StyleProps & {
  layout?: 'single' | 'double' | 'double-left' | 'double-right' | 'triple'
}

const Columns = ({
  className,
  layout = 'double',
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cx(className, styles.main, styles[`layout-${layout}`])}
      {...props}
    />
  )
}

export default Columns
