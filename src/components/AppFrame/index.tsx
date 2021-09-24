import cx from 'classnames'
import { FC } from 'react'

import NavbarArea, { Props as NavbarAreaProps } from './NavbarArea'
import SidebarArea from './SidebarArea'

import styles from './styles.module.css'

export type Props = {
  withSidebar?: boolean
}

export type AppFrameType = FC<Props> & {
  ContentArea: FC
  FooterArea: FC
  NavbarArea: FC<NavbarAreaProps>
  SidebarArea: FC
}

const AppFrame: FC<Props> = ({ children, withSidebar = false }) => {
  return (
    <article
      className={cx(styles.main, { [styles['with-sidebar']]: withSidebar })}
    >
      {children}
    </article>
  )
}

// @ts-ignore
AppFrame.NavbarArea = NavbarArea
// @ts-ignore
AppFrame.SidebarArea = SidebarArea

// @ts-ignore
AppFrame.ContentArea = ({ children }) => (
  <section style={{ gridArea: 'content' }}>{children}</section>
)

// @ts-ignore
AppFrame.FooterArea = ({ children }) => (
  <footer style={{ gridArea: 'footer' }}>{children}</footer>
)

export default AppFrame as AppFrameType
