import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function MUI7() {
   const [color, setColor] = useState('primary')

   const handleClick = () => {
      setColor((prevColor) => (prevColor === 'primary' ? 'secondary' : 'primary'))
   }
   return (
      <Button variant="contained" color={color} onClick={handleClick}>
         Toggle Color
      </Button>
   )
}

export default MUI7
