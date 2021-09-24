import * as Primitive from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'

import Stack from '@/components/Stack'

import styles from './styles.module.css'

export type Props = {
  checked: boolean
  id: string
  label?: string
  required?: boolean
  onChange: (newChecked: boolean) => void
}

const Checkbox = forwardRef<HTMLButtonElement, Props>(
  ({ checked, id, label, required, onChange }, ref) => {
    return (
      <Stack gap={16}>
        <Primitive.Root
          ref={ref}
          checked={checked}
          className={styles.root}
          id={id}
          required={required}
          onCheckedChange={onChange}
        >
          <Primitive.Indicator className={styles.indicator}>
            ✓
          </Primitive.Indicator>
        </Primitive.Root>
        {label && label !== '' && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
      </Stack>
    )
  }
)

export default Checkbox
