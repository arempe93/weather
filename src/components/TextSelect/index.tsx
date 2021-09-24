import cx from 'classnames'
import { ChangeEvent, forwardRef, useCallback } from 'react'

import { StyleProps } from '@/types/styles'

import styles from './styles.module.css'

export type SelectOption = { disabled?: boolean; value: string; text: string }

export type Props = StyleProps & {
  disabled?: boolean
  options: SelectOption[]
  required?: boolean
  value: string
  onChange: (newValue: string) => void
}

const TextSelect = forwardRef<HTMLSelectElement, Props>(
  ({ className, options, value, onChange, ...rest }, ref) => {
    const handleValueChange = useCallback(
      (ev: ChangeEvent<HTMLSelectElement>) => onChange(ev.currentTarget.value),
      [onChange]
    )

    return (
      <div className={styles.main}>
        <select
          ref={ref}
          {...rest}
          className={cx(className, styles.select, {
            [styles.placeholder]: value === '',
          })}
          value={value}
          onChange={handleValueChange}
        >
          {options.map((option) => (
            <option
              key={option.value}
              disabled={option.disabled}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
    )
  }
)

export default TextSelect
