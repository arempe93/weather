import { PropsWithChildren, ReactNode } from 'react'

import { GenericAction, GenericActionOrList } from '@/types/actions'

import Action, { Props as ActionProps } from '@/components/Action'
import SingleColumnLayout, {
  Variants as SingleColumnLayoutVariants,
} from '@/components/SingleColumnLayout'
import Skeleton from '@/components/Skeleton'
import Stack from '@/components/Stack'

import styles from './styles.module.css'

const listOptions: NonNullable<ActionProps['listOptions']> = {
  align: 'end',
} as const

export type Props = SingleColumnLayoutVariants & {
  isLoading?: boolean
  media?: ReactNode
  primaryAction?: GenericAction
  secondaryActions?: GenericActionOrList[]
  skeleton?: ReactNode
  subtitle?: ReactNode
  title: ReactNode
}

const Page = ({
  children = null,
  isLoading = false,
  media = null,
  primaryAction,
  secondaryActions,
  size = 'lg',
  skeleton = null,
  subtitle = null,
  title,
}: PropsWithChildren<Props>) => {
  const titleMarkup = isLoading ? (
    <Skeleton.Text kind="h1" />
  ) : typeof title === 'string' ? (
    <h1>{title}</h1>
  ) : (
    title
  )

  const subtitleMarkup = isLoading ? (
    <Skeleton.Text kind="h4" />
  ) : typeof subtitle === 'string' ? (
    <h4 className="text-light">{subtitle}</h4>
  ) : (
    subtitle ?? null
  )

  const secondaryActionsMarkup = secondaryActions?.map((action, index) =>
    isLoading ? (
      <Skeleton.Action key={index} />
    ) : (
      <Action
        key={index}
        action={action}
        appearance="clear"
        listOptions={listOptions}
      />
    )
  )

  const primaryActionMarkup = isLoading ? (
    <Skeleton.Action />
  ) : primaryAction ? (
    <Action action={primaryAction} appearance="primary" />
  ) : null

  return (
    <>
      <SingleColumnLayout
        className="bg-[white] border-b border-neutral-lighter shadow-sm laptop:px-8"
        size={size}
      >
        <div className={styles.header}>
          <Stack gap={24}>
            {media && <div>{media}</div>}
            <Stack vertical gap={2}>
              {titleMarkup}
              {subtitle && subtitleMarkup}
            </Stack>
          </Stack>
          <Stack gap={8} justify="end">
            {secondaryActionsMarkup}
            {primaryAction && primaryActionMarkup}
          </Stack>
        </div>
      </SingleColumnLayout>
      <SingleColumnLayout className="laptop:px-8" size={size}>
        <div className={styles.content}>
          {isLoading ? skeleton ?? children : children}
        </div>
      </SingleColumnLayout>
    </>
  )
}

export default Page
