import cx from 'classnames'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import styles from './styles.module.css'

export type Variants = {
  align?: 'baseline' | 'center' | 'end' | 'start'
  justify?: 'apart' | 'center' | 'end' | 'start'
  inline?: boolean
  vertical?: boolean
  wrap?: boolean
}

export type Props = ComponentPropsWithoutRef<'div'> &
  Variants &
  PropsWithChildren<{
    gap?: string | number
    horizontalGap?: string | number
    verticalGap?: string | number
  }>

const Stack = ({
  align,
  className,
  horizontalGap = 8,
  gap,
  inline = false,
  justify = 'start',
  style = {},
  vertical = false,
  verticalGap = 8,
  wrap = false,
  ...props
}: Props) => {
  const alignDefault = vertical ? 'start' : 'center'
  const gapStyles = {
    columnGap: gap ?? horizontalGap,
    rowGap: gap ?? verticalGap,
  }

  return (
    <div
      {...props}
      className={cx(
        className,
        styles.main,
        styles[`align-${align ?? alignDefault}`],
        styles[`justify-${justify}`],
        {
          [styles.inline]: inline,
          [styles.vertical]: vertical,
          [styles.wrap]: wrap,
        }
      )}
      style={{ ...style, ...gapStyles }}
    />
  )
}

export default Stack
