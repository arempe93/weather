import {
  ActionList,
  BaseAction,
  CallbackAction,
  GenericAction,
  GenericActionOrList,
  LinkAction,
} from '@/types/actions'

export const isCallbackAction = (
  action: GenericActionOrList
): action is CallbackAction => (action as CallbackAction).onAction !== undefined

export const isLinkAction = (
  action: GenericActionOrList
): action is LinkAction => (action as LinkAction).href !== undefined

export const isActionList = (
  action: GenericActionOrList
): action is ActionList => (action as ActionList).actionGroups !== undefined

export const flattenActionsToList = (
  actions: GenericActionOrList[],
  base: BaseAction
): ActionList => {
  const listActions: GenericAction[][] = []
  let looseActions: GenericAction[] = []

  for (const action of actions) {
    if (isActionList(action)) {
      if (looseActions.length > 0) {
        listActions.push(looseActions)
        looseActions = []
      }
      listActions.concat(action.actionGroups)
    } else {
      looseActions.push(action)
    }
  }

  if (looseActions.length > 0) listActions.push(looseActions)

  return { ...base, actionGroups: listActions }
}

export const noOp = () => undefined
