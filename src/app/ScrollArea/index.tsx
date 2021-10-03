import cx from 'classnames'
import { PropsWithChildren } from 'react'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

const ScrollArea = ({ className, ...rest }: PropsWithChildren<StyleProps>) => {
  return <div {...rest} className={cx(className, styles.main)} />
}

export default ScrollArea
