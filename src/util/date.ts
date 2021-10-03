import { format, fromUnixTime, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const SHORT_DATE = 'PPP'
export const FULL_DATETIME = 'PPPp'

export const TIME_FORMAT_12H = 'p'
export const TIME_FORMAT_24H = 'HH:mm'

export const HOUR_FORMAT_12H = 'haaaaa'
export const HOUR_FORMAT_24H = 'HH'

export const WEEKDAY_FORMAT = 'EEEEEE'

export const parseAndFormat = (dateString: string, formatString: string) =>
  format(parseISO(dateString), formatString)

export const unixToZonedTime = (unix: number, tz: string) =>
  utcToZonedTime(fromUnixTime(unix), tz)
