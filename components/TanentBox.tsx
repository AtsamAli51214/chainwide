import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';


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

export default function TanentModal(props:any) { 
  const [open, setOpen] = React.useState(true);

  const model = "tanent";
 
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
            Tanent Details
          </Typography>
           <Grid gap={20} mt={1}>
           {/* <TextField fullWidth label="Tanent Name" id="fullWidth"  /> */}

           <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Tanent Name"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
           </Grid>
        </Box>
      </Modal>
    </div>
  );
}
