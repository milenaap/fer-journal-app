import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {

  return (
    
    <Box 
      sx={{display: 'flex'}}
      className='animate_animated animate__fadeIn animate__faster' 
    >

        <NavBar drawerWidth='240'/>

        <SideBar drawerWidth={ drawerWidth }/>
        

        <Box
            component='main'
            sx={{ flexGrow: 1, p:3 }}
        >
        
          <Toolbar />
            
            {children}

        </Box>

    </Box>
  )
}
