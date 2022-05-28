import { useState } from 'react';
import { Grid } from '@mui/material';
import EngravingCard from './EngravingCard/EngravingCard';
import Stats from './Stats/Stats';

const Body = () => {
  const existingState = localStorage.getItem('shop-ark-state');

  const [state, setState] = useState(
    JSON.parse(existingState) || {
      imprint: { p1: {}, p2: {} },
      stone: { p1: {}, p2: {}, n1: {}, price: 0 },
      necklace: { p1: {}, p2: {}, n1: {}, price: 0 },
      earring1: { p1: {}, p2: {}, n1: {}, price: 0 },
      earring2: { p1: {}, p2: {}, n1: {}, price: 0 },
      ring1: { p1: {}, p2: {}, n1: {}, price: 0 },
      ring2: { p1: {}, p2: {}, n1: {}, price: 0 },
    }
  );

  return (
    <Grid container maxWidth='xl' spacing={2}>
      <Grid item xs={3}>
        <Stats />
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
        <EngravingCard title='Stone' state={state} setState={setState} />
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
  );
};

export default Body;
