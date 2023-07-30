import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
//import EnvDropdown from './EnvDropDown';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SettingModal(props:any) { 
  const [open, setOpen] = React.useState(true);
 
  return ( 
    <div>
      <Modal
        open={open}
        onClose={props.callback}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>  
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Settings 
          </Typography>
           <Grid gap={20} mt={1}>
           {/* <TextField fullWidth label="Tanent Name" id="fullWidth"  /> */}

           <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            autoFocus
          />
         
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Change Password"
            name="email"
            autoComplete="email"
            autoFocus
          />

          {/* <EnvDropdown /> */}
<Box sx={{display:'flex', justifyContent:'center'}}>
        <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "100px" }}
          >
            Save
          </Button>
          <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2 , ml: 2, width: "100px", background: 'red' , "&:hover":{background:'red'}}}
          >
            Cancel
          </Button>
</Box>
         
           </Grid>
        </Box>
      </Modal>
    </div>
  );
}
