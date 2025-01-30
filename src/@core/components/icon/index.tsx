// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import { Icon as MuiIcon } from '@mui/material'
import type { IconProps } from '@mui/material/Icon'

const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <MuiIcon ref={ref} {...rest}>
      {children}
    </MuiIcon>
  )
})

Icon.displayName = 'Icon'

export default Icon
