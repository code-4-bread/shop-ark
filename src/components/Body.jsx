import { useState } from 'react';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Modal,
  Box,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import EngravingCard from './EngravingCard/EngravingCard';
import Stats from './Stats/Stats';
import { VERSION } from '../version';

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: black;
  padding: 20px;
`;

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

  const shopArkInfoStorage = localStorage.getItem('shop-ark-info');

  const shopArkInfo = shopArkInfoStorage
    ? JSON.parse(shopArkInfoStorage)
    : null;

  let updateModalShown = false;
  let version = '';

  if (shopArkInfo) {
    updateModalShown = shopArkInfo.updateModalShown;
    version = shopArkInfo.version;
  }

  const [state, setState] = useState(JSON.parse(existingState) || defaultData);

  const [open, setOpen] = useState(false);

  const [modalValue, setModalValue] = useState(
    !updateModalShown || version !== VERSION ? true : false
  );

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

  const handleCloseModal = () => {
    setModalValue(false);
    localStorage.setItem(
      'shop-ark-info',
      JSON.stringify({
        updateModalShown: true,
        version: VERSION,
      })
    );
  };

  return (
    <>
      <Modal
        open={modalValue}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBox>
          <Typography id='modal-modal-title' variant='h5' component='h2'>
            {VERSION}
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            - Added Artist class <br />- Added Aeromancer class
          </Typography>
          <Button style={{ marginTop: '20px' }} onClick={handleCloseModal}>
            Got it
          </Button>
        </StyledBox>
      </Modal>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle
          id='alert-dialog-title'
          style={{ backgroundColor: '#121212', color: 'white' }}
        >
          Do you really want to reset the build?
        </DialogTitle>
        <DialogContent style={{ backgroundColor: '#121212', color: 'white' }}>
          <DialogContentText
            id='alert-dialog-description'
            style={{ backgroundColor: '#121212', color: 'white' }}
          >
            This action is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#121212', color: 'white' }}>
          <Button onClick={handleClose} style={{ color: 'white' }}>
            No
          </Button>
          <Button onClick={resetData} style={{ color: 'white' }} autoFocus>
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
        <Grid item xs={12} md={3} style={{ height: '352px' }}>
          <Stats state={state} />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard
            title='Imprint'
            showNegative={false}
            showPriceField={false}
            state={state}
            setState={setState}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard
            title='Stone'
            state={state}
            setState={setState}
            isStone={true}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard title='Necklace' state={state} setState={setState} />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard title='Earring 1' state={state} setState={setState} />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard title='Earring 2' state={state} setState={setState} />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard title='Ring 1' state={state} setState={setState} />
        </Grid>
        <Grid item xs={12} md={3}>
          <EngravingCard title='Ring 2' state={state} setState={setState} />
        </Grid>
      </Grid>
      <p>
        Report a bug or contact us -{' '}
        <a
          href='mailto:contact@shopark.anonaddy.com'
          style={{ color: 'white' }}
        >
          contact@shopark.anonaddy.com
        </a>
      </p>
    </>
  );
};

export default Body;
