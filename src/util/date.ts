import { format, fromUnixTime, parseISO } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const SHORT_DATE = 'PPP'
export const FULL_DATETIME = 'PPPp'

export const TIME_FORMAT_12H = 'h:mmaaaaa'
export const TIME_FORMAT_24H = 'HH:mm'

export const HOUR_FORMAT_12H = 'haaaaa'
export const HOUR_FORMAT_24H = 'HH'

export const WEEKDAY_FORMAT = 'EEEEEE'

export const parseAndFormat = (dateString: string, formatString: string) =>
  format(parseISO(dateString), formatString)

export const unixToZonedTime = (unix: number, tz: string) =>
  utcToZonedTime(fromUnixTime(unix), tz)

export type TimeUnit = '12H' | '24H'
export enum FormatKind {
  Time,
  Hour,
  Weekday,
}

export const getFormatString = (formatKind: FormatKind, unit: TimeUnit) => {
  switch (formatKind) {
    case FormatKind.Time:
      return unit === '12H' ? TIME_FORMAT_12H : TIME_FORMAT_24H
    case FormatKind.Hour:
      return unit === '12H' ? HOUR_FORMAT_12H : HOUR_FORMAT_24H
    case FormatKind.Weekday:
      return WEEKDAY_FORMAT
  }
}

type FormatUnixOptions = {
  formatKind: FormatKind
  tz: string
  unit: TimeUnit
}

export const formatUnix = (
  unix: number,
  { formatKind, tz, unit }: FormatUnixOptions
) => format(unixToZonedTime(unix, tz), getFormatString(formatKind, unit))
