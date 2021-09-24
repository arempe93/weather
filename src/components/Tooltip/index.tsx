import * as Primitive from '@radix-ui/react-tooltip'
import { Slot } from '@radix-ui/react-slot'
import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

type ContentProps = Omit<
  Primitive.TooltipContentOwnProps,
  'aria-label' | 'as' | 'portalled'
>

export type Props = ContentProps & {
  a11yLabel?: string
  label: string
}

const Tooltip = ({
  a11yLabel,
  children,
  label,
  ...contentProps
}: PropsWithChildren<Props>) => {
  return (
    <Primitive.Root delayDuration={400}>
      <Primitive.Trigger as={Slot}>{children}</Primitive.Trigger>
      <Primitive.Content
        {...contentProps}
        aria-label={a11yLabel}
        className={styles.content}
      >
        {label}
        <Primitive.Arrow />
      </Primitive.Content>
    </Primitive.Root>
  )
}

Tooltip.Trigger = Primitive.Trigger

export default Tooltip
