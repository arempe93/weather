import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import ButtonAtom, { Props as ButtonAtomProps } from '@/atoms/Button'

export type BaseProps = Omit<ButtonAtomProps, 'hasPopup'> & {
  a11yLabel: string
  children?: never
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
  label?: string
}

export type Props = ComponentPropsWithoutRef<'a'> & BaseProps

const LinkButton = forwardRef<HTMLAnchorElement, Props>(
  ({ a11yLabel, href, iconLeft, iconRight, label, ...props }, ref) => {
    return (
      <ButtonAtom
        ref={ref}
        as="a"
        {...props}
        aria-label={a11yLabel}
        href={href}
        iconic={!label && !!iconLeft}
      >
        {iconLeft && <FontAwesomeIcon fixedWidth icon={iconLeft} />}
        {label}
        {iconRight && <FontAwesomeIcon fixedWidth icon={iconRight} />}
      </ButtonAtom>
    )
  }
)

export default LinkButton
