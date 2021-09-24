import { format, parseISO } from 'date-fns'

export const SHORT_DATE = 'PPP'
export const FULL_DATETIME = 'PPPp'

export const parseAndFormat = (dateString: string, formatString: string) =>
  format(parseISO(dateString), formatString)
