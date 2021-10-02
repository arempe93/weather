import { format, parseISO } from 'date-fns'

export const SHORT_DATE = 'PPP'
export const FULL_DATETIME = 'PPPp'

export const parseAndFormat = (dateString: string, formatString: string) =>
  format(parseISO(dateString), formatString)

export const TIME_FORMAT_12H = 'p'
export const TIME_FORMAT_24H = 'HH:mm'

export const HOUR_FORMAT_12H = 'ha'
export const HOUR_FORMAT_24H = 'HH'
