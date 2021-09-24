import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const ButtonGroup = (props: PropsWithChildren<{}>) => {
  return <div className={styles.main} {...props} />
}

export default ButtonGroup
