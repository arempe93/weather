import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import NextLink from 'next/link'

import { GenericActionOrList } from '@/types/actions'

import Button from '@/components/Button'
import DropdownMenu, { ContentProps } from '@/components/DropdownMenu'
import LinkButton from '@/components/LinkButton'

import { Variants } from '@/atoms/Button'

import { isActionList, isCallbackAction, isLinkAction } from '@/util/action'
import { pauseEvent } from '@/util/events'

export type Props = Variants & {
  action: GenericActionOrList
  listOptions?: ContentProps
}

const Action = ({ action, status, listOptions, ...rest }: Props) => {
  const commonProps = {
    ...rest,
    a11yLabel: action.a11yLabel,
    iconLeft: action.icon,
    id: action.id,
    label: action.label,
    status: action.dangerous ? 'danger' : status,
  }

  if (isCallbackAction(action)) {
    return (
      <Button
        {...commonProps}
        disabled={action.disabled}
        iconLeft={action.icon}
        isLoading={action.isLoading}
        label={action.label}
        loadingIcon={action.loadingIcon}
        loadingLabel={action.loadingLabel}
        onClick={pauseEvent(action.onAction)}
      />
    )
  } else if (isLinkAction(action)) {
    if (action.external) {
      return (
        <LinkButton
          {...commonProps}
          href={typeof action.href === 'string' ? action.href : undefined}
          iconLeft={action.icon}
          iconRight={faExternalLinkAlt}
          target="_blank"
          rel="noopener noreferrer"
        />
      )
    } else {
      return (
        <NextLink passHref href={action.href} replace={action.replace}>
          <LinkButton {...commonProps} iconLeft={action.icon} />
        </NextLink>
      )
    }
  } else if (isActionList(action)) {
    return (
      <DropdownMenu {...listOptions} actionGroups={action.actionGroups}>
        <Button
          {...commonProps}
          disabled={action.disabled}
          iconLeft={action.icon}
        />
      </DropdownMenu>
    )
  } else {
    console.log('unknown action type', action)
    return null
  }
}

export default Action
