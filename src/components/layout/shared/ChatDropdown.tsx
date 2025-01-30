'use client'

// React Imports
import { useRef, useState } from 'react'
import type { MouseEvent } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import MenuList from '@mui/material/MenuList'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'

// Styled component for badge content
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
})

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLDivElement>(null)

  // Hooks
  const router = useRouter()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event?: MouseEvent<HTMLLIElement> | (MouseEvent | TouchEvent), url?: string) => {
    if (url) {
      router.push(url)
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <Badge
        ref={anchorRef}
        overlap='circular'
        badgeContent={<BadgeContentSpan onClick={handleDropdownOpen} />}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        className='mis-2'
      >
        <Avatar ref={anchorRef} className='cursor-pointer bs-[38px] is-[38px]' onClick={handleDropdownOpen}>
          <i className='ri-chat-3-line text-[1.5rem]' />
        </Avatar>
      </Badge>
      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-4 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className='shadow-lg'>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e as MouseEvent | TouchEvent)}>
                <MenuList>
                  <MenuItem className='gap-3 flex items-center justify-between' onClick={e => handleDropdownClose(e)}>
                    <div className='flex items-center gap-2'>
                      <Avatar alt='John Doe' src='/images/avatars/1.png' />
                      <div className='flex flex-col'>
                        <Typography className='font-medium' color='text.primary'>
                          John Doe
                        </Typography>
                        <Typography variant='caption'>10:45 AM</Typography>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Typography variant='body2' color='text.secondary'>
                        commented on post
                      </Typography>
                      <i className='ri-arrow-right-s-line text-[1.2rem]' />
                    </div>
                  </MenuItem>
                  <MenuItem className='gap-3 flex items-center justify-between' onClick={e => handleDropdownClose(e)}>
                    <div className='flex items-center gap-2'>
                      <Avatar alt='John Doe' src='/images/avatars/1.png' />
                      <div className='flex flex-col'>
                        <Typography className='font-medium' color='text.primary'>
                          John Doe
                        </Typography>
                        <Typography variant='caption'>10:45 AM</Typography>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Typography variant='body2' color='text.secondary'>
                        commented on post
                      </Typography>
                      <i className='ri-arrow-right-s-line text-[1.2rem]' />
                    </div>
                  </MenuItem>
                  <MenuItem className='gap-3 flex items-center justify-between' onClick={e => handleDropdownClose(e)}>
                    <div className='flex items-center gap-2'>
                      <Avatar alt='John Doe' src='/images/avatars/1.png' />
                      <div className='flex flex-col'>
                        <Typography className='font-medium' color='text.primary'>
                          John Doe
                        </Typography>
                        <Typography variant='caption'>10:45 AM</Typography>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Typography variant='body2' color='text.secondary'>
                        commented on post
                      </Typography>
                      <i className='ri-arrow-right-s-line text-[1.2rem]' />
                    </div>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
