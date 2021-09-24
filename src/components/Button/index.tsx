import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentPropsWithoutRef, forwardRef, MouseEventHandler } from 'react'

import ButtonAtom, { Props as ButtonAtomProps } from '@/atoms/Button'

export type BaseProps = ButtonAtomProps & {
  a11yLabel: string
  children?: never
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  label?: string
}

export type Props = ComponentPropsWithoutRef<'button'> &
  BaseProps & {
    disabled?: boolean
    isLoading?: boolean
    loadingA11yLabel?: string
    loadingIcon?: IconDefinition
    loadingLabel?: string
    submit?: boolean
  }

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      a11yLabel,
      iconLeft,
      iconRight,
      isLoading,
      label,
      loadingA11yLabel,
      loadingIcon = faCircleNotch,
      loadingLabel,
      submit = false,
      ...props
    },
    ref
  ) => {
    return (
      <ButtonAtom
        ref={ref}
        {...props}
        aria-label={isLoading ? loadingA11yLabel ?? a11yLabel : a11yLabel}
        disabled={isLoading || props.disabled}
        iconic={isLoading ? !(label ?? loadingLabel) : !label && !!iconLeft}
        type={submit ? 'submit' : 'button'}
      >
        {(isLoading || iconLeft) && (
          <FontAwesomeIcon
            fixedWidth
            spin={isLoading}
            icon={isLoading ? loadingIcon : iconLeft!}
          />
        )}
        {isLoading ? loadingLabel ?? label : label}
        {iconRight && <FontAwesomeIcon fixedWidth icon={iconRight} />}
        {(props.hasPopup || props['aria-haspopup']) && (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </ButtonAtom>
    )
  }
)

export default Button
