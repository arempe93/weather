import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import Link from 'next/link'

import { LinkAction } from '@/types/actions'
import { StyleProps } from '@/types/styles'
import { PickRequired } from '@/types/util'

import styles from './styles.module.css'

export type NavigationItem = PickRequired<LinkAction, 'icon' | 'label'> & {
  isActive?: boolean
}
export type NavigationGroup = { items: NavigationItem[]; title?: string }

export type Props = StyleProps & {
  dark?: boolean
  groups: NavigationGroup[]
}

const NavigationMenu = ({ dark = false, groups }: Props) => {
  return (
    <nav className={cx(styles.main, { [styles.dark]: dark })}>
      {groups.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className={styles.group}>
          {group.title && <div className={styles.title}>{group.title}</div>}
          {group.items.map((item, itemIndex) => (
            <Link key={`item-${groupIndex}-${itemIndex}`} href={item.href}>
              <a
                className={cx(styles.item, { [styles.active]: item.isActive })}
              >
                <span className={styles.icon}>
                  <FontAwesomeIcon fixedWidth icon={item.icon} />
                </span>
                <span>{item.label}</span>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

export default NavigationMenu
