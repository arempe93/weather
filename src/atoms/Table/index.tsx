import cx from 'classnames'
import { forwardRef, ForwardRefExoticComponent } from 'react'

import Body from './Body'
import Cell from './Cell'
import Head from './Head'
import Heading from './Heading'
import Row from './Row'

import styles from './styles.module.css'

type TableType = ForwardRefExoticComponent<Props> & {
  Body: typeof Body
  Cell: typeof Cell
  Head: typeof Head
  Heading: typeof Heading
  Row: typeof Row
}

export type Props = JSX.IntrinsicElements['table']

const Table = forwardRef<HTMLTableElement, Props>(
  ({ className, ...rest }, ref) => {
    return <table ref={ref} {...rest} className={cx(className, styles.table)} />
  }
) as TableType

Table.Body = Body
Table.Cell = Cell
Table.Head = Head
Table.Heading = Heading
Table.Row = Row

export default Table
