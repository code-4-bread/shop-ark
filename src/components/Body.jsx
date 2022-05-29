import { useState } from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import EngravingCard from './EngravingCard/EngravingCard';
import Stats from './Stats/Stats';

const Body = () => {
  const existingState = localStorage.getItem('shop-ark-state');
  const defaultData = {
    imprint: { p1: {}, p2: {} },
    stone: { p1: {}, p2: {}, n1: {}, price: 0 },
    necklace: { p1: {}, p2: {}, n1: {}, price: 0 },
    earring1: { p1: {}, p2: {}, n1: {}, price: 0 },
    earring2: { p1: {}, p2: {}, n1: {}, price: 0 },
    ring1: { p1: {}, p2: {}, n1: {}, price: 0 },
    ring2: { p1: {}, p2: {}, n1: {}, price: 0 },
  };

  const [state, setState] = useState(JSON.parse(existingState) || defaultData);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetData = () => {
    setState(defaultData);

    localStorage.setItem('shop-ark-state', JSON.stringify(defaultData));

    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Do you really want to reset the build?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This action is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={resetData} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container maxWidth='xl' spacing={2}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant='outlined' color='error' onClick={handleClickOpen}>
            Reset
          </Button>
        </Grid>
        <Grid item xs={3} style={{ height: '352px' }}>
          <Stats state={state} />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard
            title='Imprint'
            showNegative={false}
            showPriceField={false}
            state={state}
            setState={setState}
          />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard
            title='Stone'
            state={state}
            setState={setState}
            isStone={true}
          />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard title='Necklace' state={state} setState={setState} />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard title='Earring 1' state={state} setState={setState} />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard title='Earring 2' state={state} setState={setState} />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard title='Ring 1' state={state} setState={setState} />
        </Grid>
        <Grid item xs={3}>
          <EngravingCard title='Ring 2' state={state} setState={setState} />
        </Grid>
      </Grid>
    </>
  );
};

export default Body;
