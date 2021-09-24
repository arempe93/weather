import { forwardRef, ForwardRefExoticComponent, PropsWithChildren } from 'react'

import Footer, { Props as FooterProps } from './Footer'
import Header, { Props as HeaderProps } from './Header'
import Section from './Section'

import styles from './styles.module.css'

export type Props = PropsWithChildren<{
  actions?: HeaderProps['actions']
  id?: string
  primaryFooterAction?: FooterProps['primaryAction']
  secondaryFooterActions?: FooterProps['secondaryActions']
  sectioned?: boolean
  title?: HeaderProps['title']
}>

type CardType = ForwardRefExoticComponent<Props> & {
  Footer: typeof Footer
  Header: typeof Header
  Section: typeof Section
}

const Card = forwardRef<HTMLDivElement, Props>(
  (
    {
      actions,
      children,
      id,
      primaryFooterAction,
      secondaryFooterActions,
      sectioned,
      title,
    },
    ref
  ) => {
    const hasHeader = title || (actions && actions.length > 0)
    const hasFooter =
      primaryFooterAction ||
      (secondaryFooterActions && secondaryFooterActions.length > 0)

    return (
      <div ref={ref} className={styles.main} id={id}>
        {hasHeader && <Header actions={actions} title={title} />}
        {sectioned ? <Section>{children}</Section> : children}
        {hasFooter && (
          <Footer
            primaryAction={primaryFooterAction}
            secondaryActions={secondaryFooterActions}
          />
        )}
      </div>
    )
  }
) as CardType

Card.Footer = Footer
Card.Header = Header
Card.Section = Section

export default Card
