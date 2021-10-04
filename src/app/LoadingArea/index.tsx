import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'

import { StyleProps } from '@/types/styles'

export type Props = StyleProps

const LoadingArea = ({ className, ...rest }: Props) => {
  return (
    <div
      className={cx(
        className,
        'flex items-center justify-center w-full text-4xl text-white-alpha-24'
      )}
      {...rest}
    >
      <FontAwesomeIcon fixedWidth spin icon={faCircleNotch} />
    </div>
  )
}

export default LoadingArea
