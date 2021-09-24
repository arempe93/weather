import cx from 'classnames'

import styles from './styles.module.css'

export type Props = JSX.IntrinsicElements['thead']

const Head = ({ className, ...rest }: Props) => {
  return <thead {...rest} className={cx(className, styles.thead)} />
}

export default Head
