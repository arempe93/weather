import cx from 'classnames'

import styles from './styles.module.css'

export type Props = JSX.IntrinsicElements['th']

const Heading = ({ className, ...rest }: Props) => {
  return <th {...rest} className={cx(className, styles.th)} />
}

export default Heading
