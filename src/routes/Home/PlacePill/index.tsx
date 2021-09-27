import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

import styles from './styles.module.css'

export type Props = {
  icon: IconDefinition
  name: string
  onRemove?: () => void
  onSelect: () => void
}

const PlacePill = ({ icon, name, onRemove, onSelect }: Props) => {
  return (
    <div
      className={cx(styles.main, {
        [styles.uncloseable]: typeof onRemove === 'undefined',
      })}
      onClick={onSelect}
    >
      <FontAwesomeIcon fixedWidth icon={icon} />
      <span>{name}</span>
      {onRemove && (
        <button
          className={styles.close}
          onClick={(ev) => {
            ev.stopPropagation()
            onRemove()
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  )
}

export default PlacePill
