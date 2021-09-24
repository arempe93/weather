import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { GenericActionOrList } from '@/types/actions'

import Action from '@/components/Action'
import Stack from '@/components/Stack'

export type Props = PropsWithChildren<{
  actions?: GenericActionOrList[]
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  title?: string
}>

const Header = ({ actions, children, justify = 'apart', title }: Props) => {
  return (
    <Stack justify={justify} style={{ padding: '20px 20px 0' }}>
      {title && (
        <div className="flex-initial w-full">
          <h4>{title}</h4>
        </div>
      )}
      {actions && (
        <Stack justify="end">
          {actions.map((action, idx) => (
            <Action
              key={idx}
              action={action}
              appearance="plain"
              listOptions={{
                align: 'below',
                justify: 'right',
              }}
            />
          ))}
        </Stack>
      )}
      {children}
    </Stack>
  )
}

export default Header
