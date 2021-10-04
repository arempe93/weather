import { PropsWithChildren } from 'react'

import Stack from '@/components/Stack'

export type Props = {
  iconSrc: string
  title: string
}

const Detail = ({ children, iconSrc, title }: PropsWithChildren<Props>) => {
  return (
    <Stack vertical align="center" className="p-2 rounded-lg bg-white-alpha-8">
      <img className="w-8 h-8" src={iconSrc} />
      <Stack vertical align="center" gap={4}>
        <small className="text-white-alpha-88">{title}</small>
        <p className="text-[white] text-base">{children}</p>
      </Stack>
    </Stack>
  )
}

export default Detail
