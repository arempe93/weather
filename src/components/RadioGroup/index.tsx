import * as Primitive from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'

import Stack from '@/components/Stack'

import styles from './styles.module.css'

export type RadioItem = {
  disabled?: boolean
  id: string
  label: string
  required?: boolean
  value: string
}

export type Props = {
  items: RadioItem[]
  name: string
  orientation?: 'horizontal' | 'vertical'
  value: string
  onChange: (newValue: string) => void
}

const RadioGroup = forwardRef<HTMLDivElement, Props>(
  ({ items, name, orientation = 'vertical', value, onChange }, ref) => {
    return (
      <Primitive.Root
        ref={ref}
        className={styles.root}
        name={name}
        orientation={orientation}
        value={value}
        onValueChange={onChange}
      >
        {items.map(({ label, ...item }) => (
          <Stack key={item.id} inline gap={16}>
            <Primitive.Item {...item} className={styles.item}>
              <Primitive.Indicator className={styles.indicator} />
            </Primitive.Item>
            <label className={styles.label} htmlFor={item.id}>
              {label}
            </label>
          </Stack>
        ))}
      </Primitive.Root>
    )
  }
)

export default RadioGroup
