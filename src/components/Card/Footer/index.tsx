import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { GenericActionOrList } from '@/types/actions'

import Action from '@/components/Action'
import Stack from '@/components/Stack'

export type Props = PropsWithChildren<{
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  primaryAction?: GenericActionOrList
  secondaryActions?: GenericActionOrList[]
}>

const Footer = ({
  children,
  justify,
  primaryAction,
  secondaryActions,
}: Props) => {
  return (
    <Stack justify={justify} style={{ padding: '0 20px 20px' }}>
      {children}
      {secondaryActions && (
        <Stack justify="end">
          {secondaryActions.map((action, idx) => (
            <Action key={idx} action={action} appearance="outline" />
          ))}
        </Stack>
      )}
      {primaryAction && <Action action={primaryAction} appearance="primary" />}
    </Stack>
  )
}

export default Footer
