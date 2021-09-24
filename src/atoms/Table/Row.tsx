import cx from 'classnames'

import styles from './styles.module.css'

export type Props = JSX.IntrinsicElements['tr']

const Row = ({ className, ...rest }: Props) => {
  return <tr {...rest} className={cx(className, styles.tr)} />
}

export default Row
