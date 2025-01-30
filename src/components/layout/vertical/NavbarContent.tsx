// MUI Imports

// Third-party Imports
import classnames from 'classnames'

import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'
import ChatDropdown from '@components/layout/shared/ChatDropdown'
import NotificationDropdown from '@components/layout/shared/NotifDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-2 sm:gap-4'></div>
      <div className='flex items-center'>
        <ModeDropdown />
        <ChatDropdown />
        <NotificationDropdown />
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
