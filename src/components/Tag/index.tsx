import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

export type Props = {
  disabled?: boolean
  label: string
  onRemove?: () => void
}

const Tag = ({ disabled = false, label, onRemove }: Props) => {
  return (
    <span className={styles.main}>
      <span className={styles.text}>{label}</span>
      {!disabled && onRemove && (
        <button className={styles.close} onClick={onRemove}>
          <FontAwesomeIcon fixedWidth icon={faTimes} />
        </button>
      )}
    </span>
  )
}

export default Tag
