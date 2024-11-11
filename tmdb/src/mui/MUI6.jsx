import AddTaskIcon from '@mui/icons-material/AddTask'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCardIcon from '@mui/icons-material/AddCard'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

function MUI6() {
   return (
      <div>
         <AddTaskIcon />
         <AddCardIcon />

         <IconButton aria-label="delete">
            <DeleteIcon />
         </IconButton>
         <IconButton aria-label="delete">
            <AddShoppingCartIcon />
         </IconButton>
      </div>
   )
}

export default MUI6
