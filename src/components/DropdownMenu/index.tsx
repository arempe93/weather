import { GenericActionOrList } from '@/types/actions'
import * as Primitve from '@radix-ui/react-dropdown-menu'
import { Slot } from '@radix-ui/react-slot'
import { Fragment, PropsWithChildren } from 'react'

import ActionItem from './ActionItem'

import styles from './styles.module.css'

export type ContentProps = Pick<
  Primitve.DropdownMenuContentOwnProps,
  | 'align'
  | 'alignOffset'
  | 'avoidCollisions'
  | 'collisionTolerance'
  | 'side'
  | 'sideOffset'
>

export type Props = ContentProps & {
  actionGroups: GenericActionOrList[][]
}

const DropdownMenu = ({
  actionGroups,
  children,
  ...contentProps
}: PropsWithChildren<Props>) => {
  return (
    <Primitve.Root>
      <Primitve.Trigger as={Slot}>{children}</Primitve.Trigger>
      <Primitve.Content className={styles.content} {...contentProps}>
        {actionGroups.map((group, groupIndex) => (
          <Fragment key={`group-${groupIndex}`}>
            <Primitve.Group>
              {group.map((action, actionIndex) => (
                <ActionItem key={`item-${actionIndex}`} action={action} />
              ))}
            </Primitve.Group>
            {groupIndex !== actionGroups.length - 1 && (
              <Primitve.Separator className={styles.separator} />
            )}
          </Fragment>
        ))}
      </Primitve.Content>
    </Primitve.Root>
  )
}

export default DropdownMenu
