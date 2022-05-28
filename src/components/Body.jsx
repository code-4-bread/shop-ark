import { Grid } from '@mui/material';
import EngravingCard from './EngravingCard/EngravingCard';
import Stats from './Stats/Stats';

const Body = () => {
  return (
    <Grid container maxWidth='xl' spacing={2}>
      <Grid item xs={3}>
        <Stats />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard
          title='Imprints'
          showNegative={false}
          showPriceField={false}
        />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Stone' />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Necklace' />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Earring 1' />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Earring 2' />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Ring 1' />
      </Grid>
      <Grid item xs={3}>
        <EngravingCard title='Ring 2' />
      </Grid>
    </Grid>
  );
};

export default Body;
