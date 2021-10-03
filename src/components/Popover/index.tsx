import * as Primitive from '@radix-ui/react-popover'
import cx from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Popover = (props: PropsWithChildren<Primitive.PopoverProps>) => {
  return <Primitive.Root {...props} />
}

const Content = ({
  className,
  sideOffset = 4,
  ...props
}: Primitive.PopoverContentProps) => {
  return (
    <Primitive.Content
      {...props}
      className={cx(className, styles.content)}
      sideOffset={sideOffset}
    />
  )
}

Popover.Content = Content
Content.displayName = 'Popover.Content'

Popover.Trigger = Primitive.Trigger
Popover.Trigger.displayName = 'Popover.Trigger'

export default Popover
