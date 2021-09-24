import type * as Polymorphic from '@radix-ui/react-polymorphic'
import cx from 'classnames'
import { ComponentProps, forwardRef } from 'react'

import styles from './styles.module.css'

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div'>

const Shimmer: PolymorphicBox = forwardRef(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        {...props}
        className={cx(className, styles.shimmer)}
      />
    )
  }
)

export type Props = ComponentProps<typeof Shimmer>

export default Shimmer
