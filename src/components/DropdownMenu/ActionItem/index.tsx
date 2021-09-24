import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Primitve from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import NextLink from 'next/link'

import { GenericActionOrList } from '@/types/actions'

import { isActionList, isCallbackAction, isLinkAction } from '@/util/action'

import styles from './styles.module.css'

export type Props = {
  action: GenericActionOrList
}

const ActionItem = ({ action }: Props) => {
  const commonProps = {
    'aria-label': action.a11yLabel,
    className: cx(styles.main, { [styles.dangerous]: action.dangerous }),
    textValue: action.label,
  }

  if (isCallbackAction(action)) {
    return (
      <Primitve.Item
        as="button"
        {...commonProps}
        disabled={action.disabled}
        onSelect={action.onAction}
      >
        {action.label ?? action.a11yLabel}
        {action.icon && (
          <span className={styles.right}>
            <FontAwesomeIcon fixedWidth icon={action.icon} />
          </span>
        )}
      </Primitve.Item>
    )
  } else if (isLinkAction(action)) {
    if (action.external) {
      return (
        <Primitve.Item
          as="a"
          {...commonProps}
          href={typeof action.href === 'string' ? action.href : undefined}
          target="_blank"
          rel="noopenner norefferer"
        >
          {action.label ?? action.a11yLabel}
          <span className={styles.right}>
            <FontAwesomeIcon fixedWidth icon={faExternalLinkAlt} />
          </span>
        </Primitve.Item>
      )
    } else {
      return (
        <NextLink passHref href={action.href}>
          <Primitve.Item
            as="a"
            {...commonProps}
            onSelect={(ev) => ev.preventDefault()}
          >
            {action.label ?? action.a11yLabel}
          </Primitve.Item>
        </NextLink>
      )
    }
  } else {
    return null
  }
}

export default ActionItem
