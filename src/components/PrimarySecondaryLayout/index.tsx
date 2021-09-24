import cx from 'classnames'
import { HTMLProps, PropsWithChildren } from 'react'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

export type Variants = {
  flipped?: boolean
}

export type Props = StyleProps & Variants

const PrimarySecondaryLayout = ({
  className,
  flipped,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <div
      {...rest}
      className={cx(className, styles.main, { [styles.flipped]: flipped })}
    />
  )
}

PrimarySecondaryLayout.Primary = ({
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) => (
  <div {...rest} className={cx(className, styles.primary)} />
)

PrimarySecondaryLayout.Secondary = ({
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) => (
  <div {...rest} className={cx(className, styles.secondary)} />
)

export default PrimarySecondaryLayout
