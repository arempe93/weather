import { PropsWithChildren } from 'react'

import Stack from '@/components/Stack'

export type Props = {
  title: string
}

const Section = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <Stack vertical className="py-2" gap={12}>
      <Stack gap={16}>
        <p className="text-[white] uppercase text-sm font-light tracking-wider">
          {title}
        </p>
        <div className="flex-1 h-[1px] bg-white-alpha-76 w-full" />
      </Stack>
      {children}
    </Stack>
  )
}

export default Section
