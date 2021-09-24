import { format as formatDate, formatISO } from 'date-fns'

import { StyleProps } from '@/types/styles'

import { FULL_DATETIME, parseAndFormat } from '@/util/date'

export type Props = StyleProps & {
  format?: string
  value: Date | string
}

const Time = ({ format = FULL_DATETIME, value, ...rest }: Props) => {
  return (
    <time
      {...rest}
      dateTime={typeof value === 'string' ? value : formatISO(value)}
    >
      {typeof value === 'string'
        ? parseAndFormat(value, format)
        : formatDate(value, format)}
    </time>
  )
}

export default Time
