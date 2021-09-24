import cx from 'classnames'

import styles from './styles.module.css'

export type Props = JSX.IntrinsicElements['td']

const Cell = ({ className, ...rest }: Props) => {
  return <td {...rest} className={cx(className, styles.td)} />
}

export default Cell
