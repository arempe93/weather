import cx from 'classnames'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { GenericActionOrList } from '@/types/actions'

import Action from '@/components/Action'
import Stack from '@/components/Stack'

import styles from './styles.module.css'

export type Props = PropsWithChildren<{
  actions?: GenericActionOrList[]
  flush?: boolean
  justify?: ComponentPropsWithoutRef<typeof Stack>['justify']
  subdued?: boolean
  title?: string
}>

const Section = ({ actions, children, flush, subdued, title }: Props) => {
  const hasTitleBar = title || (actions && actions.length > 0)

  return (
    <div
      className={cx(styles.main, {
        [styles.flush]: flush,
        [styles.subdued]: subdued,
      })}
    >
      {hasTitleBar && (
        <Stack justify="apart" style={{ paddingBottom: 12 }}>
          <div className="flex-initial w-full">
            {title && (
              <small className="font-medium uppercase tracking-wide">
                {title}
              </small>
            )}
          </div>
          {actions && (
            <Stack justify="end">
              {actions.map((action, idx) => (
                <Action
                  key={idx}
                  action={action}
                  appearance="plain"
                  listOptions={{
                    align: 'end',
                  }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      )}
      {children}
    </div>
  )
}

export default Section
