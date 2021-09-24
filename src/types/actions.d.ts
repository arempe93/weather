import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { LinkProps } from 'next/link'

export interface BaseAction {
  a11yLabel: string
  dangerous?: boolean
  icon?: IconDefinition
  id?: string
  label?: string
}

export interface CallbackAction extends BaseAction {
  disabled?: boolean
  isLoading?: boolean
  loadingAllyLabel?: string
  loadingIcon?: IconDefinition
  loadingLabel?: string
  onAction: () => void
}

export interface LinkAction extends BaseAction {
  external?: boolean
  href: LinkProps['href']
  replace?: boolean
}

export type GenericAction = CallbackAction | LinkAction

export interface ActionList<Action extends BaseAction = GenericAction>
  extends BaseAction {
  actionGroups: Action[][]
  disabled?: boolean
}

export type GenericActionOrList = GenericAction | ActionList
