import cx from 'classnames'

import Shimmer, { Props as ShimmerProps } from '@/atoms/Shimmer'

import { nTimes } from '@/util/array'

import styles from './styles.module.css'

const Action = ({ className, ...props }: ShimmerProps) => (
  <Shimmer {...props} className={cx(className, styles.action)} />
)

export type TextProps = ShimmerProps & {
  kind?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small'
}

const Text = ({ className, kind = 'p', ...props }: TextProps) => (
  <Shimmer
    {...props}
    className={cx(className, styles.text, styles[`kind-${kind}`])}
  />
)

export type LinesProps = ShimmerProps & {
  count: number
}

const Lines = ({ className, count, ...props }: LinesProps) => (
  <div className="flex flex-col">
    {nTimes(count, (n) => (
      <Shimmer
        {...props}
        className={cx(className, styles.line, {
          [styles.trailing]: n === count - 1,
        })}
      />
    ))}
  </div>
)

export default {
  Action,
  Lines,
  Text,
}
