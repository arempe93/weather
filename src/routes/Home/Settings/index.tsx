import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Popover from '@/components/Popover'

import Menu from './Menu'

const Settings = () => {
  return (
    <div className="flex items-center justify-center">
      <Popover>
        <Popover.Trigger asChild>
          <button
            aria-label="Open settings menu"
            className="h-9 w-9 inline-flex items-center justify-center text-lg text-[white] bg-white-alpha-12 rounded-full focus:ring-2 focus:ring-[white] focus:outline-none"
          >
            <FontAwesomeIcon icon={faCog} />
          </button>
        </Popover.Trigger>
        <Popover.Content align="end">
          <Menu />
        </Popover.Content>
      </Popover>
    </div>
  )
}

export default Settings
